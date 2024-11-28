import type { LoginFormTypes } from '../../types'
import LoginForm from './components/LoginForm'
import { Formik } from 'formik'
import loginPost from '../../services/LoginService'
import * as yup from 'yup'
import { useState, useEffect } from 'react'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import UserContext from '../../contexts/userContext'
import { useContext } from 'react'
import { isAxiosError } from 'axios'

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
})

const initialValues = {
  username: '',
  password: '',
}

const LoginIndex = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, dispatch] = useContext(UserContext)!
  const [notification, setNotification] = useState<string | null>(null)
  const queryClient = useQueryClient()
  const loginMutation = useMutation({
    mutationFn: loginPost,
    onSuccess: result => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      const userToken = result.token
      dispatch({ type: 'LOGIN', userToken })
    },
    onError: error => {
      if (
        isAxiosError(error) &&
        error.response &&
        error.response.data &&
        error.response.data.error
      ) {
        setNotification(`Error: ${error.response.data.error}`)
      } else {
        setNotification(error.message)
      }
    },
    onMutate: () => {
      setNotification('Please wait...')
    },
  })

  const onSubmit = async (values: LoginFormTypes) => {
    loginMutation.mutate(values)
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

export default LoginIndex
