import { useContext, useEffect } from 'react'
import NotificationContext from '../contexts/notificationContext'
import Alert from '@mui/material/Alert'

const styles = {
  alert: { position: 'fixed' as const, top: 50, width: '100%', zIndex: 10000 },
}

const Notification = () => {
  const [notification, dispatch] = useContext(NotificationContext)
  useEffect(() => {
    if (notification && notification.message !== null) {
      const timer = setTimeout(() => {
        dispatch({ type: 'RESET' })
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [dispatch, notification])
  if (!notification.message) return null
  return (
    <Alert
      severity={notification.style}
      style={styles.alert}
      onClose={() => {
        dispatch({ type: 'RESET' })
      }}
      sx={{
        fontSize: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '.MuiAlert-icon': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.MuiAlert-message': {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          width: '100%',
        },
      }}
      className='row centered aligned'
    >
      {notification.message}
    </Alert>
  )
}

export default Notification
