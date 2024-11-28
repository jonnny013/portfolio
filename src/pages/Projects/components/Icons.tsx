import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faCss3,
  faHtml5,
  faNodeJs,
  faReact,
  faBootstrap,
  faJs,
} from '@fortawesome/free-brands-svg-icons';

export const renderIcon = (skill: string, index: number) => {
  switch (skill) {
    case 'css':
      return (
        <div key={index} className='mern-icon'>
          <p>CSS</p>
          <FontAwesomeIcon icon={faCss3} size='3x' style={{ color: '#1572B6' }} />
        </div>
      )
    case 'html':
      return (
        <div key={index} className='mern-icon'>
          <p>HTML</p>
          <FontAwesomeIcon icon={faHtml5} size='3x' style={{ color: '#E34F26' }} />
        </div>
      )
    case 'node':
      return (
        <div key={index} className='mern-icon'>
          <p>Node.js</p>
          <FontAwesomeIcon icon={faNodeJs} size='3x' style={{ color: '#8CC84B' }} />
        </div>
      )
    case 'react':
      return (
        <div key={index} className='mern-icon'>
          <p>React</p>
          <FontAwesomeIcon icon={faReact} size='3x' style={{ color: '#61DAFB' }} />
        </div>
      )
    case 'bootstrap':
      return (
        <div key={index} className='mern-icon'>
          <p>Bootstrap</p>
          <FontAwesomeIcon icon={faBootstrap} size='3x' style={{ color: '#563D7C' }} />
        </div>
      )
    case 'materialUI':
      return (
        <div key={index} className='mern-icon'>
          <p>materialUI</p>
          <img alt='material ui' src='../../../material-ui-logo.png' style={{ width: 30 }} />
        </div>
      )
    case 'javascript':
      return (
        <div key={index} className='mern-icon'>
          <p>JavaScript</p>
          <FontAwesomeIcon icon={faJs} size='3x' style={{ color: '#F7DF1E' }} />
        </div>
      )
    case 'typescript':
      return (
        <div key={index} className='mern-icon'>
          <p>Typescript</p>
          <img alt='typescript' src='../../../typescript_original_logo.png' style={{ width: 30 }} />
        </div>
      )
    case 'mongoDB':
      return (
        <div key={index} className='mern-icon'>
          <p>MongoDB</p>
          <img alt='MongoDB' src='../../../mongodbicon.png' style={{ width: 30 }} />
        </div>
      )
    case 'express':
      return (
        <div key={index} className='mern-icon'>
          <p>Express</p>
          <p id='express-logo'>Ex</p>
        </div>
      )
    default:
      return null
  }
};
