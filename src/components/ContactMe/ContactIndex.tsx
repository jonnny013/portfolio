import type { ContactFormTypes } from '../../types'
import ContactForm from './ContactForm'
import { Formik } from 'formik'
import contactFormPost from '../../services/contactService'
import * as yup from 'yup'
import { useState, useEffect } from 'react'

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name must be 3 characters or more')
    .required('Name is required'),
  email: yup.string().email().required('Email is required'),
  subject: yup.string().min(3, 'Subjectmust be 3 characters or more'),
  message: yup
    .string()
    .min(10, 'Message must be 10 characters or more')
    .required('Message is required'),
})

const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const ContactIndex = () => {
  const [notification, setNotification] = useState<string | null>(null)
  
  const onSubmit = async (
    values: ContactFormTypes,
    { resetForm }: { resetForm: () => void }
  ) => {
    const task = await contactFormPost(values)
    if (task) {
      setNotification('Your message has been sent!')
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
        <ContactForm onSubmit={handleSubmit} notification={notification} />
      )}
    </Formik>
  )
}

export default ContactIndex
