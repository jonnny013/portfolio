import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import SettingsIcon from '@mui/icons-material/Settings'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SettingsTab = () => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        id='settings-menu'
        aria-controls={open ? 'settings-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color='inherit'
      >
        <SettingsIcon />
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'settings-menu',
        }}
      >
        <MenuItem onClick={handleClose}>Light/Dark</MenuItem>
        <MenuItem onClick={handleClose}>Language</MenuItem>
        <MenuItem onClick={() => {handleClose(); navigate('/admin') }}>Admin</MenuItem>
      </Menu>
    </>
  )
}

export default SettingsTab
