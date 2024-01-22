import SampleProject from './SampleProject'
import { Formik } from 'formik'
import * as yup from 'yup'
import AddProjectForm from './AddProjectForm'
import type { ProjectWithoutID } from '../../../types'
import { useState, useEffect } from 'react'
import {addProject} from '../../../services/projectsServices'

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
  sourceCode: yup.string().matches(re, 'URL is not valid')
})

const initialValues = {
  title: '',
  project: '',
  intro: '',
  skills: {css: false,
  html: false,
  node: false,
  react: false,
  bootstrap: false,
  materialUI: false,
  mongoDB: false,
  express: false,
  javascript: false,
  typescript: false,},
  website: '',
  sourceCode: '',
}

const AddProjectPage = () => {
  const [notification, setNotification] = useState<string | null>(null)

  const onSubmit = async (
    values: ProjectWithoutID,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log('Form submitted', values)
    const task = await addProject(values)
    if (task) {
      setNotification(task)
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
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, handleChange }) => (
          <>
            <AddProjectForm onSubmit={handleSubmit} notification={notification} handleChange={handleChange} />
            <h2>Preview:</h2>
            <SampleProject />
          </>
        )}
      </Formik>
    </div>
  )
}

export default AddProjectPage