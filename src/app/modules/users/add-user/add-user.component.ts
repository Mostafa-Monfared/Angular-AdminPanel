import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
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
  submitDisabled : boolean;

  constructor(private router: Router, private formBuilder: FormBuilder , private userDataService : UserDataService) {
    this.initUserForm();
  }

  initUserForm(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      family: ['', Validators.required],
      fatherName: ['', Validators.required],
      gender: ['', Validators.required],
      status: ['', Validators.required],
      address: ['', Validators.required],
      birthDay: ['', Validators.required],
      province: ['', Validators.required],
      userName: ['', [Validators.required, ValidationService.userNameValidator]],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      mobileNumber: ['', [Validators.required, ValidationService.mobileNumberValidator]],
      nationalCode: ['', [Validators.required, ValidationService.nationalCodeValidator]],
    });
  }

  ngOnInit() {
  }

addUser(): void {
  const user: User = this.userForm.value;
  this.userDataService.addUser(user).subscribe(
    (newUser: User) => {
      console.log('User added successfully:', newUser);
      this.userForm.reset();
    },
    (error) => {
      console.error('Error adding user:', error);
    }
  );
  }

  onCancel(event) {
    this.router.navigateByUrl('layout/users');
  }
}
