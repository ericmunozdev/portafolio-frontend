import { Component, input } from '@angular/core';
import { iAdditional } from '../../interfaces/additional.interface';

@Component({
  selector: 'app-additional',
  imports: [],
  templateUrl: './additional.html',
  styleUrl: './additional.css',
})
export class Additional {
  additional = input.required<iAdditional[]>();
}
