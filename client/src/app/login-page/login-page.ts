import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.css']
})
export class LoginPage implements OnInit {
  constructor () {}
  ngOnInit() {}
}
