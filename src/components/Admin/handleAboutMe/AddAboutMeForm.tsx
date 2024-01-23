import Box from '@mui/material/Box'
import StandardFormBar from '../../StandardFormBar'
import StandardButton from '../../StandardButton'
import Alert from '@mui/material/Alert'
import themes from '../../../themes/themes'
import PictureInput from './PictureInput'
import { useState } from 'react'

type FormSubmitHandler = (event?: React.FormEvent<HTMLFormElement> | undefined) => void

const AddAboutMeForm = ({
  onSubmit,
  notification,
  picturePreview,
}: {
  onSubmit: FormSubmitHandler
  notification: string | null
  picturePreview?: string | HTMLImageElement | File
}) => {
  const [picture, setPicture] = useState<null | ArrayBuffer | string>('')
  return (
    <form onSubmit={onSubmit}>
      <Box
        sx={{
          '& > :not(style)': {
            m: 1,
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%',
            maxWidth: 400,
          },
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: 'auto',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {notification && (
          <Alert
            severity={notification === 'error' ? 'error' : 'success'}
            style={{ fontSize: themes.fonts.formTextSize }}
          >
            {notification}
          </Alert>
        )}
        <StandardFormBar id='name' label='Name' type='text' />
        <StandardFormBar
          id='description'
          label='Description'
          type='text'
          props={{
            multiline: true,
            rows: 8,
          }}
        />
        <StandardFormBar id='picDesc' label='Picture Description' type='text' />
        <PictureInput id='picture' type='file' setPicture={setPicture} />
        {picture && typeof picture === 'string' && (
          <>
            <h1 style={{ textAlign: 'center' }}>Picture preview:</h1>
            <img src={picture} style={{ maxWidth: 200 }} />
          </>
        )}
        {picturePreview && typeof picturePreview === 'string' && (
          <>
            <h1 style={{ textAlign: 'center' }}>Original picture:</h1>
            <img src={picturePreview} style={{ maxWidth: 200 }} />
          </>
        )}
        <StandardButton
          text='Add About Me '
          type='submit'
          disabled={notification ? true : false}
        />
      </Box>
    </form>
  )
}

export default AddAboutMeForm
