import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'

function App() {
  const prevTheme = localStorage.getItem("prevTheme");
  const [themeMode,setThememode] = useState(prevTheme ? prevTheme : "light")

  const lightTheme = () => {
    setThememode("light")
  }

  const darkTheme = () => {
    setThememode("dark")
  }

  //Actual Change
  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(themeMode);
    localStorage.setItem("prevTheme",themeMode);
  },[themeMode])

  return (

    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  {/* Theme Button */}
                  <ThemeButton />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  {/* Card */}
                  <Card />
              </div>
          </div>
        </div>
    </ThemeProvider>
    
  )
}

export default App
