import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap, delay, finalize, catchError } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  UntypedFormControl
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  error: string;
  isLoading: boolean;
  loginForm: UntypedFormGroup;
  private sub = new Subscription();
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router) {
      this.buildForm();
  }
  private buildForm(): void {
    this.loginForm = new UntypedFormGroup({
      username: new UntypedFormControl(''),
      password: new UntypedFormControl('')
    });
  }

  login() {
    this.router.navigate(["/layout"]);



   
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
