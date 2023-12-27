import React from 'react';
import { projectData} from './data';
import './App.css';
import Carousel from './components/Carousel';
import { Project } from './types';


const App: React.FC = () => {
  const projects: Project[] = [];
  if (projectData) {
    projectData.map(a => projects.push(a));
  }
  

  return (
    <div>
      
    <Carousel projects={projects} />
    </div>
  );
};

export default App;
