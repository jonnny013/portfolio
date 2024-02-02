import themes from '../themes/themes'
import TextField from '@mui/material/TextField'

const styles = {
  resize: {
    style: { fontSize: themes.fonts.formTextSize, lineHeight: 1.3  },
  },
  helper: {
    style: { fontSize: themes.fonts.helperFont },
  },
  container: {
    width: '60%',
    marginBottom: 20,
  },
  input: {
    width: '50%'
  }
}

interface propTypes {
  title: string
  label: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  props?: {
    multiline: boolean
    rows: number
  }
}

const SearchBar = ({title, label, onChange, props}: propTypes) => {
  return (
    <div style={styles.container}>
      <h1>{title}</h1>
      <TextField
        inputProps={styles.resize}
        InputLabelProps={styles.resize}
        FormHelperTextProps={styles.helper}
        style={styles.input}
        onChange={event => onChange(event)}
        variant='filled'
        label={label}
        type='search'
        {...props}
      ></TextField>
    </div>
  )
}

export default SearchBar