import Button from '@mui/material/Button'
import themes from '../themes'

type button = 'button' | 'reset' | 'submit'

export default function StandardButton({ text, type, disabled }: { text: string, type: button, disabled: boolean }) {
  return (
    <Button variant='contained' style={{ fontSize: themes.fonts.buttonFontSize }} type={type} disabled={disabled}>
      {text}
    </Button>
  )
}
