import * as yup from 'yup'

 const validationSchema = yup.object().shape({
   title: yup
     .string()
     .min(3, 'Title must be 3 characters or more')
     .required('Title is required'),
   project: yup
     .string()
     .min(3, 'Project must be 3 characters or more')
     .required('Project is required'),
   description: yup
     .string()
     .min(10, 'Description must be 10 characters or more')
     .required('Description is required'),
   website: yup
     .string()
     .matches(
       /^(https?:\/\/)?([a-zA-Z0-9_-]+\.){1,}[a-zA-Z]{2,}(:[0-9]+)?(\/[\w#]+)*\/?(\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/,
       'URL is not valid'
     )
     .required('Please enter a valid website URL'),
   sourceCode: yup
     .string()
     .matches(
       /^(https?:\/\/)?([a-zA-Z0-9_-]+\.){1,}[a-zA-Z]{2,}(:[0-9]+)?(\/[\w#]+)*\/?(\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/,
       'URL is not valid'
     ),
   skills: yup.object().test({
     name: 'areSkillsSelected',
     message: 'At least one skill must be selected',
     test: skills => Object.values(skills).some(value => value === true),
   }),
   recommended: yup.boolean()
 })

export default validationSchema