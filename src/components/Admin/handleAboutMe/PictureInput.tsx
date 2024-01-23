import themes from '../../../themes/themes'
import { useField, useFormikContext } from 'formik'
import { FormHelperText } from '@mui/material'
import { useState } from 'react'

interface propTypes {
  id: string
  type: string
  setPicture: React.Dispatch<React.SetStateAction<null | ArrayBuffer | string>>
}

const PictureInput = ({ id, type, setPicture }: propTypes) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [field, meta] = useField(id)
  const formikProps = useFormikContext()
  const showError = meta.touched && meta.error
  const [error, setError] = useState<string | undefined>(undefined)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if ((e.target.files[0].size > 3145728)) {
     return setError('Pictures must be less tha 3mb')
    }
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        formikProps.setFieldValue('picture', reader.result)
        setPicture(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
    
  }

  console.log(formikProps.values)

  return (
    <>
      <input
        accept='image/*'
        id={id}
        type={type}
        // {...field}
        onChange={handleFileChange}
      />
      <FormHelperText
        style={{ fontSize: themes.fonts.helperFont, textAlign: 'center', color: 'red' }}
      >
        {showError ? meta.error : undefined}
      </FormHelperText>
      <FormHelperText
        style={{ fontSize: themes.fonts.helperFont, textAlign: 'center', color: 'red' }}
      >
        {error ? error : undefined}
      </FormHelperText>
    </>
  )
}

export default PictureInput
