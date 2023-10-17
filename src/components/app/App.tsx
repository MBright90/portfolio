import type React from 'react'
import { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import ThemeContextProvider, { themeContext } from '@contexts/themeContext'
import RouteSwitch from '@routes/routes'

import style from './App.module.scss'

const App: React.FC = () => {
  const { theme } = useContext(themeContext)

  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <div className={`${style.appWrapper} ${theme}`}>
          <RouteSwitch />
        </div>
      </BrowserRouter>
    </ThemeContextProvider>
  )
}

export default App
