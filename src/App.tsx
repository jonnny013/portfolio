import React from 'react';
import {imgData, projectData} from './data';
import './App.css';
import Carousel from './components/carousel';
import { Project } from './types';


const App: React.FC = () => {
  const projects: Project[] = [];
  if (projectData) {
    projectData.map(a => projects.push(a));
  }
  

  return (
    <div>
      <h1>My photos</h1>
    <Carousel projects={projects} />
    </div>
  );
};

export default App;
