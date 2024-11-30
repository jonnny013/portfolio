import type { LoginFormTypes } from '../types/types'
import axios from 'axios'

const baseURL = '/api/login'

const loginPost = async ({ username, password }: LoginFormTypes) => {
  const user = { username, password }
  const result = await axios.post(baseURL, user)
  return result.data
}

export default loginPost
