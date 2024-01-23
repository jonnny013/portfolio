import Button from '@mui/material/Button'
import themes from '../themes/themes'

type button = 'button' | 'reset' | 'submit'

type color =
  "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning"

export default function StandardButton({
  text,
  type,
  disabled,
  buttonColor,
  onClick,
  style,
}: {
  text: string
  type: button
  disabled?: boolean
  buttonColor?: color
  onClick?: React.MouseEventHandler<HTMLElement> | undefined
  style?: React.CSSProperties
}) {
  return (
    <Button
      variant='contained'
      style={{ fontSize: themes.fonts.buttonFontSize, ...style }}
      type={type}
      disabled={disabled ? disabled : false}
      onClick={onClick ? onClick : undefined}
      color={buttonColor ? buttonColor : 'primary'}
    >
      {text}
    </Button>
  )
}
