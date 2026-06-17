import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(1)


  
 

  const increase = () =>{
    setCount(count + 1)
  }
  const decrease = () =>{
    setCount(count - 1)
  }

  return (
    <>
    
     <h1>Count is {count}</h1>
     <button onClick = {increase}>increase</button>
     <button onClick = {decrease} disabled = {count === 0} >decrease</button>
    </>
  )
}

export default App
