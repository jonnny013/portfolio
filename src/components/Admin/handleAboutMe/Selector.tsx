import themes from '../../../themes/themes'
import { InputLabel, Select, MenuItem, FormHelperText } from '@mui/material'
import type { InfoTypes } from './AddAboutMeForm'
import { useField } from 'formik'

const Selector = ({ infoOptions, id }: { infoOptions: InfoTypes[], id: string }) => {
  const [field, meta] = useField(id)
  const showError = meta.touched && meta.error
  return (
    <>
      <InputLabel style={{ fontSize: themes.fonts.formTextSize }}>
        Choose a type
      </InputLabel>
      <Select fullWidth {...field} sx={{ fontSize: themes.fonts.formTextSize }}>
        {infoOptions.map(option => (
          <MenuItem
            key={option.label}
            value={option.value}
            sx={{ fontSize: themes.fonts.formTextSize }}
          >
            {option.label}
          </MenuItem>
        ))}
        <FormHelperText
          style={{
            fontSize: themes.fonts.helperFont,
            textAlign: 'center',
            color: 'red',
            display: showError ? 'block' : 'none',
          }}
        >
          {showError ? meta.error : undefined}
        </FormHelperText>
      </Select>
    </>
  )
}

export default Selector
