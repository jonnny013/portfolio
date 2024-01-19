import type { LoginFormTypes } from '../../types'
import LoginForm from './LoginForm'
import { Formik } from 'formik'
import loginPost from '../../services/LoginService'
import * as yup from 'yup'
import { useState, useEffect } from 'react'

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
})

const initialValues = {
username: '',
password: ''
}

const ContactIndex = () => {

  const [notification, setNotification] = useState<string | null>(null)

  const onSubmit = async (
    values: LoginFormTypes,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log('Form submitted', values)
    const task = await loginPost(values)
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
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <LoginForm onSubmit={handleSubmit} notification={notification} />
      )}
    </Formik>
  )
}

export default ContactIndex
