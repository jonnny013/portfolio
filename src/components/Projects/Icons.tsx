import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faCss3,
  faHtml5,
  faNodeJs,
  faReact,
  faBootstrap,
  faJs,
} from '@fortawesome/free-brands-svg-icons';

export const renderIcon = (key: string) => {
  switch (key) {
    case 'css':
      return (
        <div className='mern-icon'>
          <p>CSS</p>
          <FontAwesomeIcon icon={faCss3} size='3x' style={{color: '#1572B6'}} />
        </div>
      );
    case 'html':
      return (
        <div className='mern-icon'>
          <p>HTML</p>
          <FontAwesomeIcon icon={faHtml5} size='3x' style={{color: '#E34F26'}} />
        </div>
      );
    case 'node':
      return (
        <div className='mern-icon'>
          <p>Node.js</p>
          <FontAwesomeIcon icon={faNodeJs} size='3x' style={{color: '#8CC84B'}} />
        </div>
      );
    case 'react':
      return (
        <div className='mern-icon'>
          <p>React</p>
          <FontAwesomeIcon icon={faReact} size='3x' style={{color: '#61DAFB'}} />
        </div>
      );
    case 'bootstrap':
      return (
        <div className='mern-icon'>
          <p>Bootstrap</p>
          <FontAwesomeIcon icon={faBootstrap} size='3x' style={{color: '#563D7C'}} />
        </div>
      );
    case 'javascript':
      return (
        <div className='mern-icon'>
          <p>JavaScript</p>
          <FontAwesomeIcon icon={faJs} size='3x' style={{color: '#F7DF1E'}} />
        </div>
      );
    case 'mongoDB':
      return (
        <div className='mern-icon'>
          <p>MongoDB</p>
          <p>where is my icon??</p>
        </div>
      );
    case 'express':
      return (
        <div className='mern-icon'>
          <p>Express</p>
          <p id='express-logo'>Ex</p>
        </div>
      );
    default:
      return null;
  }
};
