import { Project } from '../types';

const Projects = ({project, index, projectIndex}: {project: Project, index: number, projectIndex: number}) => {
  return (
    <div
      style={{
        width: 400,
        height: 400,
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
            <div className='mern-icon'>
              <p>Express</p>
              <p id='express-logo'>Ex</p>
            </div>
            <div className='mern-icon'>
              <p>React</p>
              <i className='fa-brands fa-react' style={{color: '#61dbfb'}}></i>
            </div>
            <div className='mern-icon'>
              <p>Node.Js</p>
              <i className='fa-brands fa-node' style={{color: '#68a063'}}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
