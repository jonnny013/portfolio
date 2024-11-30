import { useContext, useEffect } from 'react'
import NotificationContext from '../contexts/notificationContext'
import Alert from '@mui/material/Alert'

const styles = {
  alert: { position: 'fixed' as const, top: 50, width: '100%', zIndex: 10000 },
}

const Notification = () => {
  const [notification, dispatch] = useContext(NotificationContext)

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        dispatch({ type: 'RESET' })
      }, 10000)

      return () => clearTimeout(timer)
    }
  }, [dispatch, notification])
  return (
    <Alert
      severity={notification.style}
      style={styles.alert}
      onClose={() => {
        dispatch({ type: 'RESET' })
      }}
    >
      {notification.message}
    </Alert>
  )
}

export default Notification
