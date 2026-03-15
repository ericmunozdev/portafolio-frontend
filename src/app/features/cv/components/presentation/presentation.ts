import { Component, input } from '@angular/core';
import { iProfile } from '../../interfaces/profile.interface';

@Component({
  selector: 'app-presentation',
  imports: [],
  templateUrl: './presentation.html',
  styleUrl: './presentation.css',
})
export class Presentation {
  profile = input.required<iProfile>();
}
