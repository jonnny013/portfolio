import type { ContactFormTypes } from "../types"
import axios from "axios"

const baseURL = '/api/contactService'

const contactFormPost = async ({name, email, subject, message}: ContactFormTypes) => {
  const messageToSend = { name, email, subject, message }
  const result = await axios.post(baseURL, messageToSend)
  return result.data
}

export default contactFormPost