interface props {
  name: string,
  email: string,
  subject: string,
  message: string
}

const contactFormPost = ({name, email, subject, message}: props) => {

  console.log('Form to send', name, email, subject, message)
}

export default contactFormPost