import { Component, input } from '@angular/core';
import { iProfile } from '../../../../core/domain/cv.model';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  profile = input.required<iProfile>();
}
