import type { LoginFormTypes } from '../../types/types'
import LoginForm from './components/LoginForm'
import { Formik } from 'formik'
import loginPost from '../../services/LoginService'
import * as yup from 'yup'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import UserContext from '../../contexts/userContext'
import { useContext } from 'react'
import { useNotificationDispatch } from '../../contexts/notificationContext'

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
})

const initialValues = {
  username: '',
  password: '',
}

const LoginIndex = () => {
  const [_user, dispatch] = useContext(UserContext)!
  const notificationDispatch = useNotificationDispatch()
  const queryClient = useQueryClient()
  const loginMutation = useMutation({
    mutationFn: loginPost,
    onSuccess: result => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      const userToken = result.token
      dispatch({ type: 'LOGIN', userToken })
      notificationDispatch({
        type: 'SUCCESS',
        payload: 'You have logged in!',
      })
    },
    onError: error => {
      notificationDispatch({ type: 'ERROR', payload: error })
    },
    onMutate: () => {
      notificationDispatch({ type: 'SUCCESS', payload: 'Please wait...' })
    },
  })

  const onSubmit = async (values: LoginFormTypes) => {
    loginMutation.mutate(values)
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default LoginIndex
