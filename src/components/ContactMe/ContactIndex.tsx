import { ContactFormTypes } from "../../types"
import ContactForm from "./ContactForm"
import { Formik } from 'formik'
import contactFormPost from '../../services/contactService' 
import * as yup from 'yup'

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
const onSubmit = (values: ContactFormTypes) => {
  // event.preventDefault()
  console.log('Form submitted', values)
  contactFormPost(values)
}

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ContactForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default ContactIndex