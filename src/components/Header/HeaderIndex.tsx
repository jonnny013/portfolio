import NavTabs from './components/NavTabs'
import './components/header.css'
import { Link } from 'react-router-dom'

const HeaderIndex = () => {
  return (
    <header>
      <div className='row centered ninetyPercent marginAuto' id='header'>
        <Link to='/' className='nav-link row centered aligned header-title'>
          <div className='logoContainer'>
            <img className='logo' src='../../../mainLogoCropped.png' alt='logo' />
          </div>
          <h1 className='header noMargin'>Jon Love</h1>
        </Link>
        <div id='header-link'>
          <NavTabs />
        </div>
      </div>
    </header>
  )
}

export default HeaderIndex
