import Box from '@mui/material/Box'
import StandardFormBar from '../StandardFormBar'
import StandardButton from '../StandardButton'

type FormSubmitHandler = (event?: React.FormEvent<HTMLFormElement> | undefined) => void

const ContactForm = ({onSubmit}: {onSubmit: FormSubmitHandler}) => {
  
  return (
    <form onSubmit={onSubmit}>
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
