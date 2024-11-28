import { Route, Routes, Navigate } from 'react-router-dom'
import Unauthorized from './pages/Unauthorized/Index'
import { useContext } from 'react'
import UserContext from './contexts/userContext'
import ProjectIndex from './pages/Projects/components/ProjectIndex'
import ContactIndex from './pages/ContactMe/ContactIndex'
import AboutIndex from './pages/AboutMe/AboutIndex'
import AdminIndex from './pages/AdminMain/AdminIndex'
import AddProjectPage from './pages/AdminProjectAdd/AddProjectPage'
import EditProjectPage from './pages/AdminProjectEdit/EditProjectPage'
import EditProjectFormikIndex from './pages/AdminProjectEdit/components/EditProjectFormikIndex'
import DeleteProjectPage from './pages/AdminProjectDelete/DeleteProjectPage'
import DeletionVerificationForm from './pages/AdminProjectDelete/components/DeletionVerificationForm'
import EditAndDeleteAboutMe from './pages/AdminAboutMeEditDelete/EditAndDeleteAboutMe'
import AddNewAboutMeIndex from './pages/AdminAboutMeAdd/AddNewAboutMeIndex'

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  const [{ userToken }] = useContext(UserContext)!
  return userToken ? element : <Navigate to='/unauthorized' />
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<ProjectIndex />} />
      <Route path='/contact' element={<ContactIndex />} />
      <Route path='/about' element={<AboutIndex />} />
      <Route path='/admin' element={<AdminIndex />} />
      <Route path='/addContent' element={<PrivateRoute element={<AddProjectPage />} />} />
      <Route
        path='/editContent'
        element={<PrivateRoute element={<EditProjectPage />} />}
      />
      <Route
        path='/editContent/:id'
        element={<PrivateRoute element={<EditProjectFormikIndex />} />}
      />
      <Route
        path='/deleteContent'
        element={<PrivateRoute element={<DeleteProjectPage />} />}
      />
      <Route
        path='/deleteContent/:id'
        element={<PrivateRoute element={<DeletionVerificationForm />} />}
      />
      <Route
        path='/aboutMeAdminPage'
        element={<PrivateRoute element={<EditAndDeleteAboutMe />} />}
      />
      <Route
        path='/aboutMeAddNew'
        element={<PrivateRoute element={<AddNewAboutMeIndex />} />}
      />
      <Route path='/unauthorized' element={<Unauthorized />} />
    </Routes>
  )
}

export default AppRoutes
