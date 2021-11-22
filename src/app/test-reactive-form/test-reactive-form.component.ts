import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-test-reactive-form',
  templateUrl: './test-reactive-form.component.html',
  styleUrls: ['./test-reactive-form.component.scss']
})
export class TestReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.warn('gowno');
    console.log(this.name);
  }

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    surname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.pattern('^[0-9 ()-+]{6,}$')]),
    nationality: new FormControl('', Validators.required),
  })
  
  nationalities: string[] = ['Turkish', 'Georgian', 'Salvadoran', 'Panamanian', 'Indian'];

  get name() {
    return this.userForm.get('name') as FormControl; // !!!! as FormControl !!!! crashes otherwise
  }

  get surname() {
    return this.userForm.get('surname') as FormControl;
  }

  get mail() {
    return this.userForm.get('mail') as FormControl;
  }

  get phoneNumber() {
    return this.userForm.get('phoneNumber') as FormControl;
  }

  get nationality() {
    return this.userForm.get('nationality') as FormControl;
  }
  
  submitted: boolean = false;

  showSummary() {

    this.submitted = true;
  }

}
