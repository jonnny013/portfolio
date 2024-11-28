import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import type { AboutMe } from '../../../types'
import { CardActionArea } from '@mui/material'
import { useState } from 'react'
import DialogComponent from './Dialog'

const style = { maxWidth: 350, width: 350, height: 300 }

const InfoCards = ({ card }: { card: AboutMe }) => {
  const [open, setOpen] = useState(false)

  return (
    <CardActionArea onClick={() => setOpen(!open)} sx={style}>
      <Card sx={style}>
        <DialogComponent setOpen={setOpen} open={open} card={card} />
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
      </Card>
    </CardActionArea>
  )
}

export default InfoCards
