import { Component, input } from '@angular/core';
import { iProfile } from '../../interfaces/profile.interface';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  profile = input.required<iProfile>();
}
