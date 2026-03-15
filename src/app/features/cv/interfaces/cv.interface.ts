import { iEducation } from "./education.interface";
import { iExperience } from "./experience.interface";
import { iProfile } from "./profile.interface";
import { iSkill } from "./skill.interface";

export interface iCV {
  profile: iProfile;
  skills: iSkill[];
  experience: iExperience[];
  education: iEducation[];
}
