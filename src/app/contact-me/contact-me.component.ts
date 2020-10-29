// Imports
import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HostListener } from '@angular/core';

// Component file definitions
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
})

// TS class definition
export class ContactMeComponent implements OnInit {
  // Properties
  contactForm: FormGroup;
  disabledSubmitButton = true;
  optionsSelect: Array<any>;

  // Listener
  @HostListener('input') oninput() {
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  // Constructor for form
  constructor(
    private fb: FormBuilder,
    private connectionService: ConnectionService
  ) {
    this.contactForm = fb.group({
      contactFormName: ['', Validators.required],
      contactFormEmail: [
        '',
        Validators.compose([Validators.required, Validators.email]),
      ],
      contactFormSubjects: ['', Validators.required],
      contactFormMessage: ['', Validators.required],
      contactFormCopy: [''],
    });
  }

  // OnSubmit()
  // On submission for form function
  onSubmit() {
    const formAlert =
      'Thank you ${this.name} for your submission! I should get back to you within 24 hours!';
    // Send the message
    this.connectionService.sendMessage(this.contactForm.value).subscribe(
      () => {
        alert(formAlert);
        this.contactForm.reset();
        this.disabledSubmitButton = true;
      },
      (error) => {
        console.log('Error in contact form', error);
      }
    );
  }

  ngOnInit(): void {}

  submitForm(): void {
    const formAlert = `Thank you ${this.name} for your submission! I should get back to you within 24 hours!`;
    alert(formAlert);
  }
}
