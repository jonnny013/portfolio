
import { Formik } from 'formik'

import AddAboutMeForm from './AddAboutMeForm'

import { useState, useEffect } from 'react'
import { addAboutMe } from '../../../services/aboutMeServices'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import validationSchema from './yupValidation'
import { useNavigate } from 'react-router-dom'

const initialValues = {
  picture: '',
  description: '',
  name: ''
}

const AddNewAboutMe = () => {
  const navigate = useNavigate()
  const [notification, setNotification] = useState<string | null>(null)
  const queryClient = useQueryClient()
  const newProjectMutation = useMutation({
    mutationFn: addAboutMe,
    onSuccess: (_, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
      setNotification('Your project has been added. Redirecting...')
      setTimeout(() => {
        navigate('/admin')
      }, 4000)
      const {resetForm} = context
      resetForm()
    },
    onError: error => {
      setNotification(`Error: , ${error.message}`)
    },
    onMutate: () => {
      setNotification('Please wait...')
    },
  })

  const onSubmit = async (
    values,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log('Form submitted', values)
    newProjectMutation.mutate(values, {context: {resetForm}})

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
      <h1>Add new About Me section</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <>
            <AddAboutMeForm onSubmit={handleSubmit} notification={notification} />
          </>
        )}
      </Formik>
    </div>
  )
}

export default AddNewAboutMe
