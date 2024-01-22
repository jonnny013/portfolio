import LoginIndex from './LoginIndex'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Divider } from '@mui/material'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

const AdminIndex = () => {
  const user = true

  if (!user) return (
    <LoginIndex />
  )

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h2>What would you like to do?</h2>
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
        <ListItemButton>
          <ListItemIcon>
            <ControlPointIcon />
          </ListItemIcon>
          <ListItemText primary='Add a project' />
        </ListItemButton>
        <Divider variant='middle' component='li' />

        <ListItemButton>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText primary='Edit a project' />
        </ListItemButton>
        <Divider variant='middle' component='li' />

        <ListItemButton>
          <ListItemIcon>
            <DeleteForeverIcon />
          </ListItemIcon>
          <ListItemText primary='Delete a project' />
        </ListItemButton>
      </List>
    </div>
  )
}

export default AdminIndex