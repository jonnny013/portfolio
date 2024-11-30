import Box from '@mui/material/Box'
import PictureInput from './PictureInput'
import { useState } from 'react'
import Selector from './Selector'
import StandardFormBar from '../../../components/StandardFormBar'
import StandardButton from '../../../components/StandardButton'
import { AboutMeInfoType } from '../../../types/types'

export interface InfoTypes {
  value: AboutMeInfoType
  label: string
}

const infoOptions: InfoTypes[] = Object.values(AboutMeInfoType).map(val => ({
  value: val,
  label: val.toString(),
}))

type FormSubmitHandler = (event?: React.FormEvent<HTMLFormElement> | undefined) => void

const AddAboutMeForm = ({
  onSubmit,
  picturePreview,
  isLoading
}: {
  onSubmit: FormSubmitHandler
  picturePreview?: string | File | undefined
  isLoading: boolean
}) => {
  const [picture, setPicture] = useState<null | string>('')
  const pic = () => {
    if (typeof picturePreview === 'string') {
      return picturePreview
    } else if (picturePreview) {
      return URL.createObjectURL(picturePreview)
    } else {
      return undefined
    }
  }

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
        <Selector infoOptions={infoOptions} id='type' />
        <StandardFormBar id='picDesc' label='Picture Description' type='text' />
        <PictureInput id='picture' type='file' setPicture={setPicture} />
        {picture && (
          <>
            <h1 style={{ textAlign: 'center' }}>Picture preview:</h1>
            <img src={picture} style={{ maxWidth: 200 }} />
          </>
        )}
        {picturePreview && (
          <>
            <h1 style={{ textAlign: 'center' }}>Original picture:</h1>
            <img src={pic()} style={{ maxWidth: 200 }} />
          </>
        )}
        <StandardButton
          text='Add About Me '
          type='submit'
          disabled={isLoading}
        />
      </Box>
    </form>
  )
}

export default AddAboutMeForm
