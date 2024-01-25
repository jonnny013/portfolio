import { useFormikContext } from 'formik'
import { renderIcon } from '../../../Projects/Icons'
import { Typography } from '@mui/material'
import Error from '../../../Error'
import type { ProjectWithoutID } from '../../../../types'
import ProjectLinks from '../../../Projects/ProjectLinks'

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
        margin: 10,
      }}
    >
      <h1 style={{ margin: 5 }}>Preview:</h1>
      <div className='ind-projects'>
        <div className='project-title'>
          <h2>{project.title}</h2>
        </div>
        <h1 className='projectName'>{project.project}</h1>
        <Typography className='long-intro' id='mern-long-paragraph'>
          {project.description}
        </Typography>
        <div className='project-focus'>
          <p className='main-focus-paragraph'>Main focus:</p>
          <div className='icons'>
            {Object.entries(project.skills).map(
              ([skill, value], index) => value && renderIcon(skill, index)
            )}
          </div>
          <ProjectLinks projectURL={project.website} sourceURL={project.sourceCode} />
        </div>
      </div>
    </div>
  )
}

export default SampleProject
