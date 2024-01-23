import type { LoginFormTypes } from '../types'
import axios from 'axios'

const baseURL = 'http://localhost:3001/login'

const loginPost = async ({ username, password}: LoginFormTypes) => {
  const user = {username, password}
  const result = await axios.post(baseURL, user)
  console.log('Form to send', user)
  return result.data
}

export default loginPost
