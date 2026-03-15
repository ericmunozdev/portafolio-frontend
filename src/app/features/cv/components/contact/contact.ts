import { Component, input } from '@angular/core';
import { iContact } from '../../interfaces/profile.interface';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contact = input.required<iContact>();
}
