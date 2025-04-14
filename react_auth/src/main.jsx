import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { AppRouter } from './router/AppRouter.jsx'
import { AuthContext } from './components/store/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext> <AppRouter/></AuthContext>
   
  </StrictMode>,
)
