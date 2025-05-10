import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './Routes/routes'
import { ContextStorage } from './contexts/globalContexts'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ContextStorage>
      <Router />
    </ContextStorage>
    </BrowserRouter>
  </StrictMode>,
)
