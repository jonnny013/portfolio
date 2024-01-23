import { Dialog, DialogTitle } from '@mui/material'
import type { AboutMe } from '../../../../types'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import themes from '../../../../themes/themes'

interface props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  open: boolean
  card: AboutMe
}

const DialogComponent = ({ setOpen, open, card }: props) => {
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth='xl' scroll='body'>
      <CardActionArea onClick={() => setOpen(!open)}>
        <DialogTitle sx={{ fontSize: themes.fonts.title, fontWeight: 800, padding: 1 }}>
          {card.name}
        </DialogTitle>
        <Card
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <img
            id='aboutMeImg'
            src={card.picture as string}
            alt={card.picDesc}
          />
          <CardContent>
            <Typography variant='h4' color='text.secondary'>
              {card.description}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Dialog>
  )
}

export default DialogComponent
