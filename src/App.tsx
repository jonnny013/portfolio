import type React from 'react'
import { materialUIThemeDark, materialUIThemeLight } from './themes/materialUI'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import './themes/App.css'
import HeaderIndex from './components/Header/HeaderIndex'
import { useContext } from 'react'
import DarkModeContext from './contexts/darkContext'
import AppRoutes from './Routes'



const App: React.FC = () => {
  const darkMode = useContext(DarkModeContext)?.[0]?.darkMode || false

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
