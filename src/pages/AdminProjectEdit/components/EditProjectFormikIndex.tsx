import { useNavigate, useParams } from 'react-router-dom'
import { getSingleProject } from '../../../services/projectsServices'
import { Formik } from 'formik'
import type { Project } from '../../../types/types'
import { updateProject } from '../../../services/projectsServices'
import { useContext, useState } from 'react'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import validationSchema from './yupValidation'
import EditProjectForm from './EditProjectForm'
import UserContext from '../../../contexts/userContext'
import LoadingScreen from '../../../components/LoadingScreen'
import useQueryWithLoadingError from '../../../hooks/useQueryWithLoadingError'
import { useNotificationDispatch } from '../../../contexts/notificationContext'
import { Link } from 'react-router-dom'

const EditProjectFormikIndex = () => {
  const navigate = useNavigate()
  const notificationDispatch = useNotificationDispatch()
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  const { isLoading, data, error } = useQueryWithLoadingError('project', () =>
    getSingleProject(id as string)
  )
  const [{ userToken }] = useContext(UserContext)!
  const queryClient = useQueryClient()
  const updateProjectMutation = useMutation({
    mutationFn: updateProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
      notificationDispatch({
        type: 'SUCCESS',
        payload: 'Your project has been updated! Redirecting...',
      })
      setTimeout(() => {
        navigate('/admin')
      }, 4000)
      setLoading(false)
    },
    onError: error => {
      notificationDispatch({ type: 'ERROR', payload: error })
      setLoading(false)
    },
    onMutate: () => {
      notificationDispatch({ type: 'SUCCESS', payload: 'Please wait...' })
      setLoading(true)
    },
  })

  const onSubmit = async (values: Project) => {
    if (userToken) {
      updateProjectMutation.mutate({ project: values, token: userToken })
    }
  }

  if (!data || isLoading) {
    return <LoadingScreen />
  }

  if (error) {
    return null
  }
  const project: Project = data as Project
  if (project.id !== id) {
    return null
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Link to='/editContent' className='removeLinkStyles'>
        <h1>Edit project</h1>
      </Link>
      <Formik
        initialValues={project}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <EditProjectForm onSubmit={handleSubmit} isLoading={loading} />
        )}
      </Formik>
    </div>
  )
}

export default EditProjectFormikIndex
