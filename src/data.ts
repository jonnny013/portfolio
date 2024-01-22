export const imgData: string[] = [
  'https://t3.ftcdn.net/jpg/05/67/91/34/360_F_567913402_LX86jZwAu0NSArTYpUnUZxLVv7EPdb0H.jpg',
  'https://t4.ftcdn.net/jpg/05/83/67/49/360_F_583674926_QpwkUf4rEnySkPoYI1qd6zQSIjQiVdBo.jpg',
  'https://i.pinimg.com/originals/ea/6a/d4/ea6ad4a2a14fe0825c554b04def42150.jpg',
  'https://t3.ftcdn.net/jpg/05/67/71/90/360_F_567719050_eJHx8r2mJwVKyJLoRAzYdMikWjdDo48c.jpg',
  'https://static.freemake.com/blog/wp-content/uploads/2014/09/best-pc-screensavers.jpg',
];

const projects = [
  {
    title: 'Book App',
    project: 'GraphQL',
    intro:
      "This project is from University of Helsinki's fullstack open course. I made it using the MERN stack and used GraphQL for data storage. I usedbootstrap for the CSS. This project includes the use of websockets.",
    skills: {css: false,
    html: false,
    node: true,
    react: true,
    bootstrap: false,
    materialUI: false,
    mongoDB: true,
    express: true,
    javascript: false,
    typescript: false,},
    website: 'https://jonlovesbookapp.fly.dev/',
    sourceCode: 'https://github.com/jonnny013/fullstack_part7',
  },
  {
    title: 'Patientor App',
    project: 'Typescript',
    intro:
      "This project is from University of Helsinki's Typescript course. The focus was using Typescript in both the frontend and the backend. I used materialUI for the CSS.",
    skills: {css: false,
    html: false,
    node: true,
    react: true,
    bootstrap: false,
    materialUI: true,
    mongoDB: true,
    express: true,
    javascript: false,
    typescript: true},
    website: 'https://dr-loves-patientor.fly.dev',
    sourceCode: 'https://github.com/jonnny013/fullstackopen_part9',
  },
  {
    title: 'Flight Diary App',
    project: 'Typescript',
    intro:
      "This project is also from University of Helsinki's Typescript course. The focus was using Typescript in both the frontend and the backend. I used bootstrap for the CSS. It is not connected to a database.",
    skills: {css: false,
    html: false,
    node: true,
    react: true,
    bootstrap: true,
    materialUI: false,
    mongoDB: false,
    express: true,
    javascript: false,
    typescript: true},
    website: 'https://ilaris-flight-diaries.fly.dev',
    sourceCode: 'https://github.com/jonnny013/fullstackopen_part9',
  },
  {
    title: 'Blog List',
    project: 'Full Stack',
    intro:
      "This project is from University of Helsinki's fullstack open course. I made it using the MERN stack. This was an independent project that allowed me to get extremely familair with each aspect of fullstack website development including frontend testing, backend testing, end to end testing and continued practice in both the frontend and the backend. I am currently working on making it isomorphic.",
    skills: {css: false,
    html: false,
    node: true,
    react: true,
    bootstrap: false,
    materialUI: false,
    mongoDB: true,
    express: true,
    javascript: false,
    typescript: false},
    website: 'https://jonnny013bloglist.fly.dev',
    sourceCode: 'https://github.com/jonnny013/fullstackopen_part9',
  },
  {
    title: 'Rock, Paper, Scissors',
    project: 'Vanilla Javascript',
    intro:
      "A project is from TheOdinProject. I focused on basic Javascript. Although the javascript isn't complex, it was my first time connecting Javascript to HTML which started as a challenge but got easy quickly. I also used Bootstrap for extra practice.",
    skills: {css: true,
    html: true,
    node: false,
    react: false,
    bootstrap: false,
    materialUI: false,
    mongoDB: false,
    express: false,
    javascript: true,
    typescript: false},
    website: 'unknown location',
    sourceCode: 'https://github.com/jonnny013/',
  },
  {
    title: 'Festival Quiz',
    project: 'React practice',
    intro:
      "I made a project that fits the holiday of the mid autumn festival. I implemented new practices such as translation files and Routes within react. I got a better understanding for useEffect and why it is important as well.",
    skills: {css: true,
    html: false,
    node: false,
    react: true,
    bootstrap: false,
    materialUI: false,
    mongoDB: false,
    express: false,
    javascript: false,
    typescript: false},
    website: 'unknown location',
    sourceCode: 'https://github.com/jonnny013/',
  },
];

 const projectsWithId = () => {
  const projectWithId = projects.map(project => ({
    ...project,
    id: Math.floor(Math.random() * 100000).toString(),
  }))
  return projectWithId
}

export const projectData = projectsWithId()