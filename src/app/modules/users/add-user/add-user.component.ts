import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/core/services/user-data.service';
import { ValidationService } from 'src/app/core/services/validation.service';
import { User } from 'src/app/core/states/users/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;
  user : User = new User();
  users: User[] = [];


  constructor(private router: Router, private formBuilder: FormBuilder , private userDataService : UserDataService, private http: HttpClient) {
    this.initForm();
  }

  initForm(): void {
    this.userForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'family': ['', Validators.required],
      'userName': ['', [Validators.required, ValidationService.userNameValidator]],
      'fatherName': ['', Validators.required],
      'gender': ['', Validators.required],
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'mobileNumber': ['', [Validators.required, ValidationService.mobileNumberValidator]],
      'nationalCode': ['', [Validators.required, ValidationService.nationalCodeValidator]],
      'status': ['', Validators.required],
      'address': ['', Validators.required],
      'birthDay': ['', Validators.required],
      'province': ['', Validators.required]
    });
  }

  ngOnInit() {
     this.buildForm();
    this.initForm();

  }

addUser(): any {
    const userData: User = this.userForm.value;
    this.userDataService.addUser(userData).subscribe(
      (newUser: User) => {
        console.log('User added successfully:', newUser);
        this.userForm.reset(); // پاک کردن فرم بعد از افزوده شدن کاربر
      },
      (error) => {
        console.error('Error adding user:', error);
      }
    );
}

  buildForm() {

  }

  onCancel(event) {
    this.router.navigateByUrl('layout/users');
  }

  submitForm() {
    
  }
}
