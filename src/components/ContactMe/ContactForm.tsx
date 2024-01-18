import Box from '@mui/material/Box'
import StandardFormBar from '../StandardFormBar'
import StandardButton from '../StandardButton'
// import contactFormPost from '../../services/contactService' 
const ContactForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Form submitted', event)
    // contactFormPost()
  }
  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          '& > :not(style)': {
            m: 1,
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%',
            maxWidth: 400,
          },
        }}
        style={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}
      >
        <StandardFormBar id='name' label='Name' type='text' />
        <StandardFormBar id='email' label='Email' type='email' />
        <StandardFormBar id='subject' label='Subject' type='text' />
        <StandardFormBar
          id='message'
          label='Message'
          type='text'
          props={{
            multiline: true,
            rows: 8,
          }}
        />
        <StandardButton text='Send Message' type='submit' />
      </Box>
    </form>
  )
}

export default ContactForm
