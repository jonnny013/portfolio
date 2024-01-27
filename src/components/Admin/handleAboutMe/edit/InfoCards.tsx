import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import type { AboutMe } from '../../../../types'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { useContext, useState } from 'react'
import DialogComponent from './Dialog'
import IconButton from '@mui/material/IconButton'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import themes from '../../../../themes/themes'
import { deleteAboutMe } from '../../../../services/aboutMeServices'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import UserContext from '../../../../contexts/userContext'
import { isAxiosError } from 'axios'

const InfoCards = ({
  card,
  setNotification,
  notification,
}: {
  card: AboutMe
  setNotification: React.Dispatch<React.SetStateAction<string | undefined>>
  notification: string | undefined
}) => {
  const [open, setOpen] = useState(false)
  const [{ userToken }] = useContext(UserContext)!
  const queryClient = useQueryClient()
  const deleteCardMutation = useMutation({
    mutationFn: deleteAboutMe,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
      setNotification('Your project has been deleted!')
    },
    onError: error => {
           if (
             isAxiosError(error) &&
             error.response &&
             error.response.data &&
             error.response.data.error
           ) {
             setNotification(`Error: ${error.response.data.error}`)
           } else {
             setNotification(error.message)
           }
    },
    onMutate: () => {
      setNotification('Please wait...')
    },
  })

  const handleDelete = () => {
    if (userToken) {
    if (window.confirm('Are you sure you want to delete this card permanently?')) {
      deleteCardMutation.mutate({id: card.id, token: userToken})
    }}
  }

  return (
    <Card sx={{ maxWidth: 350, width: 350 }}>
      <DialogComponent
        setOpen={setOpen}
        open={open}
        card={card}
        setNotification={setNotification}
        notification={notification}
      />

      <CardMedia
        sx={{ height: 140, width: 'auto' }}
        image={import.meta.env.VITE_API_BASE_URL + `${card.picture}`}
        title={card.picDesc}
      />
      <CardContent>
        <Typography gutterBottom variant='h4' component='div'>
          {card.name}
        </Typography>
        <Typography variant='h6' color='text.secondary'>
          {card.description}
        </Typography>
      </CardContent>
      <div
        style={{
          display: 'flex',
          gap: 20,
          marginLeft: 20,
          alignSelf: 'flex-end',
          justifySelf: 'flex-end',
        }}
      >
        <IconButton aria-label='delete' onClick={handleDelete}>
          <DeleteForeverIcon sx={{ fontSize: themes.fonts.icons }} color='error' />
        </IconButton>
        <IconButton
          aria-label='edit'
          onClick={() => {
            setOpen(true)
          }}
        >
          <BorderColorIcon sx={{ fontSize: themes.fonts.icons }} color='primary' />
        </IconButton>
      </div>
    </Card>
  )
}

export default InfoCards
