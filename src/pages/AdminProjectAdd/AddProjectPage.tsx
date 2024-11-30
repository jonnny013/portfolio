import { Formik } from 'formik'
import { useState, useEffect, useContext } from 'react'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { isAxiosError } from 'axios'
import UserContext from '../../contexts/userContext'
import { addProject } from '../../services/projectsServices'
import { ProjectWithoutID } from '../../types/types'
import validationSchema from '../AdminProjectEdit/components/yupValidation'
import AddProjectForm from './components/AddProjectForm'

const initialValues = {
  title: '',
  project: '',
  description: '',
  skills: {
    css: false,
    html: false,
    node: false,
    react: false,
    bootstrap: false,
    materialUI: false,
    mongoDB: false,
    express: false,
    javascript: false,
    typescript: false,
  },
  website: '',
  sourceCode: '',
  recommended: false,
}

const AddProjectPage = () => {
  const navigate = useNavigate()
  const [{ userToken }] = useContext(UserContext)!
  const [notification, setNotification] = useState<string | null>(null)
  const queryClient = useQueryClient()
  const newProjectMutation = useMutation({
    mutationFn: addProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
      setNotification('Your project has been added. Redirecting...')
      setTimeout(() => {
        navigate('/admin')
      }, 4000)
    },
    onError: error => {
      if (
        isAxiosError(error) &&
        error.response &&
        error.response.data &&
        error.response.data
      ) {
        setNotification(`Error: ${error.response.data}`)
      } else {
        setNotification(error.message)
      }
    },
    onMutate: () => {
      setNotification('Please wait...')
    },
  })

  const onSubmit = async (values: ProjectWithoutID) => {
    if (userToken) {
      newProjectMutation.mutate({ project: values, token: userToken })
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setNotification(null)
    }, 5000)
    return () => clearTimeout(timeoutId)
  }, [notification, setNotification])

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Add a new project</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <>
            <AddProjectForm onSubmit={handleSubmit} notification={notification} />
          </>
        )}
      </Formik>
    </div>
  )
}

export default AddProjectPage
