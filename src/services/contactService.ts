import type { ContactFormTypes } from "../types"
import axios from "axios"

const baseURL = 'http://localhost:3001/contactService'

const contactFormPost = async ({name, email, subject, message}: ContactFormTypes) => {
  const messageToSend = { name, email, subject, message }
  const result = await axios.post(baseURL, messageToSend)
  console.log('Form to send', messageToSend)
  return result.data
}

export default contactFormPost