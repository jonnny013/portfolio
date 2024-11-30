import type { ContactFormTypes } from '../types/types'
import axios from 'axios'
import emailjs from '@emailjs/browser'

const baseURL = '/api/email'

const contactFormPost = async ({ name, email, subject, message }: ContactFormTypes) => {
  const messageToSend = { name, email, subject, message }

  try {
    const result = await axios.post(baseURL, messageToSend)
    if (result.status === 200) {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      if (serviceId && templateId && publicKey) {
        const text = await emailjs.send(serviceId, templateId, messageToSend, publicKey)
        // eslint-disable-next-line no-console
        console.log(text)
        return { backendResult: result.data, emailjsResult: text }
      } else {
        throw new Error('Unable to send')
      }
    } else {
      throw new Error('Failed to save message to the backend')
    }
  } catch (error) {
    if (error && typeof error === 'object' && 'message' in error) {
      return { error: error.message }
    } else {
      // eslint-disable-next-line no-console
      console.log(error)
      return { error: 'unknown error' }
    }
  }
}

export default contactFormPost
