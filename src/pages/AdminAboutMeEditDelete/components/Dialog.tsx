import { Dialog, DialogTitle } from '@mui/material'
import type { AboutMe } from '../../../types'
import validationSchema from '../../AdminAboutMeAdd/components/yupValidation'
import AddAboutMeForm from '../../AdminAboutMeAdd/components/AddAboutMeForm'
import { updateAboutMe } from '../../../services/aboutMeServices'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useContext } from 'react'
import UserContext from '../../../contexts/userContext'
import { isAxiosError } from 'axios'
import FormikBaseIndex from '../../../components/FormikBaseIndex'

interface props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  open: boolean
  card: AboutMe
  setNotification: React.Dispatch<React.SetStateAction<string | undefined>>
  notification: string | undefined
}

const DialogComponent = ({
  setOpen,
  open,
  card,
  setNotification,
  notification,
}: props) => {
  const handleClose = () => {
    setOpen(false)
  }
  const [{ userToken }] = useContext(UserContext)!
  const queryClient = useQueryClient()
  const updateProjectMutation = useMutation({
    mutationFn: updateAboutMe,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['aboutMeInfoCards'] })
      setNotification('Your post has been updated. ')
      setTimeout(() => {
        setOpen(false)
      }, 4000)
    },
    onError: error => {
      if (
        isAxiosError(error) &&
        error.response &&
        error.response.data &&
        error.response.data
      ) {
        setNotification(`Error: ${error.response.data}`)
      } else {
        setNotification(error.message)
      }
    },
    onMutate: () => {
      setNotification('Please wait...')
    },
  })

  const onSubmit = (values: AboutMe) => {
    if (userToken) {
      updateProjectMutation.mutate({ info: values, token: userToken })
    }
  }

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth='xl' scroll='body'>
      <DialogTitle>Edit information here</DialogTitle>
      <FormikBaseIndex
        initialValues={card}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        formComponent={AddAboutMeForm}
        picturePreview={import.meta.env.VITE_API_BASE_URL + `${card.picture}`}
        notification={notification}
      />
    </Dialog>
  )
}

export default DialogComponent
