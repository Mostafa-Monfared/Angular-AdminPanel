import { AbstractControl } from '@angular/forms';

export class ValidationService {

    static getValidatorErrorMessage(code: string, validatorValue?: any) {
        const config: any = {
            'required': 'این فیلد اجباریست',
            'invalidEmailAddress': 'لطفا قالب ایمیل خود را به درستی وارد کنید',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'invalidMobileNumber': 'شماره تلفن باید با 09 شروع شده و 11 رقم باشد',
            'invalidnationalCode': 'کد ملی باید 10 رقم باشد',
            'invalidUserName': 'نام کاربری باید به صورت لاتین باشد و با @ شروع شود'
        };
        return config[code];
    }

    static mobileNumberValidator(control: AbstractControl) {
        if (control.value && control.value.match(/^0?9[0-9]{9}$/)) {
            return null;
        } else {
            return { 'invalidMobileNumber': true };
        }
    }

    static nationalCodeValidator(control: AbstractControl) {
        if (control.value && control.value.match(/[0-9]{10}$/)) {
            return null;
        } else {
            return { 'invalidnationalCode': true };
        }
    }

    static userNameValidator(control: AbstractControl) {
        if (control.value && control.value.match(/^(?<= |^)@[\w\d]+$/)) {
            return null;
        } else {
            return { 'invalidUserName': true };
        }
    }


    static emailValidator(control: AbstractControl) {
        if (control.value && control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }

    static passwordValidator(control: AbstractControl) {
        if (control.value && control.value.match(/^(?=.*\d)(?=.*[a-zA-Z!@#$%^&*])(?!.*\s).{6,100}$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }
}
