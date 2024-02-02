import { renderIcon } from './Icons'

const skills = {
  css: true,
  html: true,
  node: true,
  react: true,
  bootstrap: true,
  materialUI: true,
  mongoDB: true,
  express: true,
  javascript: true,
  typescript: true,
}

const ScreenShotComponent = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1 className='header'>Jon Love</h1>
      <div>
        <img
          style={{ width: 70, height: 'auto', marginTop: 20 }}
          src='../../../mainLogoCropped.png'
          alt='logo'
        />
      </div>
      <div
        style={{
          justifySelf: 'center',
          margin: 'auto',
          textAlign: 'center',
          padding: 10,
        }}
      >
        <div className='icons'>
          {Object.entries(skills).map(
            ([skill, value], index) => value && renderIcon(skill, index)
          )}
        </div>
      </div>
    </div>
  )
}

export default ScreenShotComponent
