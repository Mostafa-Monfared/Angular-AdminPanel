import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap, delay, finalize, catchError } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';
import {
  FormGroup,
  FormBuilder,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  error: string;
  isLoading: boolean;
  loginForm: FormGroup;
  private sub = new Subscription();
  constructor(
    private formBuilder: FormBuilder,
    private router: Router) {
      this.buildForm();
  }
  private buildForm(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  login() {
    this.router.navigate(["/layout"]);



   
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
