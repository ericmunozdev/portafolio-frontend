import { iAdditional } from "./additional.interface";
import { iCondition } from "./condition.interface";
import { iContact } from "./contact.interface";
import { iEducation } from "./education.interface";
import { iExperience } from "./experience.interface";
import { iLanguage } from "./language.interface";
import { iProfile } from "./profile.interface";
import { iSkill } from "./skill.interface";

export interface iCV {
  profile: iProfile;
  summary: string[];
  contact: iContact[];
  education: iEducation[];
  skill: iSkill[];
  experience: iExperience[];
  additional: iAdditional[];
  language: iLanguage[];
  condition: iCondition[];
}
