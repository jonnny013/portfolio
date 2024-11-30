import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import type { AboutMe } from '../../../types/types'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { useContext, useState } from 'react'
import DialogComponent from './Dialog'
import IconButton from '@mui/material/IconButton'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import themes from '../../../themes/themes'
import { deleteAboutMe } from '../../../services/aboutMeServices'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import UserContext from '../../../contexts/userContext'
import { useNotificationDispatch } from '../../../contexts/notificationContext'

const InfoCards = ({ card }: { card: AboutMe }) => {
  const [open, setOpen] = useState(false)
  const [{ userToken }] = useContext(UserContext)!
  const notificationDispatch = useNotificationDispatch()
  const queryClient = useQueryClient()
  const deleteCardMutation = useMutation({
    mutationFn: deleteAboutMe,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
      notificationDispatch({
        type: 'SUCCESS',
        payload: 'Your About Me section has been deleted!',
      })
    },
    onError: error => {
      notificationDispatch({ type: 'ERROR', payload: error })
    },
    onMutate: () => {
      notificationDispatch({ type: 'SUCCESS', payload: 'Please wait...' })
    },
  })

  const handleDelete = () => {
    if (userToken) {
      if (window.confirm('Are you sure you want to delete this card permanently?')) {
        deleteCardMutation.mutate({ id: card.id, token: userToken })
      }
    }
  }

  return (
    <Card sx={{ maxWidth: 350, width: 350 }}>
      <DialogComponent
        setOpen={setOpen}
        open={open}
        card={card}
      />

      <CardMedia
        sx={{ height: 140, width: 'auto' }}
        image={card.picture}
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
