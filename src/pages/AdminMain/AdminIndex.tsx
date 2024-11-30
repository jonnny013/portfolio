import LoginIndex from '../AdminLogin/LoginIndex'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Divider } from '@mui/material'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../../contexts/userContext'

const AdminIndex = () => {
  const [{ userToken }] = useContext(UserContext)!
  const navigate = useNavigate()
  const user = userToken

  if (!user) return <LoginIndex />

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
          gap: 20,
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
            <ListItemText primary='Edit & Delete "About Me"' />
          </ListItemButton>
        </List>
      </div>
    </div>
  )
}

export default AdminIndex
