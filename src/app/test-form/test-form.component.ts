import { Component } from '@angular/core';

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

  showStatus() {
    this.submitted = true;
  }

}
