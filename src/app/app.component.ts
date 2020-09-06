import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mega-hack-women-web';
  message;

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      'user_email': new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])
    });
  }


  public sendEmail(e: Event) {
    if (this.form.invalid) {
      this.message = 'Email inválido';
      return;
    }

    this.message = 'Email cadastrado!';
    this.form.controls.user_email.setValue('');
    /*emailjs.sendForm('ninhoapp', 'template_pu6pesi', e.target as HTMLFormElement, 'user_YWQ5G8qcxrqtmAVj6Eijl')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });*/
  }
}
