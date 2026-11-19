import { Component, input } from '@angular/core';
import { iOther } from '../../../../core/domain/cv.model';

@Component({
  selector: 'app-other',
  imports: [],
  templateUrl: './other.html',
  styleUrl: './other.css',
})
export class Other {
  other = input.required<iOther[]>();
}
