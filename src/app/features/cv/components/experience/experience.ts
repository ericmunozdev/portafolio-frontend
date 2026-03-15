import { Component, input } from '@angular/core';
import { iExperience } from '../../interfaces/experience.interface';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experience = input.required<iExperience[]>();
}
