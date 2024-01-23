import LoginIndex from './LoginIndex'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Divider } from '@mui/material'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { useNavigate } from 'react-router-dom'

const AdminIndex = () => {
  const navigate = useNavigate()
  const user = true

  if (!user) return (
    <LoginIndex />
  )

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        margin: 'auto',
      }}
    >
      <h2>What would you like to do?</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <List
          sx={{
            '& .MuiTypography-root': {
              fontSize: 18,
              fontWeight: 'bold',
            },
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
          }}
          component='ul'
          aria-labelledby='nested-list-subheader'
        >
          <ListItemButton onClick={() => navigate('/addContent')}>
            <ListItemIcon>
              <ControlPointIcon />
            </ListItemIcon>
            <ListItemText primary='Add a project' />
          </ListItemButton>
          <Divider variant='middle' component='li' />
          <ListItemButton onClick={() => navigate('/editContent')}>
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText primary='Edit a project' />
          </ListItemButton>
          <Divider variant='middle' component='li' />
          <ListItemButton onClick={() => navigate('/deleteContent')}>
            <ListItemIcon>
              <DeleteForeverIcon />
            </ListItemIcon>
            <ListItemText primary='Delete a project' />
          </ListItemButton>
        </List>
        <List
          sx={{
            '& .MuiTypography-root': {
              fontSize: 18,
              fontWeight: 'bold',
            },
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
          }}
          component='ul'
          aria-labelledby='nested-list-subheader'
        >
          <ListItemButton onClick={() => navigate('/aboutMeAddNew')}>
            <ListItemIcon>
              <ControlPointIcon />
            </ListItemIcon>
            <ListItemText primary='Add new "About Me"' />
          </ListItemButton>
          <Divider variant='middle' component='li' />
          <ListItemButton onClick={() => navigate('/aboutMeAdminPage')}>
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText primary='Edit "About Me"' />
          </ListItemButton>
        </List>
      </div>
    </div>
  )
}

export default AdminIndex