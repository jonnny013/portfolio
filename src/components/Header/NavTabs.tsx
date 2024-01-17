import React from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Link, useLocation } from 'react-router-dom'

interface LinkTabProps {
  label?: string
  to?: string
  selected?: boolean
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component={Link}
      to={props.to || '/'}
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
    setValue(currentIndex !== -1 ? currentIndex : 0)
  }, [location.pathname])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label='nav tabs example'
        role='navigation'
      >
        <LinkTab label='Projects' to='/' selected={value === 0} />
        <LinkTab label='About Me' to='/about' selected={value === 1} />
        <LinkTab label='Contact' to='/contact' selected={value === 2} />
      </Tabs>
    </Box>
  )
}

export default NavTabs