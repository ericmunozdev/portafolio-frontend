import { Component, computed, input } from '@angular/core';
import { iContact } from '../../interfaces/contact.interface';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contact = input.required<iContact[]>();

  sortedContact = computed(() => [...this.contact()].sort((a, b) => a.position - b.position));

  getLink(contacto: iContact): string {
    switch (contacto.typeName) {
      case 'phone':
        return `tel:${contacto.value.replace(/\s+/g, '')}`;

      case 'mail':
        return `mailto:${contacto.value}`;

      case 'url':
        return contacto.value;

      case 'whatsapp':
        return `https://wa.me/${contacto.value.replace(/\D/g, '')}`;

      default:
        return contacto.value;
    }
  }

  isExternal(contacto: iContact): boolean {
    return contacto.typeName === 'url';
  }
}
