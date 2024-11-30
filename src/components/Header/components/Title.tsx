const Title = () => {
  return (
    <div id='titleDiv' style={{display: 'flex'}}>
      <div className='logoContainer' >
        <img className='logo' src='../../../mainLogoCropped.png' alt='logo' />
      </div>
      <div style={{justifySelf: 'center', margin: 'auto', textAlign: 'center', padding: 10}}>
        <h1 className='header'>Jon Love's Portfolio</h1>
        <p className='header' id='pageDescription'>
          This website is dedicated to putting my projects in one place
        </p>
      </div>
    </div>
  )
}

export default Title
