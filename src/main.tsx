import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { DarkModeProvider } from './contexts/darkContext.tsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <DarkModeProvider>
      <Router>
        <App />
      </Router>
    </DarkModeProvider>
  </QueryClientProvider>
)
