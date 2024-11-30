import { useQuery } from '@tanstack/react-query'
import { getProjects } from '../../services/projectsServices'
import type { Project } from '../../types/types'
import { List, ListItem } from '@mui/material'
import ListItemButton from '@mui/material/ListItemButton'
import { useNavigate } from 'react-router-dom'
import LoadingScreen from '../../components/LoadingScreen'

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
    <div className='column centered aligned'>
      <h1>Which project would you like to edit?</h1>
      <List
        sx={{
          width: '90%',
          maxWidth: 600,
          fontSize: 20,
          '& ul': { padding: 0 },
        }}
        className='marginAuto column centered aligned gap'
      >
        {projects.map(project => (
          <ListItemButton
            key={project.id}
            onClick={() => navigate(`/editContent/${project.id}`)}
            sx={{ bgcolor: 'background.paper', width: '100%' }}
          >
            <ListItem className='marginAuto column centered aligned'>
              {project.project} - {project.title}
            </ListItem>
          </ListItemButton>
        ))}
      </List>
    </div>
  )
}

export default EditProjectPage
