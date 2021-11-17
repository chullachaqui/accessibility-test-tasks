import { Component } from '@angular/core';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent {

  // public name: string = '';
  // public surname: string = '';
  // public mail: string = '';
  // public phone: number = +48;
  public nationalities: string[] = ['Polish', 'English', 'Uruguayan', 'Spanish'];

  user = {
    name: '',
    surname: '',
    mail: '',
    phoneNumber: '',
    nationality: ''
  }

  phoneCheck: boolean = false;

  constructor( ) { }

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

}
