import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms'

@Directive({
  selector: '[appMailValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: MailValidatorDirective, multi: true }
  ]
})
export class MailValidatorDirective implements Validator {

  constructor() { }

  validate(control: FormControl) {

    let mailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    let test = mailFormat.test(control.value);
    
    if (!test) {
        return {
            'mailValidation': true
        };
    }

    return null;
  }

}
