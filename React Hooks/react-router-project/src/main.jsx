import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root.jsx'
import Github, { GithubInfo } from './components/Github.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import User, { userInfoLoader } from './components/User.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children : [
      {
        path : "",
        element : <Home />
      },
      {
        path : "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        loader : GithubInfo,
        path: "github",
        element: <Github />
      },
      {
        loader: userInfoLoader,
        path: "user/:userid",
        element: <User />
      }
    ]

  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
