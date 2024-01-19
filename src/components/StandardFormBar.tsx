import TextField from '@mui/material/TextField'
import themes from '../themes/themes'
import { useField } from 'formik'

interface propTypes {
  id: string
  label: string
  type: string
  props?: {
    multiline: boolean
    rows: number
  }
}

const styles = {
  resize: {
    style: { fontSize: themes.fonts.formTextSize },
  },
  helper: {
    style: { fontSize: 15 },
  },
}

const StandardFormBar = ({ id, label, type, props }: propTypes) => {
  const [field, meta] = useField(id)
  const showError = meta.touched && meta.error
  return (
    <TextField
      inputProps={styles.resize}
      InputLabelProps={styles.resize}
      FormHelperTextProps={styles.helper}
      variant='filled'
      id={id}
      label={label}
      type={type}
      {...field}
      error={showError ? true : false}
      helperText={showError ? meta.error : undefined}
      {...props}
    ></TextField>
  )
}

export default StandardFormBar
