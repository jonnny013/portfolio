import Box from '@mui/material/Box'
import StandardFormBar from '../StandardFormBar'
const ContactForm = () => {
  return (
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
    </Box>
  )
}

export default ContactForm
