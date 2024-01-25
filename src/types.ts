export interface Project {
  id: string,
  title: string;
  project: string;
  description: string;
  skills: {
  css: boolean;
  html: boolean;
  node: boolean;
  react: boolean;
  bootstrap: boolean;
  materialUI: boolean;
  mongoDB: boolean;
  express: boolean;
  javascript: boolean;
  typescript: boolean;
};
  website: string;
  sourceCode: string;
  recommended: boolean
}

export type ProjectWithoutID = Omit<Project, 'id'>

export interface ContactFormTypes {
  name: string
  email: string
  subject: string
  message: string
}

export interface LoginFormTypes {
  username: string
  password: string
}

export enum AboutMeInfoType {
  Certificate = 'Certificate',
  Personal = 'Personal',
  Experience = 'Experience'
}

export interface AboutMe {
  picture:  File | string
  name: string
  description: string
  id: string
  picDesc: string
  type: AboutMeInfoType
}

export type AboutMeWithoutID = Omit<AboutMe, 'id'>