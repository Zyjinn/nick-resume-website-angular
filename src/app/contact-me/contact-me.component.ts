import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
})
export class ContactMeComponent implements OnInit {
  // Properties
  name: string;
  email: string;
  message: string;

  constructor() {}

  ngOnInit(): void {}

  submitForm(): void {
    const formAlert = `Thank you ${this.name} for your submission! I should get back to you within 24 hours!`;
    alert(formAlert);
  }
}
