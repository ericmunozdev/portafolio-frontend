import { Component, inject, effect } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { CVService } from '../../features/cv/services/cv.service';

import { AdditionalSkill } from '../../features/cv/components/additional-skill/additional-skill';
import { Contact } from '../../features/cv/components/contact/contact';
import { Education } from '../../features/cv/components/education/education';
import { Experience } from '../../features/cv/components/experience/experience';
import { Other } from '../../features/cv/components/other/other';
import { Profile } from '../../features/cv/components/profile/profile';
import { ProjectSkill } from '../../features/cv/components/project-skill/project-skill';
import { Skill } from '../../features/cv/components/skill/skill';

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
