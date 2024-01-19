import type { LoginFormTypes } from '../types'

const loginPost = ({ username, password}: LoginFormTypes) => {
  console.log('Form to send', username, password)
  return 'Sent!'
}

export default loginPost
