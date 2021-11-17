import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TestFormComponent } from './test-form/test-form.component';
import { MailValidatorDirective } from './mail-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestFormComponent,
    MailValidatorDirective,
    // FormsModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
