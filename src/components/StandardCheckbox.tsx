import { useField } from 'formik'
import {Checkbox, FormControlLabel, FormHelperText} from '@mui/material'
import themes from '../themes/themes'

interface propTypes {
  id: string
  label: string
}


const StandardCheckbox = ({ id, label}: propTypes) => {
  const [field, meta] = useField(id)
  const showError = meta.touched && meta.error
  return (
    <>
      <FormControlLabel
        id={id}
        {...field}
        control={<Checkbox size='medium' checked={field.value} />}
        label={label}

        labelPlacement='start'
        sx={{ fontSize: 20 }}
        componentsProps={{ typography: { variant: 'h4' } }}
        style={{justifyContent: 'center'}}
      />
      <FormHelperText
        style={{ fontSize: themes.fonts.helperFont, textAlign: 'center', color: 'red' }}
      >
        {showError ? meta.error : undefined}
      </FormHelperText>
    </>
  )
}

export default StandardCheckbox
