import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { DarkModeProvider } from './contexts/darkContext.tsx'
import {UserProvider} from './contexts/userContext'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <UserProvider>
      <DarkModeProvider>
        <Router>
          <App />
        </Router>
      </DarkModeProvider>
    </UserProvider>
  </QueryClientProvider>
)
