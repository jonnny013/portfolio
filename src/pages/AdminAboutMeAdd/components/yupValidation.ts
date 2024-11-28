import * as yup from 'yup'

 const validationSchema = yup.object().shape({
   name: yup
     .string()
     .min(3, 'Title must be 3 characters or more')
     .required('Title is required'),
   description: yup
     .string()
     .min(10, 'Description must be 10 characters or more')
     .required('Description is required'),
   picture: yup.mixed().required('A picture is required'),
   picDesc: yup
     .string()
     .min(3, 'Description must be 3 characters or more')
     .required('Description is required'),
 })

export default validationSchema