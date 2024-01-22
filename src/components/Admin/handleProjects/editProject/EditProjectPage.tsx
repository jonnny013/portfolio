import { useQuery } from '@tanstack/react-query'
import LoadingScreen from '../../../LoadingScreen'
import { getProjects } from '../../../../services/projectsServices'
import type { Project } from '../../../../types'
import { List, ListItem } from '@mui/material'
import ListItemButton from '@mui/material/ListItemButton'
import { useNavigate } from 'react-router-dom'

const EditProjectPage = () => {
  const navigate = useNavigate()
  let projects: Project[] = []

  const result = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
  })

  if (result.isLoading) {
    return <LoadingScreen />
  }

  if (result) {
    if (result.data) {
      projects = result.data
    }
  }


  return (
    <div>
      <h1>Which project would you like to edit?</h1>
      <List
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'auto',
          fontSize: 20,
          '& ul': { padding: 0 },
        }}
      >
        {projects.map(project => (
          <ListItemButton key={project.id} onClick={() => navigate(`/editContent/${project.id}`)}>
            <ListItem>
              {project.project} - {project.title}
            </ListItem>
          </ListItemButton>
        ))}
      </List>
    </div>
  )
}

export default EditProjectPage
