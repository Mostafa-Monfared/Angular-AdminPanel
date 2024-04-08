import { AbstractControl } from '@angular/forms';

export class ValidationService {

    static getValidatorErrorMessage(code: string, validatorValue?: any) {
        const config: any = {
            'required': 'این فیلد اجباریست',
            'invalidEmailAddress': 'لطفا قالب ایمیل خود را به درستی وارد کنید',
            'invalidPassword': 'رمز عبور نامعتبر، رمز عبور باید حداقل 6 کاراکتر داشته باشد و دارای یک عدد باشد.',
            'invalidMobileNumber': 'شماره تلفن باید با 09 شروع شده و 11 رقم باشد',
            'invalidnationalCode': 'کد ملی باید 10 رقم باشد',
            'invalidUserName': 'نام کاربری باید به صورت لاتین باشد.',
            'spaceError' : " مقدار وارد شده باید به صورت چسیبده و بدون فاصله باشد. "
        };
        return config[code];
    }

    static mobileNumberValidator(control: AbstractControl) {

        const mobileNumberRegex = /^(0|\+98)9[0-9]{9}$/;

        if (control.value && control.value.match(/\s/)) {
            return { 'spaceError': true }; 
        } else if (control.value && control.value.match(mobileNumberRegex)) {
            return null; 
        } else {
            return { 'invalidMobileNumber': true };
        }
    }


    static nationalCodeValidator(control: AbstractControl) {
        const nationalCodeRegex =/[0-9]{10}$/;

        if (control.value && control.value.match(/\s/)) {
            return { 'spaceError': true }; 
        } else if (control.value && control.value.match(nationalCodeRegex)) {
            return null; 
        } else {
            return { 'invalidnationalCode': true };
        }
    }

    static userNameValidator(control: AbstractControl) {

        const userNameRegex =/^(?<= |^)[\w\d]+$/;

        if (control.value && control.value.match(/\s/)) {
            return { 'spaceError': true }; 
        } else if (control.value && control.value.match(userNameRegex)) {
            return null; 
        } else {
            return { 'invalidUserName': true };
        }
    }


    static emailValidator(control: AbstractControl) {

        const emailAddressRegex =/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

        if (control.value && control.value.match(/\s/)) {
            return { 'spaceError': true }; 
        } else if (control.value && control.value.match(emailAddressRegex)) {
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
