import {Project} from '../../types';
import { renderIcon } from './Icons';


const Projects = ({
  project,
  index,
  projectIndex,
}: {
  project: Project;
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
          <h2>{project.title}</h2>
        </div>
        <h3 className='projectName'>{project.project}</h3>
        <p className='long-intro' id='mern-long-paragraph'>
          {project.intro}
        </p>
        <div className='project-focus'>
          <p className='main-focus-paragraph'>Main focus:</p>
          <div className='icons'>
            {Object.entries(project.skills).map(
              ([skill, value]) => value && renderIcon(skill)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
