import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import type { AboutMe } from '../../../../types'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { useState } from 'react'
import DialogComponent from './Dialog'
import IconButton from '@mui/material/IconButton'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import themes from '../../../../themes/themes'


const  InfoCards = ({card}: {card: AboutMe}) => {
  const [open, setOpen] = useState(false)

  return (
    <Card sx={{ maxWidth: 350, width: 350 }}>
      <DialogComponent setOpen={setOpen} open={open} card={card} />

      <CardMedia
        sx={{ height: 140, width: 'auto' }}
        image={card.picture as string}
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
      <div style={{ display: 'flex', gap: 20, marginLeft: 20 }}>
        <IconButton aria-label='delete'>
          <DeleteForeverIcon sx={{ fontSize: themes.fonts.icons }} color='error' />
        </IconButton>
        <IconButton aria-label='edit'>
          <BorderColorIcon sx={{ fontSize: themes.fonts.icons }} color='primary' />
        </IconButton>
      </div>
    </Card>
  )
}

export default InfoCards