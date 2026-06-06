import { Component, input } from '@angular/core';
import { iLanguage } from '../../interfaces/language.interface';

@Component({
  selector: 'app-language',
  imports: [],
  templateUrl: './language.html',
  styleUrl: './language.css',
})
export class Language {
  language = input.required<iLanguage[]>();
}
