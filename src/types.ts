export interface Project {
  id: string,
  title: string;
  project: string;
  intro: string;
  skills: {css: boolean;
  html: boolean;
  node: boolean;
  react: boolean;
  bootstrap: boolean;
  materialUI: boolean;
  mongoDB: boolean;
  express: boolean;
  javascript: boolean;
  typescript: boolean;};
  website: string;
  sourceCode: string;
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