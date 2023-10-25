import type React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RouteSwitch from '@routes/routes'

import style from './App.module.scss'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={style.appWrapper}>
        <RouteSwitch />
      </div>
    </BrowserRouter>
  )
}

export default App
