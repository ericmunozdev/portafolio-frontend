import { Component, input } from '@angular/core';
import { iEducation } from '../../../../core/domain/cv.model';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  education = input.required<iEducation[]>();
}
