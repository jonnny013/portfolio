import { useEffect, useState } from 'react'
import AboutIndex from './AboutIndex'
import { Alert } from '@mui/material'
import themes from '../../../../themes/themes'

const EditAndDeleteAboutMe = () => {
  const [notification, setNotification] = useState<string | undefined>()

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setNotification(undefined)
      }, 5000)
      return () => clearTimeout(timeoutId)
    }, [notification, setNotification])

  return (
    <>
      {notification && (
        <Alert
          severity={notification === 'error' ? 'error' : 'success'}
          style={{ fontSize: themes.fonts.formTextSize }}
        >
          {notification}
        </Alert>
      )}
      <AboutIndex setNotification={setNotification} notification={notification} />
    </>
  )
}

export default EditAndDeleteAboutMe