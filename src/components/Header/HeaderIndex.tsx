import NavBar from './components/NavBar'
import Title from './components/Title'
import './components/header.css'
const HeaderIndex = () => {
  return (
    <header>
      <div className='row centered ninetyPercent marginAuto' id='header'>
        <Title />
        <NavBar />
      </div>
    </header>
  )
}

export default HeaderIndex
