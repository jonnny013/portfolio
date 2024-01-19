import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import SettingsIcon from '@mui/icons-material/Settings'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import themes from '../../themes/themes'
import DarkModeSwitch from './DarkModeSwitch'

const SettingsMenu = () => {
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
        sx={{
          '& .MuiMenuItem-root': {
            fontSize: themes.fonts.buttonFontSize,
          },
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose()
            navigate('/admin')
          }}
        >
          Admin
        </MenuItem>
        <MenuItem>
          <DarkModeSwitch />
        </MenuItem>
        <MenuItem onClick={handleClose}>Language</MenuItem>
      </Menu>
    </>
  )
}

export default SettingsMenu
