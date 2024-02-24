// Original version created by Cory Rylan: https://coryrylan.com/blog/angular-2-form-builder-and-validation-management
import { AbstractControl } from '@angular/forms';

export class ValidationService {

    static getValidatorErrorMessage(code: string) {
        const config: any = {
            'required': 'Required',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'invalidMobileNumber' : 'Invalid mobile number'
        };
        return config[code];
    }

    static mobileNumberValidator(control: AbstractControl) {
        // match with numbers like 09123456789
        if (control.value.match(/^0?9[0-9]{9}$/)) {
            return null;
        } else {
            return { 'invalidMobileNumber': true };
        }
    }
    // (?<= |^)@[\w\d]+

    static userNameValidator(control: AbstractControl) {
        // match with user name have underline or letter
        if (control.value.match(/^(?<= |^)@[\w\d]+$/)) {
            return null;
        } else {
            return { 'invalidUserName': true };
        }
    }


    static emailValidator(control: AbstractControl) {
        // RFC 2822 compliant regex
        // tslint:disable-next-line
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }

    static passwordValidator(control: AbstractControl) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        // (?!.*\s)          - Spaces are not allowed
        // tslint:disable-next-line
        if (control.value.match(/^(?=.*\d)(?=.*[a-zA-Z!@#$%^&*])(?!.*\s).{6,100}$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }
}
