import { useParams } from "react-router-dom"


const EditProjectForm = () => {
  const projectId = useParams()
  console.log(projectId)
  
  return (
    <div>EditProjectForm</div>
  )
}

export default EditProjectForm