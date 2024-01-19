import LoginIndex from './LoginIndex'
const AdminIndex = () => {
  const user = false

  if (!user) return (
    <LoginIndex />
  )

  return (
    <div>AdminIndex</div>
  )
}

export default AdminIndex