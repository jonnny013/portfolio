import LoginIndex from './LoginIndex'
const AdminIndex = () => {
  const user = true

  if (!user) return (
    <LoginIndex />
  )

  return (
    <div>
      <ul>
        <li>add projects(form-POST)</li>
        <li>update projects(list-PUT)</li>
        <li>delete projects(list-GET)</li>
      </ul>
    </div>
  )
}

export default AdminIndex