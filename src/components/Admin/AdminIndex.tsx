import LoginIndex from './LoginIndex'
const AdminIndex = () => {
  const user = true

  if (!user) return (
    <LoginIndex />
  )

  return (
    <div>
      <h2>What would you like to do?</h2>
      <ul>
        <li>add projects(form-POST)</li>
        <li>update projects(list-PUT)</li>
        <li>delete projects(list-GET)</li>
      </ul>
    </div>
  )
}

export default AdminIndex