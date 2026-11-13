import { iProfile } from './profile.interface';
import { iContact } from './contact.interface';
import { iEducation } from './education.interface';
import { iCategorySkill } from './categorySkill.interface';
import { iExperience } from './experience.interface';
import { iProjectSkill } from './projectSkill.interface';
import { iAdditionalSkill } from './additionalSkill.interface';
import { iOther } from './other.interface';

export interface iCV {
  profile: iProfile;
  contact: iContact[];
  education: iEducation[];
  categorySkill: iCategorySkill[];
  experience: iExperience[];
  projectSkill: iProjectSkill[];
  additionalSkill: iAdditionalSkill[];
  other: iOther[];
}
