import { Component, input } from '@angular/core';
import { iContact } from '../../interfaces/contact.interface';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contact = input.required<iContact[]>();
}
