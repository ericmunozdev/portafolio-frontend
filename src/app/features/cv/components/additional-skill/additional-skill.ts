import { Component, input } from '@angular/core';
import { iAdditionalSkill } from '../../interfaces/additionalSkill.interface';
import { formatSkills } from '../../utils/skill.utils';

@Component({
  selector: 'app-additional-skill',
  imports: [],
  templateUrl: './additional-skill.html',
  styleUrl: './additional-skill.css',
})
export class AdditionalSkill {
  additional = input.required<iAdditionalSkill[]>();

  protected readonly formatSkills = formatSkills;
}
