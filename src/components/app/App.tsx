import type React from 'react'
import { useContext } from 'react'
import Footer from '@components/footer'
import Header from '@components/header'
import ThemeContextProvider, { themeContext } from '@contexts/themeContext'
import RouteSwitch from '@routes/Routes'

import '@styles/theme.scss'
import style from './App.module.scss'

const App: React.FC = () => {
  const { theme } = useContext(themeContext)

  return (
    <ThemeContextProvider>
      <div className={`${style.appWrapper} ${theme}`}>
        <Header />
        <RouteSwitch />
        <Footer />
      </div>
    </ThemeContextProvider>
  )
}

export default App
