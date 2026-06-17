import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App userName = "Parthnil" profession = "Engineer" />
    <App userName = "Parthnil Makwana" profession = "Fullstack Engineer" />
   <App / >
   

  </StrictMode>,
)
