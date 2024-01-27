import { useEffect, useState } from 'react'
import { Alert } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const Unauthorized = () => {
  const [timer, setTimer] = useState(3)
  const navigate = useNavigate()

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1)
      }, 1000)
      if (timer === 0) {
        navigate('/admin')
      }
      return () => clearInterval(intervalId)
    }, [timer, navigate])
    

  return (
    <Alert severity='error' sx={{ fontSize: 20, textAlign: 'center' }}>
      You aren't authorized to be here, please login first. Redirecting in {timer}
    </Alert>
  )
}

export default Unauthorized
