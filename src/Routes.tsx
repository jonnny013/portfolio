import Carousel from './components/Projects/Carousel'
import { Route, Routes, Navigate } from 'react-router-dom'
import ContactIndex from './components/ContactMe/ContactIndex'
import AboutIndex from './components/AboutMe/AboutIndex'
import AdminIndex from './components/Admin/AdminIndex'
import AddProjectPage from './components/Admin/handleProjects/addProject/AddProjectPage'
import EditProjectPage from './components/Admin/handleProjects/editProject/EditProjectPage'
import DeleteProjectPage from './components/Admin/handleProjects/deleteProject/DeleteProjectPage'
import Unauthorized from './components/Unauthorized'
import EditProjectFormikIndex from './components/Admin/handleProjects/editProject/EditProjectFormikIndex'
import DeletionVerificationForm from './components/Admin/handleProjects/deleteProject/DeletionVerificationForm'


const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  const user = true
  return user ? element : <Navigate to='/unauthorized' />
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Carousel />} />
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
        element={<PrivateRoute element={<DeletionVerificationForm />} />}
      />
      <Route path='/unauthorized' element={<Unauthorized />} />
    </Routes>
  )
}

export default AppRoutes
