import Box from '@mui/material/Box'
import StandardFormBar from '../../../StandardFormBar'
import StandardButton from '../../../StandardButton'
import Alert from '@mui/material/Alert'
import themes from '../../../../themes/themes'
import StandardCheckBox from '../StandardCheckBox'
import SampleProject from './SampleProject'

type FormSubmitHandler = (event?: React.FormEvent<HTMLFormElement> | undefined) => void

const AddProjectForm = ({
  onSubmit,
  notification,
}: {
  onSubmit: FormSubmitHandler
  notification: string | null
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div id='addProjectContainer'>
        <Box
          sx={{
            '& > :not(style)': {
              m: 1,
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '80%',
            },
            width: '80%',
            maxWidth: 600
          }}
          style={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}
        >
          {notification && (
            <Alert
              severity={notification === 'error' ? 'error' : 'success'}
              style={{ fontSize: themes.fonts.formTextSize }}
            >
              {notification}
            </Alert>
          )}
          <StandardFormBar id='title' label='Title' type='text' />
          <StandardFormBar id='project' label='Project Name' type='text' />
          <StandardFormBar
            id='description'
            label='Description'
            type='text'
            props={{
              multiline: true,
              rows: 8,
            }}
          />

          <StandardFormBar id='website' label='Project URL' type='text' />
          <StandardFormBar id='sourceCode' label='Source Code URL' type='text' />
          <StandardCheckBox />
        </Box>
        <SampleProject />
      </div>
      {notification && (
        <Alert
          severity={notification === 'error' ? 'error' : 'success'}
          style={{ fontSize: themes.fonts.formTextSize }}
        >
          {notification}
        </Alert>
      )}
      <StandardButton
        text='Add project'
        type='submit'
        disabled={notification ? true : false}
      />
    </form>
  )
}

export default AddProjectForm
