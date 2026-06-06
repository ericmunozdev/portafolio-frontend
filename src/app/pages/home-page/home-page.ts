import { Component, inject, effect } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { CVService } from '../../features/cv/services/cv.service';

import { Additional } from 'src/app/features/cv/components/additional/additional';
import { Condition } from 'src/app/features/cv/components/condition/condition';
import { Contact } from 'src/app/features/cv/components/contact/contact';
import { Education } from 'src/app/features/cv/components/education/education';
import { Experience } from 'src/app/features/cv/components/experience/experience';
import { Language } from 'src/app/features/cv/components/language/language';
import { Profile } from 'src/app/features/cv/components/profile/profile';
import { Skill } from 'src/app/features/cv/components/skill/skill';
import { Summary } from 'src/app/features/cv/components/summary/summary';

@Component({
  selector: 'app-home-page',
  imports: [
    Additional,
    Condition,
    Contact,
    Education,
    Experience,
    Language,
    Profile,
    Skill,
    Summary,
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  private cvService = inject(CVService);
  private titleService = inject(Title);

  cv = this.cvService.cv;

  constructor() {
    effect(() => {
      const cv = this.cv();

      if (cv) {
        const title = `${cv.profile.title}`;
        this.titleService.setTitle(title);
      }
    });
  }
}
