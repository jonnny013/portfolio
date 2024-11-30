import { Dialog, DialogTitle } from '@mui/material'
import type { AboutMe } from '../../../types/types'
import validationSchema from '../../AdminAboutMeAdd/components/yupValidation'
import AddAboutMeForm from '../../AdminAboutMeAdd/components/AddAboutMeForm'
import { updateAboutMe } from '../../../services/aboutMeServices'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useContext } from 'react'
import UserContext from '../../../contexts/userContext'
import FormikBaseIndex from '../../../components/FormikBaseIndex'
import { useNotificationDispatch } from '../../../contexts/notificationContext'

interface props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  open: boolean
  card: AboutMe
}

const DialogComponent = ({ setOpen, open, card }: props) => {
  const handleClose = () => {
    setOpen(false)
  }
  const [{ userToken }] = useContext(UserContext)!
  const queryClient = useQueryClient()
  const notificationDispatch = useNotificationDispatch()
  const updateProjectMutation = useMutation({
    mutationFn: updateAboutMe,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['aboutMeInfoCards'] })
      notificationDispatch({
        type: 'SUCCESS',
        payload: 'Your post has been updated. ',
      })
      setTimeout(() => {
        setOpen(false)
      }, 4000)
    },
    onError: error => {
      notificationDispatch({ type: 'ERROR', payload: error })
    },
    onMutate: () => {
      notificationDispatch({ type: 'SUCCESS', payload: 'Please wait...' })
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
        isLoading={updateProjectMutation.status === 'pending'}
      />
    </Dialog>
  )
}

export default DialogComponent
