import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import User from './Components/User.jsx'
import UserContextProvider from "./Context/UserContextProvider"


const router = createBrowserRouter([
  {
    path:"/",
    element:<App />
  },
  {
    path:"/User",
    element:<User/>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>

    <RouterProvider router = {router} />
    </UserContextProvider>
    
  </StrictMode>,
)
