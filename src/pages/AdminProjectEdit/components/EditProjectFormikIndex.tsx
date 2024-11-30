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

const EditProjectFormikIndex = () => {
  const navigate = useNavigate()
  const notificationDispatch = useNotificationDispatch()
  const [loading, setLoading] = useState(false)
  const params = useParams()
  let projectId: string
  if (params['id']) {
    projectId = params['id']
  }
  const { isLoading, data, error, loadingScreen } = useQueryWithLoadingError(
    'project',
    () => getSingleProject(projectId)
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

  if (!data) {
    return <LoadingScreen />
  }

  if (isLoading) {
    return loadingScreen
  }

  if (error) {
    return null
  }
  const project: Project = data as Project

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Edit project</h1>
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
