import { useEffect, useState } from "react";
import { ThemeProvider } from "./Context/useTheme";
import Card from "./Components/Card";
import ThemeBtn from "./Components/ThemeBtn";
function App() {
 
const [themeMode, setThemeMode] = useState('light')

const darkMode = () =>{
    setThemeMode('dark')
}
const lightMode = () =>{
    setThemeMode('light')
}

useEffect(()=>{
    const html = document.querySelector('html')
    html.classList.remove('light', 'dark')
    html.classList.add(themeMode)
},[themeMode])
  return (
    <>
    <ThemeProvider value={{themeMode, darkMode, lightMode}}>
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <ThemeBtn />
    <Card />
    </div>
    </ThemeProvider>
    </>
  )
}

export default App
