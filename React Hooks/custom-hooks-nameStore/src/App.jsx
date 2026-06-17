import useLocalName from "./hooks/setName"

import './App.css'

function App() {

const [name, setName] = useLocalName("username", "")


  return (
    <>
    <input type="text" 
  value={name}
    onChange={(e)=> setName(e.target.value)}
    
    />
    <h1>hello {name}</h1>
    </>
  )
}

export default App
