import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
})
export class ContactMeComponent implements OnInit {
  FormData: FormGroup;

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [
        Validators.compose([Validators.required, Validators.email]),
      ]),
      Comment: new FormControl('', [Validators.required]),
    });
  }

  submitForm(): void {
    const formAlert = `Thank you ${this.name} for your submission! I should get back to you within 24 hours!`;
    alert(formAlert);
  }
}
