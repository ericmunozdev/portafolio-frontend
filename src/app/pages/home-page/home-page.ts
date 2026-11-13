import { Component, inject, effect } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { CVService } from '../../features/cv/services/cv.service';

import { AdditionalSkill } from 'src/app/features/cv/components/additional-skill/additional-skill';
import { Contact } from 'src/app/features/cv/components/contact/contact';
import { Education } from 'src/app/features/cv/components/education/education';
import { Experience } from 'src/app/features/cv/components/experience/experience';
import { Other } from 'src/app/features/cv/components/other/other';
import { Profile } from 'src/app/features/cv/components/profile/profile';
import { ProjectSkill } from 'src/app/features/cv/components/project-skill/project-skill';
import { Skill } from 'src/app/features/cv/components/skill/skill';

@Component({
  selector: 'app-home-page',
  imports: [AdditionalSkill, Contact, Education, Experience, Other, Profile, ProjectSkill, Skill],
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
        this.titleService.setTitle(cv.profile.webTitle);
      }
    });
  }
}
