import type React from 'react'
import { materialUIThemeDark, materialUIThemeLight } from './themes/materialUI'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import './themes/App.css'
import Carousel from './components/Projects/Carousel'
import HeaderIndex from './components/Header/HeaderIndex'
import { Route, Routes, Navigate } from 'react-router-dom'
import ContactIndex from './components/ContactMe/ContactIndex'
import AboutIndex from './components/AboutMe/AboutIndex'
import AdminIndex from './components/Admin/AdminIndex'
import { useContext } from 'react'
import DarkModeContext from './contexts/darkContext'
import AddProjectPage from './components/Admin/handleProjects/addProject/AddProjectPage'
import EditProjectPage from './components/Admin/handleProjects/editProject/EditProjectPage'
import DeleteProjectPage from './components/Admin/handleProjects/deleteProject/DeleteProjectPage'
import Unauthorized from './components/Unauthorized'
import EditProjectForm from './components/Admin/handleProjects/editProject/EditProjectForm'
import DeletionVerificationForm from './components/Admin/handleProjects/deleteProject/DeletionVerificationForm'

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  const user = true
  return user ? element : <Navigate to='/unauthorized' />
}

const App: React.FC = () => {
  const darkMode = useContext(DarkModeContext)?.[0]?.darkMode || false

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
            element={<PrivateRoute element={<AddProjectPage />} />}
          />
          <Route
            path='/editContent'
            element={<PrivateRoute element={<EditProjectPage />} />}
          />
          <Route
            path='/editContent/:id'
            element={<PrivateRoute element={<EditProjectForm />} />}
          />
          <Route
            path='/deleteContent'
            element={<PrivateRoute element={<DeleteProjectPage />} />}
          />
          <Route
            path='/deleteContent/:id'
            element={<PrivateRoute element={<DeletionVerificationForm />} />}
          />
          <Route path='/unauthorized' element={<Unauthorized />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
