import { CommonModule } from '@angular/common';
import { Component, importProvidersFrom } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GoogleAuthService } from '../../../core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    GoogleAuthService
  ],
  standalone: true
})
export class LoginComponent {
  public showPassword: boolean = false;

  loginForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private googleAuthService: GoogleAuthService) { // Inject GoogleAuthService
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // ایمیل الزامی و باید صحیح باشد
      password: ['', [Validators.required, Validators.minLength(6)]], // پسورد الزامی و حداقل طول ۶
    });
  }
  onSubmit() {
    this.submitted = true;
  
    if (this.loginForm.invalid) {
      return;
    }
  
    console.log('Form Submitted', this.loginForm.value);
  }
  get f() {
    return this.loginForm.controls;
  }
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  loginWithGoogle(): void {
    this.googleAuthService.googleSignIn().then(
      (response: any) => {
        console.log('Logged in with Google successfully', response);
        // Handle successful login, e.g., navigate to dashboard
      },
      (error: any) => {
        console.error('Google login failed', error);
        // Handle login failure, e.g., show error message
      }
    );
  }
}