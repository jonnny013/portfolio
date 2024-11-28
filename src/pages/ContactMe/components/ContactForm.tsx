import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import themes from '../../../themes/themes'
import StandardButton from '../../../components/StandardButton'
import StandardFormBar from '../../../components/StandardFormBar'

type FormSubmitHandler = (event?: React.FormEvent<HTMLFormElement> | undefined) => void

const ContactForm = ({
  onSubmit,
  notification,
}: {
  onSubmit: FormSubmitHandler
  notification: string | null
}) => {
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
        {notification && (
          <Alert
            severity={notification === 'error' ? 'error' : 'success'}
            style={{ fontSize: themes.fonts.formTextSize }}
          >
            {notification}
          </Alert>
        )}
        <h2>Send me a message!</h2>
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
        <StandardButton
          text='Send Message'
          type='submit'
          disabled={notification ? true : false}
        />
      </Box>
    </form>
  )
}

export default ContactForm
