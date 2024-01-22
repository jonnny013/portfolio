import { useParams } from 'react-router-dom'
import { getSingleProject } from '../../../../services/projectsServices'
import { Formik } from 'formik'
import type { Project } from '../../../../types'
import { updateProject } from '../../../../services/projectsServices'
import { useState, useEffect } from 'react'
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query'
import validationSchema from '../yupValidation'
import EditProjectForm from './EditProjectForm'
import LoadingScreen from '../../../LoadingScreen'
import Error from '../../../Error'

const EditProjectFormikIndex = () => {
  const [notification, setNotification] = useState<string | null>(null)
  const params = useParams()
  let projectId: string
  if (params['id']) {
    projectId = params['id']
  } 
  
  const result = useQuery({
    queryKey: ['project'],
    queryFn: () => getSingleProject(projectId),
  })
  console.log(result.data)

  const queryClient = useQueryClient()
  const updateProjectMutation = useMutation({
    mutationFn: updateProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
      setNotification('Your project has been added')
    },
    onError: error => {
      setNotification(`Error: , ${error.message}`)
    },
    onMutate: () => {
      setNotification('Please wait...')
    },
  })

  const onSubmit = async (values: Project, { resetForm }: { resetForm: () => void }) => {
    console.log('Form submitted', values)
     await updateProjectMutation.mutate(values)

    if (updateProjectMutation.isSuccess) {
      resetForm()
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setNotification(null)
    }, 5000)
    return () => clearTimeout(timeoutId)
  }, [notification, setNotification])

  if (!result) {
   return <LoadingScreen />
  }

  if (result.isLoading) {
    return <LoadingScreen />
  }

  if (result.isError) {
    return <Error />
  }
  const project: Project = result.data as Project

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Edit project</h1>
      <Formik
        initialValues={project}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          
            <EditProjectForm onSubmit={handleSubmit} notification={notification} />
      
        )}
      </Formik>
    </div>
  )
}

export default EditProjectFormikIndex
