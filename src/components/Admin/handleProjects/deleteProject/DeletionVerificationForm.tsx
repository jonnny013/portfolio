import { useNavigate, useParams } from 'react-router-dom'
import { getSingleProject, deleteProject } from '../../../../services/projectsServices'
import type { Project } from '../../../../types'
import { useState, useEffect, useContext } from 'react'
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query'
import LoadingScreen from '../../../LoadingScreen'
import Error from '../../../Error'
import StandardButton from '../../../StandardButton'
import { Alert } from '@mui/material'
import themes from '../../../../themes/themes'
import Projects from '../../../Projects/Projects'
import UserContext from '../../../../contexts/userContext'

const DeletionVerificationForm = () => {
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
  const deleteProjectMutation = useMutation({
    mutationFn: deleteProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
      setNotification('Your project has been deleted! Redirecting...')
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

  const handleSubmit = () => {
    if (window.confirm('Are you sure you want to delete the project permanently?')) {
      if (userToken) {
        deleteProjectMutation.mutate({ id: project.id, token: userToken })
      }
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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Are you sure you want to delete this project?</h1>
      {notification && (
        <Alert
          severity={notification === 'error' ? 'error' : 'success'}
          style={{ fontSize: themes.fonts.formTextSize }}
        >
          {notification}
        </Alert>
      )}
      <Projects project={project} index={0} projectIndex={0} />
      <StandardButton
        onClick={handleSubmit}
        text='Delete'
        type='button'
        buttonColor='error'
        disabled={notification ? true : false}
      />
      <br />
    </div>
  )
}

export default DeletionVerificationForm
