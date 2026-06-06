import { Component, input } from '@angular/core';
import { iSkill } from '../../interfaces/skill.interface';

@Component({
  selector: 'app-skill',
  imports: [],
  templateUrl: './skill.html',
  styleUrl: './skill.css',
})
export class Skill {
  skill = input.required<iSkill[]>();
}
