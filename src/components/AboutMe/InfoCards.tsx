import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import type { AboutMe } from '../../types'
import { CardActionArea } from '@mui/material'
import { useState } from 'react'
import DialogComponent from './Dialog'


const  InfoCards = ({card}: {card: AboutMe}) => {
  const [open, setOpen] = useState(false)

  return (
    <Card sx={{ maxWidth: 345 }}>
      <DialogComponent setOpen={setOpen} open={open} card={card} />
      <CardActionArea onClick={() => setOpen(!open)}>
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
      </CardActionArea>
    </Card>
  )
}

export default InfoCards