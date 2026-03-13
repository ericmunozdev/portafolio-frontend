import { Component } from '@angular/core';

import { Additional } from '../../components/additional/additional';
import { Contact } from '../../components/contact/contact';
import { Education } from '../../components/education/education';
import { Experience } from '../../components/experience/experience';
import { Presentation } from '../../components/presentation/presentation';
import { Skills } from '../../components/skills/skills';
import { Summary } from '../../components/summary/summary';

@Component({
  selector: 'app-home-page',
  imports: [Additional,Contact,Education,Experience,Presentation, Skills, Summary],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
