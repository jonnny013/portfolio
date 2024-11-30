import AddAboutMeForm from './components/AddAboutMeForm'
import { useContext } from 'react'
import { addAboutMe } from '../../services/aboutMeServices'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import validationSchema from './components/yupValidation'
import { useNavigate } from 'react-router-dom'
import type { AboutMeWithoutID } from '../../types/types'
import UserContext from '../../contexts/userContext'

import FormikBaseIndex from '../../components/FormikBaseIndex'
import { useNotificationDispatch } from '../../contexts/notificationContext'

const initialValues = {
  picture: '',
  description: '',
  name: '',
  picDesc: '',
  type: '',
}

const AddNewAboutMe = () => {
  const navigate = useNavigate()
  const [{ userToken }] = useContext(UserContext)!
  const notificationDispatch = useNotificationDispatch()
  const queryClient = useQueryClient()
  const newProjectMutation = useMutation({
    mutationFn: addAboutMe,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['aboutMeInfoCards'] })
      notificationDispatch({
        type: 'SUCCESS',
        payload: 'Your About Me section has been added! Redirecting...',
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

  const onSubmit = async (values: AboutMeWithoutID) => {
    if (userToken) {
      newProjectMutation.mutate({ info: values, token: userToken })
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Add new About Me section</h1>
      <FormikBaseIndex
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        formComponent={AddAboutMeForm}
        enctype='multipart/form-data'
        isLoading={newProjectMutation.status === 'pending'}
      />
    </div>
  )
}

export default AddNewAboutMe
