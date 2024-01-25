import type { Project, ProjectWithoutID } from '../../types';
import { renderIcon } from './Icons';
import { Typography } from '@mui/material';
import ProjectLinks from './ProjectLinks'
import VerifiedIcon from '@mui/icons-material/Verified'

const Projects = ({
  project,
  index,
  projectIndex,
}: {
  project: Project | ProjectWithoutID;
  index: number;
  projectIndex: number;
}) => {

  return (
    <div
      style={{
        objectFit: 'cover',
        display: projectIndex !== index ? 'none' : 'block',
        backgroundColor: '',
      }}
    >
      <div className='ind-projects'>
        <div className='project-title'>
          {project.recommended && (
            <VerifiedIcon
              sx={{ fontSize: 50 }}
              style={{ position: 'absolute', right: 10 }}
              color='primary'
            />
          )}
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
};

export default Projects;
