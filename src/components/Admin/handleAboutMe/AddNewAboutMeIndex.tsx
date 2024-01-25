import AddAboutMeForm from './AddAboutMeForm'
import { useState, useEffect } from 'react'
import { addAboutMe } from '../../../services/aboutMeServices'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import validationSchema from './yupValidation'
import { useNavigate } from 'react-router-dom'
import type { AboutMeWithoutID } from '../../../types'
import FormikBaseIndex from '../../FormikBaseIndex'

const initialValues = {
  picture: '',
  description: '',
  name: '',
  picDesc: '',
  type: '',
}

const AddNewAboutMe = () => {
  const navigate = useNavigate()
  const [notification, setNotification] = useState<string | null>(null)
  const queryClient = useQueryClient()
  const newProjectMutation = useMutation({
    mutationFn: addAboutMe,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['aboutMeInfoCards'] })
      setNotification('Your project has been added. Redirecting...')
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

  const onSubmit = async (values: AboutMeWithoutID) => {
    newProjectMutation.mutate(values)
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setNotification(null)
    }, 5000)
    return () => clearTimeout(timeoutId)
  }, [notification, setNotification])

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Add new About Me section</h1>
      <FormikBaseIndex
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        formComponent={AddAboutMeForm}
        notification={notification}
      />
    </div>
  )
}

export default AddNewAboutMe
