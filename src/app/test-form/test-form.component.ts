import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent {

  nationalities: string[] = ['Polish', 'English', 'Uruguayan', 'Spanish'];

  user = {
    name: '',
    surname: '',
    mail: '',
    phoneNumber: '',
    nationality: ''
  }

  phoneCheck: boolean = false;
  submitted: boolean = false;

  ngOnInit(): void {
  }

  phoneChecker(phoneNumber: string) {
    let pattern = /^[0-9 ()-+]{6,}$/;

    if (pattern.test(phoneNumber)) {
      this.phoneCheck = true;
    } else {
      this.phoneCheck = false;
    }

  }

  showSummary() {
    this.submitted = true;
  }

  reset(input: NgModel) {
    input.reset(input.value) // set in order for NVDA to re-read the alert message if it is unchanged while typing
  }

}
