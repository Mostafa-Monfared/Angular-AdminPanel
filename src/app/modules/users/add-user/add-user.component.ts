import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationService } from 'src/app/core/services/validation.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup = {} as FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.addUserForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'mobileNumber': ['', [Validators.required, ValidationService.mobileNumberValidator]],
      'nationalCode': ['', [Validators.required, ValidationService.nationalCodeValidator]],
      'username': ['', [Validators.required, ValidationService.userNameValidator]],
      'profile': ['', [Validators.required, Validators.minLength(10)]],
    });

  }

  ngOnInit() {
    // this.buildForm();
  }

  buildForm() {
    this.addUserForm = this.formBuilder.group({
      userName: ['', [Validators.required, ValidationService.userNameValidator]],
      province: ['', [Validators.required, ValidationService.passwordValidator]]
    });
  }

  onCancel(event) {
    this.router.navigateByUrl('layout/users');
  }

  submitForm() {
    
  }
}
