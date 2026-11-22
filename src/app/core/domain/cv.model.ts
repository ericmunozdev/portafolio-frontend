export interface iProfile {
  id: string;
  webTitle: string;
  fullName: string;
  workPosition: string;
  presentation: string;
}

export interface iContact {
  typeIcon: string | null;
  typeName: string;
  displayName: string;
  value: string;
  position: number;
}

export interface iEducation {
  title: string;
  institution: string;
  graduationYear: number;
}

export interface iSkill {
  icon: string | null;
  name: string;
  children: iSkill[];
}

export interface iCategorySkill {
  category: string;
  skills: iSkill[];
}

export interface iExperience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  responsibility: string;
  collapse: boolean;
  skills: iSkill[];
}

export interface iProjectSkill {
  project: string;
  skills: iSkill[];
}

export interface iAdditionalSkill {
  content: string;
  skills: iSkill[];
}

export interface iOther {
  text: string;
  description: string;
}

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
