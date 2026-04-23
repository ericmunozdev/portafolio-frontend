export interface iProfile {
  image: string;
  title: string;
  fullName: string;
  description: string;
  summary: string[];
  contact: iContact;
  condition: iCondition;
  languages: iLanguage[];
}

export interface iContact {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface iCondition {
  workMode: string;
  availability: string;
}

export interface iLanguage {
  language: string;
  level: string;
  description: string;
}
