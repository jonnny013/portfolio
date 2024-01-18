import Button from '@mui/material/Button'
import themes from '../themes'

type button = 'button' | 'reset' | 'submit'

export default function StandardButton({ text, type }: { text: string, type: button }) {
  return (
    <Button variant='contained' style={{ fontSize: themes.fonts.buttonFontSize }} type={type}>
      {text}
    </Button>
  )
}
