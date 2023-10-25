import type React from 'react'
import { BrowserRouter } from 'react-router-dom'
import TransitionContextProvider from '@contexts/transitionContext/transitionContext'
import RouteSwitch from '@routes/routes'

import style from './App.module.scss'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <TransitionContextProvider>
        <div className={style.appWrapper}>
          <RouteSwitch />
        </div>
      </TransitionContextProvider>
    </BrowserRouter>
  )
}

export default App
