import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function hello(){
  return (
    <h1>hello Parthnil </h1>
  )
}
let user = "parthnil"

let newElement = React.createElement(
  'a',
  {
    href : "https://google.com",
    target : '_blank'
  },
  'click me',
  user


)

createRoot(document.getElementById('root')).render(
 
  <App />

  
)
