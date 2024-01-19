import type React from 'react';
import { materialUIThemeDark, materialUIThemeLight } from './themes/materialUI'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material';
import './themes/App.css';
import Carousel from './components/Projects/Carousel';
import type { Project } from './types';
import HeaderIndex from './components/Header/HeaderIndex';
import { Route, Routes } from 'react-router-dom';
import ContactIndex from './components/ContactMe/ContactIndex';
import AboutIndex from './components/AboutMe/AboutIndex';
import AdminIndex from './components/Admin/AdminIndex'
import { useState } from 'react';



const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <ThemeProvider theme={darkMode ? materialUIThemeDark : materialUIThemeLight}>
      <CssBaseline />
      <div>
        <HeaderIndex />
        <Routes>
          <Route path='/' element={<Carousel />} />
          <Route path='/contact' element={<ContactIndex />} />
          <Route path='/about' element={<AboutIndex />} />
          <Route path='/admin' element={<AdminIndex />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
};

export default App;
