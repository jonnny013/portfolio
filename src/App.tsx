import React from 'react';
import {projectData} from './data';
import './App.css';
import Carousel from './components/Projects/Carousel';
import {Project} from './types';
import HeaderIndex from './components/Header/HeaderIndex';
import { Route, Routes } from 'react-router-dom';
import ContactIndex from './components/ContactMe/ContactIndex';
import AboutIndex from './components/AboutMe/AboutIndex';

const App: React.FC = () => {
  const projects: Project[] = [];
  if (projectData) {
    projectData.map(a => projects.push(a));
  }

  return (
    <div>
      <HeaderIndex />
      <Routes>
        <Route path='/' element={<Carousel projects={projects} />} />
        <Route path='contact' element={<ContactIndex /> } />
        <Route path='about' element={<AboutIndex />} />
      </Routes>
    </div>
  )
};

export default App;
