import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from 'src/app/core/services/validation.service';

@Component({
  selector: 'control-messages',
  template: `
  <div *ngIf="errorMessage !== null">{{errorMessage}}</div>
      <style>
      div {
        color: #dc4035;
        font-size: small;
      }
    </style>`
})
export class ControlMessagesComponent {
  @Input() control: FormControl;
  constructor() { }

  get errorMessage() {
    if (this.control && this.control.errors && this.control.touched) {
      for (let propertyName in this.control.errors) {
        if (this.control.errors.hasOwnProperty(propertyName)) {
          return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
        }
      }
    }
    return null;
  }
}