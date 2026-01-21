import type { Project, ProjectWithoutID } from '../../../types/types'
import { renderIcon } from './Icons'
import { Typography } from '@mui/material'
import ProjectLinks from './ProjectLinks'
import VerifiedIcon from '@mui/icons-material/Verified'

const ProjectCard = ({ project }: { project: Project | ProjectWithoutID }) => {
  return (
    <div className='project-container'>
      <div className='ind-projects'>
        <div className='project-title' style={{ position: 'relative' }}>
          {project.recommended && (
            <VerifiedIcon
              sx={{ fontSize: 50 }}
              style={{ right: 0, top: 0, position: 'absolute' }}
              color='primary'
            />
          )}
          <h2 style={{ color: 'white' }}>{project.title}</h2>
        </div>
        <h1 className='projectName'>{project.project}</h1>
        <Typography className='long-intro' id='mern-long-paragraph'>
          {project.description}
        </Typography>
        <div className='project-focus'>
          <p className='main-focus-paragraph'>Main focus:</p>
          <div className='icons'>
            {Object.entries(project.skills).map(
              ([skill, value], index) => value && renderIcon(skill, index),
            )}
          </div>
        </div>
        <ProjectLinks projectURL={project.website} sourceURL={project.sourceCode} />
      </div>
    </div>
  )
}

export default ProjectCard
