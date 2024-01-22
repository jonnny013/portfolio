import type React from 'react';
import { materialUIThemeDark, materialUIThemeLight } from './themes/materialUI'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material';
import './themes/App.css';
import Carousel from './components/Projects/Carousel';
import HeaderIndex from './components/Header/HeaderIndex';
import { Route, Routes } from 'react-router-dom';
import ContactIndex from './components/ContactMe/ContactIndex';
import AboutIndex from './components/AboutMe/AboutIndex';
import AdminIndex from './components/Admin/AdminIndex'
import { useContext } from 'react'
import DarkModeContext from './contexts/darkContext'
import AddProjectPage from './components/Admin/handleProjects/AddProjectPage'
import EditProjectPage from './components/Admin/handleProjects/EditProjectPage'
import DeleteProjectPage from './components/Admin/handleProjects/DeleteProjectPage'
import Unauthorized from './components/Unauthorized'


const App: React.FC = () => {
 const darkMode = useContext(DarkModeContext)?.[0]?.darkMode || false
 const user = true
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
          <Route
            path='/addContent'
            element={user ? <AddProjectPage /> : <Unauthorized />}
          />
          <Route
            path='/editContent'
            element={user ? <EditProjectPage /> : <Unauthorized />}
          />
          <Route
            path='/deleteContent'
            element={user ? <DeleteProjectPage /> : <Unauthorized />}
          />
        </Routes>
      </div>
    </ThemeProvider>
  )
};

export default App;
