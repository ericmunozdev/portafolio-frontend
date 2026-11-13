import { iSkill } from './skill.interface';

export interface iExperience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  responsibility: string;
  collapse: boolean;
  skills: iSkill[];
}
