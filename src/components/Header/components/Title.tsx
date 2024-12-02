import { Link } from 'react-router-dom'

const Title = () => {
  return (
    <Link to='/' className='nav-link row centered aligned'>
      <div className='logoContainer'>
        <img className='logo' src='../../../mainLogoCropped.png' alt='logo' />
      </div>
      <h1 className='header noMargin'>Jon Love's Portfolio</h1>
    </Link>
  )
}

export default Title
