import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
})
export class ContactMeComponent implements OnInit {
  FormData: FormGroup;

  constructor(private builder: FormBuilder, private contact: ContactService) {}

  ngOnInit(): void {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [
        Validators.compose([Validators.required, Validators.email]),
      ]),
      Comment: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(FormData): void {
    console.log(FormData);
    this.contact.PostMessage(FormData).subscribe(
      (Response) => {
        location.href = 'https://mailthis.to/confirm';
        console.log(Response);
      },
      (error) => {
        console.warn(error.responseText);
        console.log({ error });
      }
    );
    const formAlert = `Thank you for your submission! I should get back to you within 24 hours!`;
    alert(formAlert);
  }
}
