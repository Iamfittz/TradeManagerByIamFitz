const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const keys = require('../config/keys')
const utils = require('../utils/errorHandler')
const errorHandler = require('../utils/errorHandler')

module.exports.login = async function(req,res){
    const candidate = await User.findOne({email:req.body.email})
    if (candidate){
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
        if (passwordResult){
            const token = jwt.sign({
                email: candidate.email,
                userId : candidate._id
            }, keys.jwt, {expiresIn:60*60})

            res.status(200).json({
                token:`Bearer ${token}`
            })
        } else{
            res.status(401).json({
                message:"The password doesnt match"
            })
        }
    } else {
        res.status(404).json({
            message: 'The user with this email havent been found'
        })
    }
}
module.exports.register = async function(req,res){
    //email//pass
    const candidate = await User.findOne({email:req.body.email})

    if(candidate){
        res.status(409).json({
            message:'This emal has already been used. Try another one.'
        })
    } else{
        const salt = bcrypt.genSaltSync(10)
        const password = req.body.password
        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password,salt)
        })
        try{
            await user.save()
            res.status(201).json(user)
        }
        catch(e){
            errorHandler(res,e)
        }
    }
}