import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import themes from '../../../themes/themes'
import { useNavigate } from 'react-router-dom'
import StandardFormBar from '../../../components/StandardFormBar'
import StandardButton from '../../../components/StandardButton'

type FormSubmitHandler = (event?: React.FormEvent<HTMLFormElement> | undefined) => void

const LoginForm = ({
  onSubmit,
  notification,
}: {
  onSubmit: FormSubmitHandler
  notification: string | null
}) => {
  const navigate = useNavigate()

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
        <StandardFormBar id='username' label='Username' type='text' />
        <StandardFormBar id='password' label='Password' type='password' />
        <StandardButton
          text='Login'
          type='submit'
          disabled={notification ? true : false}
        />
        <StandardButton
          text='Cancel'
          type='button'
          buttonColor='error'
          disabled={notification ? true : false}
          onClick={() => navigate('/')}
        />
      </Box>
    </form>
  )
}

export default LoginForm
