import Box from '@mui/material/Box'
import StandardSelector from './StandardSelector'
import Projects from '../../Projects/components/Projects'
import { useFormikContext } from 'formik'
import type { ProjectWithoutID } from '../../../types/types'
import StandardFormBar from '../../../components/StandardFormBar'
import StandardCheckbox from '../../../components/StandardCheckbox'
import StandardButton from '../../../components/StandardButton'

type FormSubmitHandler = (event?: React.FormEvent<HTMLFormElement> | undefined) => void

const EditProjectForm = ({
  onSubmit,
  isLoading,
}: {
  onSubmit: FormSubmitHandler
  isLoading: boolean
}) => {
  const formik = useFormikContext()
  const { values } = formik
  const project = values as ProjectWithoutID
  if (!project) {
    return null
  }
  return (
    <form onSubmit={onSubmit}>
      <div id='addProjectContainer' className='marginAuto row gap centered aligned'>
        <Box
          sx={{
            '& > :not(style)': {
              m: 1,
            },
            maxWidth: 600,
          }}
          style={{ display: 'flex', flexDirection: 'column' }}
          className='flex'
        >
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
        <div className='flex' style={{maxWidth: 'fit-content'}}>
          <Projects project={project} index={0} projectIndex={0} />
        </div>
      </div>
      <StandardButton text='Update project' type='submit' disabled={isLoading} />
    </form>
  )
}

export default EditProjectForm
