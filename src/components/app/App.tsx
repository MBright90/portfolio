import type React from 'react'
import RouteSwitch from 'src/routes'

import style from './App.module.scss'

const App: React.FC = () => {
  return (
    <div className={style.appWrapper}>
      <header>Put header component in here</header>
      <RouteSwitch />
      <footer>Put Footer component here</footer>
    </div>
  )
}

export default App
