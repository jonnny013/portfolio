import React from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Link, useLocation } from 'react-router-dom'
import themes from '../../../themes/themes'
import SettingsMenu from './SettingsMenu'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

interface LinkTabProps {
  label?: string
  to?: string
  selected?: boolean
}

function LinkTab(props: LinkTabProps) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Tab
      component={Link}
      to={props.to || '/'}
      style={{
        fontSize: themes.fonts.standardFontSize,
        ...(isMobile && { fontSize: themes.fonts.mobileFontSize }),
      }}
      aria-current={props.selected && 'page'}
      {...props}
    />
  )
}

const NavTabs = () => {
  const location = useLocation()
  const [value, setValue] = React.useState(0)

  React.useEffect(() => {
    const paths = ['/', '/about', '/contact']
    const currentIndex = paths.findIndex(path => path === location.pathname)
    setValue(currentIndex !== -1 ? currentIndex : 3)
  }, [location.pathname])

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ typography: 'body1' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label='Navigation'
        textColor='inherit'
        indicatorColor='primary'
        sx={{
          '& .MuiTabs-indicator': { backgroundColor: themes.colors.headerColor },
        }}
        role='navigation'
      >
        <LinkTab label='Projects' to='/' selected={value === 0} />
        <LinkTab label='About Me' to='/about' selected={value === 1} />
        <LinkTab label='Contact' to='/contact' selected={value === 2} />
        <SettingsMenu />
      </Tabs>
    </Box>
  )
}

export default NavTabs
