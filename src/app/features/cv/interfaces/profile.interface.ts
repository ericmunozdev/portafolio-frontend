export interface iProfile {
  image: string;
  name: string;
  title: string;
  summary: string[];
  contact: iContact;
  condition: iCondition;
  languages: iLanguage[];
}

export interface iContact {
  email: string;
  phone: string;
  linkedin: string;
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
