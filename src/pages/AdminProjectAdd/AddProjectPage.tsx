import { Formik } from 'formik'
import { useContext } from 'react'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../contexts/userContext'
import { addProject } from '../../services/projectsServices'
import { ProjectWithoutID } from '../../types/types'
import validationSchema from '../AdminProjectEdit/components/yupValidation'
import AddProjectForm from './components/AddProjectForm'
import { useNotificationDispatch } from '../../contexts/notificationContext'

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
  const notificationDispatch = useNotificationDispatch()
  const queryClient = useQueryClient()
  const newProjectMutation = useMutation({
    mutationFn: addProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
      notificationDispatch({
        type: 'SUCCESS',
        payload: 'Your project has been added! Redirecting...',
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

  const onSubmit = async (values: ProjectWithoutID) => {
    if (userToken) {
      newProjectMutation.mutate({ project: values, token: userToken })
    }
  }

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
            <AddProjectForm
              onSubmit={handleSubmit}
              isLoading={newProjectMutation.status === 'pending'}
            />
          </>
        )}
      </Formik>
    </div>
  )
}

export default AddProjectPage
