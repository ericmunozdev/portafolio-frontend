import { Component, input } from '@angular/core';
import { iProjectSkill } from '../../../../core/domain/cv.model';
import { formatSkills } from '../../utils/skill.utils';

@Component({
  selector: 'app-project-skill',
  imports: [],
  templateUrl: './project-skill.html',
  styleUrl: './project-skill.css',
})
export class ProjectSkill {
  projectSkill = input.required<iProjectSkill[]>();

  protected readonly formatSkills = formatSkills;
}
