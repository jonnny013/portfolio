import { Formik } from 'formik'
import * as yup from 'yup'
import AddProjectForm from './AddProjectForm'
import type { ProjectWithoutID } from '../../../../types'
import { useState, useEffect } from 'react'
import { addProject } from '../../../../services/projectsServices'
import { useQueryClient, useMutation } from '@tanstack/react-query'

const re =
  /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm

const validationSchema = yup.object().shape({
  title: yup
    .string()
    .min(3, 'Title must be 3 characters or more')
    .required('Title is required'),
  project: yup
    .string()
    .min(3, 'Project must be 3 characters or more')
    .required('Project is required'),
  intro: yup
    .string()
    .min(10, 'Description must be 10 characters or more')
    .required('Description is required'),
  website: yup.string().matches(re, 'URL is not valid').required('Please enter website'),
  sourceCode: yup.string().matches(re, 'URL is not valid'),
  skills: yup.object().test({
    name: 'areSkillsSelected',
    message: 'At least one skill must be selected',
    test: skills => Object.values(skills).some(value => value === true),
  }),
})

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
  const [notification, setNotification] = useState<string | null>(null)
  const queryClient = useQueryClient()
  const newProjectMutation = useMutation({ mutationFn: addProject,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['projects']})
    setNotification('Your project has been added')
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
