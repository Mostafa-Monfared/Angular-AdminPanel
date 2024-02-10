import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  passwordRegex: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  password: string;
  confirmPassword: string;

  constructor(private router: Router) { }

  onUsers(event) {
    this.router.navigateByUrl('layout/users');

  }

  submitForm() {

  }
}
