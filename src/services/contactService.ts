import { ContactFormTypes } from "../types"

const contactFormPost = ({name, email, subject, message}: ContactFormTypes) => {

  console.log('Form to send', name, email, subject, message)
  return 'Sent!'
}

export default contactFormPost