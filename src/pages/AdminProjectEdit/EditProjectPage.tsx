import { useQuery } from '@tanstack/react-query'
import { getProjects } from '../../services/projectsServices'
import type { Project } from '../../types/types'
import { List, ListItem } from '@mui/material'
import ListItemButton from '@mui/material/ListItemButton'
import LoadingScreen from '../../components/LoadingScreen'
import { Link } from 'react-router-dom'
import { useDarkModeValue } from '../../contexts/darkContext'

const EditProjectPage = () => {
  let projects: Project[] = []
  const { darkMode } = useDarkModeValue() as { darkMode: boolean }

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
          color: 'inherit',
          '& ul': { padding: 0 },
        }}
        className='marginAuto column centered aligned gap'
      >
        {projects.map(project => (
          <Link
            to={`/editContent/${project.id}`}
            key={project.id}
            className='removeLinkStyles oneHundred'
          >
            <ListItemButton sx={{ bgcolor: 'background.paper', width: '100%' }}>
              <ListItem
                className='marginAuto column centered aligned'
                style={{ color: darkMode ? 'white' : 'black' }}
              >
                {project.project} - {project.title}
              </ListItem>
            </ListItemButton>
          </Link>
        ))}
      </List>
    </div>
  )
}

export default EditProjectPage
