import { Github, Instagram, Linkedin } from "react-bootstrap-icons";

const SocialIcons = () => {
  return (
    <div className='social-icons' style={{display: 'flex', gap: 20}}>
      <a
        target='_blank'
        href='https://instagram.com/jonloveprogramming?igshid=OGQ5ZDc2ODk2ZA=='
      >
        <Instagram color="purple" />
      </a>
      <a target='_blank' href='https://www.linkedin.com/in/jon-love-9b8342265/'>
        <Linkedin />
      </a>
      <a target='_blank' href='https://github.com/jonnny013'>
        <Github />
      </a>
    </div>
  );
}

export default SocialIcons