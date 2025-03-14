import createTheme from '@mui/material/styles/createTheme'

export const materialUIThemeDark = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1c1c3f',
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: 'inherit',
          textDecoration: 'none',
        },
      },
    },
    MuiCard: {
      variants: [],
    },
  },
})

export const materialUIThemeLight = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#eeeee2',
      paper: '#dbd3d3',
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: 'inherit',
          textDecoration: 'none',
        },
      },
    },
    MuiCard: {
      variants: [],
    },
  },
})
