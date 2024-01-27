import { useNavigate, useParams } from 'react-router-dom'
import { getSingleProject } from '../../../../services/projectsServices'
import { Formik } from 'formik'
import type { Project } from '../../../../types'
import { updateProject } from '../../../../services/projectsServices'
import { useState, useEffect, useContext } from 'react'
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query'
import validationSchema from '../yupValidation'
import EditProjectForm from './EditProjectForm'
import LoadingScreen from '../../../LoadingScreen'
import Error from '../../../Error'
import UserContext from '../../../../contexts/userContext'

const EditProjectFormikIndex = () => {
  const navigate = useNavigate()
  const [notification, setNotification] = useState<string | null>(null)
  const params = useParams()
  let projectId: string
  if (params['id']) {
    projectId = params['id']
  }

  const result = useQuery({
    queryKey: ['project'],
    queryFn: () => getSingleProject(projectId),
  })
  const [{ userToken }] = useContext(UserContext)!
  const queryClient = useQueryClient()
  const updateProjectMutation = useMutation({
    mutationFn: updateProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
      setNotification('Your project has been updated. Redirecting...')
      setTimeout(() => {
        navigate('/admin')
      }, 4000)
    },
    onError: error => {
      setNotification(`Error: , ${error.message}`)
    },
    onMutate: () => {
      setNotification('Please wait...')
    },
  })

  const onSubmit = async (values: Project) => {
    if (userToken) {
      updateProjectMutation.mutate({ project: values, token: userToken })
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setNotification(null)
    }, 5000)
    return () => clearTimeout(timeoutId)
  }, [notification, setNotification])

  if (!result) {
    return <LoadingScreen />
  }

  if (result.isLoading) {
    return <LoadingScreen />
  }

  if (result.isError) {
    return <Error />
  }
  const project: Project = result.data as Project

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Edit project</h1>
      <Formik
        initialValues={project}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <EditProjectForm onSubmit={handleSubmit} notification={notification} />
        )}
      </Formik>
    </div>
  )
}

export default EditProjectFormikIndex
