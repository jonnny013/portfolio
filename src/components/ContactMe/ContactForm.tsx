import Box from '@mui/material/Box'
import StandardFormBar from '../StandardFormBar'
const ContactForm = () => {
  return (
    <Box
      sx={{
        '& > :not(style)': { m: 1, width: '85ch' },
      }}
    >
      <StandardFormBar id='name' label='Name' type='text' />
      <StandardFormBar id='email' label='Email' type='email' />
    </Box>
  )
}

export default ContactForm
