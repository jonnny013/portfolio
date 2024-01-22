import { Formik } from 'formik'

import AddProjectForm from './AddProjectForm'
import type { ProjectWithoutID } from '../../../../types'
import { useState, useEffect } from 'react'
import { addProject } from '../../../../services/projectsServices'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import validationSchema from '../yupValidation'
import { useNavigate } from 'react-router-dom'


const initialValues = {
  title: '',
  project: '',
  intro: '',
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
}

const AddProjectPage = () => {
  const navigate = useNavigate()
  const [notification, setNotification] = useState<string | null>(null)
  const queryClient = useQueryClient()
  const newProjectMutation = useMutation({ mutationFn: addProject,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['projects']})
    setNotification('Your project has been added. Redirecting...')
    setTimeout(() => {
      navigate('/admin')
    }, 4000)
  },
  onError: (error) => {
    setNotification(`Error: , ${error.message}`)
  },
  onMutate: () => {
    setNotification('Please wait...')
  }
})

  const onSubmit = async (
    values: ProjectWithoutID,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log('Form submitted', values)
    newProjectMutation.mutate(values)
    const task = await addProject(values)
    if (task) {
      resetForm()
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
