import { Component, input } from '@angular/core';
import { iSkill } from '../../interfaces/skill.interface';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skills = input.required<iSkill[]>();
}
