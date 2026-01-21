import Box from '@mui/material/Box'
import StandardSelector from '../../AdminProjectEdit/components/StandardSelector'
import ProjectCard from '../../Projects/components/ProjectCard'
import { useFormikContext } from 'formik'
import type { ProjectWithoutID } from '../../../types/types'
import StandardFormBar from '../../../components/StandardFormBar'
import StandardCheckbox from '../../../components/StandardCheckbox'
import StandardButton from '../../../components/StandardButton'

type FormSubmitHandler = (event?: React.FormEvent<HTMLFormElement> | undefined) => void

const AddProjectForm = ({
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
      <div id='addProjectContainer'>
        <Box
          sx={{
            '& > :not(style)': {
              m: 1,
              width: '80%',
            },
            width: '80%',
            maxWidth: 600,
          }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
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
        <ProjectCard project={project} />
      </div>

      <StandardButton
        text='Add project'
        type='submit'
        disabled={isLoading ? true : false}
      />
    </form>
  )
}

export default AddProjectForm
