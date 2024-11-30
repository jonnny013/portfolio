import { useNavigate, useParams } from 'react-router-dom'
import { getSingleProject, deleteProject } from '../../../services/projectsServices'
import type { Project } from '../../../types/types'
import { useContext } from 'react'
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query'
import Projects from '../../Projects/components/Projects'
import UserContext from '../../../contexts/userContext'
import LoadingScreen from '../../../components/LoadingScreen'
import StandardButton from '../../../components/StandardButton'
import { useNotificationDispatch } from '../../../contexts/notificationContext'

const DeletionVerificationForm = () => {
  const navigate = useNavigate()
  const notificationDispatch = useNotificationDispatch()
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
  const deleteProjectMutation = useMutation({
    mutationFn: deleteProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
      notificationDispatch({
        type: 'SUCCESS',
        payload: 'Your project has been deleted! Redirecting...',
      })
      setTimeout(() => {
        navigate('/admin')
      }, 4000)
    },
    onError: error => {
      notificationDispatch({ type: 'ERROR', payload: error })
    },
    onMutate: () => {
      notificationDispatch({ type: 'SUCCESS', payload: 'Please wait...' })
    },
  })

  const handleSubmit = () => {
    if (window.confirm('Are you sure you want to delete the project permanently?')) {
      if (userToken) {
        deleteProjectMutation.mutate({ id: project.id, token: userToken })
      }
    }
  }

  if (!result) {
    return <LoadingScreen />
  }

  if (result.isLoading) {
    return <LoadingScreen />
  }

  if (result.isError) {
    return null
  }
  const project: Project = result.data as Project
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Are you sure you want to delete this project?</h1>

      <Projects project={project} index={0} projectIndex={0} />
      <StandardButton
        onClick={handleSubmit}
        text='Delete'
        type='button'
        buttonColor='error'
        disabled={result.isLoading}
      />
      <br />
    </div>
  )
}

export default DeletionVerificationForm
