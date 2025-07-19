module.exports = (res, error)=>{
    res.status(500).json({
        succcess: false,
        message: error.message ? error.message : error
    })
}