import { Component, inject } from '@angular/core';

import { Additional } from '../../features/cv/components/additional/additional';
import { Contact } from '../../features/cv/components/contact/contact';
import { Education } from '../../features/cv/components/education/education';
import { Experience } from '../../features/cv/components/experience/experience';
import { Presentation } from '../../features/cv/components/presentation/presentation';
import { Skills } from '../../features/cv/components/skills/skills';
import { Summary } from '../../features/cv/components/summary/summary';
import { CVService } from '../../features/cv/services/cv.service';

@Component({
  selector: 'app-home-page',
  imports: [
    Additional,
    Contact,
    Education,
    Experience,
    Presentation,
    Skills,
    Summary
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  private cvService = inject(CVService);
  cv = this.cvService.cv;
}
