import { Github, Instagram, Linkedin } from 'react-bootstrap-icons'

const SocialIcons = () => {
  return (
    <div className='social-icons' style={{ display: 'flex', gap: 20 }}>
      <a
        target='_blank'
        href='https://instagram.com/jonloveprogramming?igshid=OGQ5ZDc2ODk2ZA=='
      >
        <Instagram className='instagram' color='rgba(255, 255, 255, 0.7)' />
      </a>
      <a target='_blank' href='https://www.linkedin.com/in/jon-love-9b8342265/'>
        <Linkedin color='#0077B5' />
      </a>
      <a target='_blank' href='https://github.com/jonnny013'>
        <Github color='#181717' />
      </a>
    </div>
  )
}

export default SocialIcons
