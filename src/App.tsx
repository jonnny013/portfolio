import type React from 'react'
import { materialUIThemeDark, materialUIThemeLight } from './themes/materialUI'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import './themes/App.css'
import HeaderIndex from './components/Header/HeaderIndex'
import { useContext, useEffect } from 'react'
import DarkModeContext from './contexts/darkContext'
import AppRoutes from './Routes'



const App: React.FC = () => {
  const [{ darkMode }, dispatch] = useContext(DarkModeContext)!
 
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    if (darkModeMediaQuery.matches) {
      dispatch({ type: 'ClIENT_PREFERENCE' })
    }
  }, [])

  return (
    <ThemeProvider theme={darkMode ? materialUIThemeDark : materialUIThemeLight}>
      <CssBaseline />
      <div>
        <HeaderIndex />
        <AppRoutes />
      </div>
    </ThemeProvider>
  )
}

export default App
