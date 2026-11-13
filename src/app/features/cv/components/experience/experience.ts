import { Component, input } from '@angular/core';
import { iExperience } from '../../interfaces/experience.interface';
import { formatSkills } from '../../utils/skill.utils';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experience = input.required<iExperience[]>();

  protected readonly formatSkills = formatSkills;
}
