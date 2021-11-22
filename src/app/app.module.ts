import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TestFormComponent } from './test-form/test-form.component';
import { MailValidatorDirective } from './mail-validator.directive';
import { TestReactiveFormComponent } from './test-reactive-form/test-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TestFormComponent,
    MailValidatorDirective,
    TestReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
