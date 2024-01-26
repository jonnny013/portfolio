import { Dialog, DialogTitle } from '@mui/material'
import type { AboutMe } from '../../../../types'
import FormikBaseIndex from '../../../FormikBaseIndex'
import validationSchema from '../yupValidation'
import AddAboutMeForm from '../AddAboutMeForm'
import { updateAboutMe } from '../../../../services/aboutMeServices'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useContext } from 'react'
import UserContext from '../../../../contexts/userContext'

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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['aboutMeInfoCards'] })
      setNotification('Your post has been updated. ')
      setTimeout(() => {
        setOpen(false)
      }, 4000)
    },
    onError: error => {
      setNotification(`Error: , ${error.message}`)
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
        picturePreview={card.picture}
        notification={notification}
      />
    </Dialog>
  )
}

export default DialogComponent
