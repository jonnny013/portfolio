import TextField from '@mui/material/TextField'
import themes from '../themes'
import { useState } from 'react'

interface propTypes {
  id: string
  label: string
  type: string
  helperText?: string | undefined
  props?: {
    multiline: boolean,
    rows: number
  }
}

const styles = {
  resize: {
    style: {fontSize: themes.fonts.formTextSize}
  }
}

const StandardFormBar = ({id, label, type, helperText, props}: propTypes) => {
  const [text, setText] = useState<string | undefined>(undefined)
  console.log('text',text)
  return (
      
        <TextField
          inputProps={styles.resize}
          InputLabelProps={styles.resize}
          variant='filled'
          id={id}
          label={label}
          type={type}
          helperText={helperText ? helperText : undefined}
          {...props}
          value={text}
          onChange={e => setText(e.target.value)}
        ></TextField>
  )
}

export default StandardFormBar
