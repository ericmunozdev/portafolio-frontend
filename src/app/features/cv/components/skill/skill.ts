import { Component, input } from '@angular/core';
import { iCategorySkill } from '../../interfaces/categorySkill.interface';
import { formatSkills } from '../../utils/skill.utils';

@Component({
  selector: 'app-skill',
  imports: [],
  templateUrl: './skill.html',
  styleUrl: './skill.css',
})
export class Skill {
  skill = input.required<iCategorySkill[]>();

  protected readonly formatSkills = formatSkills;
}
