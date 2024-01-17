import React from 'react';
import {projectData} from './data';
import './App.css';
import Carousel from './components/Projects/Carousel';
import {Project} from './types';
import HeaderIndex from './components/Header/HeaderIndex';
import { Route, Routes } from 'react-router-dom';
import StandardFormBar from './components/StandardFormBar';

const App: React.FC = () => {
  const projects: Project[] = [];
  if (projectData) {
    projectData.map(a => projects.push(a));
  }

  return (
    <div>
      <HeaderIndex />
      <StandardFormBar id='name' label='name' type='text' />
      <Routes>
        <Route path='/' element={<Carousel projects={projects} />} />
      </Routes>
    </div>
  )
};

export default App;
