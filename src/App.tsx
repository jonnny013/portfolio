import React from 'react';
import { projectData} from './data';
import './App.css';
import Carousel from './components/Carousel';
import { Project } from './types';
import HeaderIndex from './components/Header/HeaderIndex';


const App: React.FC = () => {
  const projects: Project[] = [];
  if (projectData) {
    projectData.map(a => projects.push(a));
  }
  

  return (
    <div>
      <HeaderIndex />
      <Carousel projects={projects} />
    </div>
  );
};

export default App;
