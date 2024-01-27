import Box from '@mui/material/Box'
import StandardFormBar from '../../../StandardFormBar'
import StandardButton from '../../../StandardButton'
import Alert from '@mui/material/Alert'
import themes from '../../../../themes/themes'
import StandardSelector from '../StandardSelector'
import Projects from '../../../Projects/Projects'
import StandardCheckbox from '../../../StandardCheckbox'
import { useFormikContext } from 'formik'
import type { ProjectWithoutID } from '../../../../types'
import Error from '../../../Error'

type FormSubmitHandler = (event?: React.FormEvent<HTMLFormElement> | undefined) => void

const EditProjectForm = ({
  onSubmit,
  notification,
}: {
  onSubmit: FormSubmitHandler
  notification: string | null
}) => {
  const formik = useFormikContext()
  const { values } = formik
  const project = values as ProjectWithoutID
  if (!project) {
    return <Error />
  }
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
            maxWidth: 600,
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
          <StandardSelector />
          <StandardCheckbox label='Is this project recommended?' id='recommended' />
        </Box>
        <Projects project={project} index={0} projectIndex={0}/>
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
        text='Update project'
        type='submit'
        disabled={notification ? true : false}
      />
    </form>
  )
}

export default EditProjectForm
