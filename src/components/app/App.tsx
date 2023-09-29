import type React from 'react'
import Footer from '@components/footer/Footer'
import Header from '@components/header/Header'
import RouteSwitch from 'src/routes'

import style from './App.module.scss'

const App: React.FC = () => {
  return (
    <div className={style.appWrapper}>
      <Header />
      <RouteSwitch />
      <Footer />
    </div>
  )
}

export default App
