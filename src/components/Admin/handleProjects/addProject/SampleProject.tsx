import { useFormikContext } from 'formik'
import { renderIcon } from '../../../Projects/Icons'
import { Typography } from '@mui/material'
import Error from '../../../Error'
import type { ProjectWithoutID } from '../../../../types'

const SampleProject = () => {
  const formik = useFormikContext()
  const { values } = formik
  const project = values as ProjectWithoutID

  if (!project) {
    return <Error />
  }

  return (
    <div
      style={{
        objectFit: 'cover',
        backgroundColor: '',
        justifySelf: 'center',
        alignSelf: 'center',
        margin: 'auto',
        marginBottom: 20,
      }}
    >
      <div className='ind-projects'>
        <div className='project-title'>
          <h2>{project.title}</h2>
        </div>
        <h1 className='projectName'>{project.project}</h1>
        <Typography className='long-intro' id='mern-long-paragraph'>
          {project.intro}
        </Typography>
        <div className='project-focus'>
          <p className='main-focus-paragraph'>Main focus:</p>
          <div className='icons'>
            {Object.entries(project.skills).map(
              ([skill, value], index) => value && renderIcon(skill, index)
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SampleProject
