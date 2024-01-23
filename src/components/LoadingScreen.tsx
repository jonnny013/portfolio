import Stack from '@mui/material/Stack'
import LinearProgress from '@mui/material/LinearProgress'

const LoadingScreen = () => {
  return (
    <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
      <LinearProgress color='primary' />
      <LinearProgress color='success' />
      <LinearProgress color='primary' />
    </Stack>
  )
}

export default LoadingScreen
