import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { DarkModeProvider } from './contexts/darkContext.tsx'
import { UserProvider } from './contexts/userContext'
import { NotificationContextProvider } from './contexts/notificationContext.tsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <NotificationContextProvider>
      <UserProvider>
        <DarkModeProvider>
          <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
            <App />
          </Router>
        </DarkModeProvider>
      </UserProvider>
    </NotificationContextProvider>
  </QueryClientProvider>
)
