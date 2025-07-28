import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.css']
})
export class LoginPage implements OnInit {
  form!: FormGroup;

  constructor(private auth: AuthService, private fb: FormBuilder) { }


  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  onSubmit() {
  this.auth.login(this.form.value).subscribe({
    next: () => console.log('Login success'),
    error: (err) => console.error('Login failed:', err)
  });
}


}
