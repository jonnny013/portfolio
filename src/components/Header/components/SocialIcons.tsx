import { Github, Instagram, Linkedin } from "react-bootstrap-icons";

const SocialIcons = () => {
  return (
    <div className='social-icons' style={{display: 'flex', gap: 20}}>
      <a
        target='_blank'
        href='https://instagram.com/jonloveprogramming?igshid=OGQ5ZDc2ODk2ZA=='
      >
        <Instagram
          style={{
            background:
              'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
            borderRadius: 10,
            fontWeight: 0,
          }}
          color='rgba(255, 255, 255, 0.7)'
        />
      </a>
      <a target='_blank' href='https://www.linkedin.com/in/jon-love-9b8342265/'>
        <Linkedin color='#0077B5' />
      </a>
      <a target='_blank' href='https://github.com/jonnny013'>
        <Github color='#181717' />
      </a>
    </div>
  );
}

export default SocialIcons