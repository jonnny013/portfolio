import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'
import StandardFormBar from '../../../components/StandardFormBar'
import StandardButton from '../../../components/StandardButton'
import { useNotificationValue } from '../../../contexts/notificationContext'

type FormSubmitHandler = (event?: React.FormEvent<HTMLFormElement> | undefined) => void

const LoginForm = ({
  onSubmit,
}: {
  onSubmit: FormSubmitHandler
}) => {
  const navigate = useNavigate()
  const notification = useNotificationValue()
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
        <StandardFormBar id='username' label='Username' type='text' />
        <StandardFormBar id='password' label='Password' type='password' />
        <StandardButton
          text='Login'
          type='submit'
          disabled={notification.message ? true : false}
        />
        <StandardButton
          text='Cancel'
          type='button'
          buttonColor='error'
          disabled={notification.message ? true : false}
          onClick={() => navigate('/')}
        />
      </Box>
    </form>
  )
}

export default LoginForm
