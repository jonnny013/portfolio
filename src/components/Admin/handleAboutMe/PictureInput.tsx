import themes from '../../../themes/themes'
import { useField, useFormikContext } from 'formik'
import { Button, FormHelperText } from '@mui/material'
import { useState } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

interface propTypes {
  id: string
  type: string
  setPicture: React.Dispatch<React.SetStateAction<null  | string >>
}

const PictureInput = ({ id, type, setPicture }: propTypes) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_field, meta] = useField(id)
  const formikProps = useFormikContext()
  const showError = meta.touched && meta.error
  const [error, setError] = useState<string | undefined>(undefined)
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e && e.target && e.target.files && e.target.files[0]) {
      if (e.target.files[0].size > 3145728) {
        return setError('Pictures must be less than 3mb')
      }
      const pic = e.target.files[0]
      formikProps.setFieldValue('picture', pic)
      setPicture(URL.createObjectURL(pic))
    }
  }

  return (
    <>
      <Button component='label' variant='contained' startIcon={<CloudUploadIcon />}>
        <input
          accept='image/*'
          id={id}
          type={type}
          // {...field}
          onChange={handleFileChange}
          style={{ display: 'none' }}
          name='picture'
        />
        Choose picture
      </Button>
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
      <FormHelperText
        style={{
          fontSize: themes.fonts.helperFont,
          textAlign: 'center',
          color: 'red',
          display: error ? 'block' : 'none',
        }}
      >
        {error ? error : undefined}
      </FormHelperText>
    </>
  )
}

export default PictureInput
