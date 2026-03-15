import { Component, input } from '@angular/core';
import { iProfile } from '../../interfaces/profile.interface';

@Component({
  selector: 'app-additional',
  imports: [],
  templateUrl: './additional.html',
  styleUrl: './additional.css',
})
export class Additional {
  profile = input.required<iProfile>();
}
