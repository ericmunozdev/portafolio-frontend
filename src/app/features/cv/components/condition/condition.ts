import { Component, input } from '@angular/core';
import { iCondition } from '../../interfaces/condition.interface';

@Component({
  selector: 'app-condition',
  imports: [],
  templateUrl: './condition.html',
  styleUrl: './condition.css',
})
export class Condition {
  condition = input.required<iCondition[]>();
}
