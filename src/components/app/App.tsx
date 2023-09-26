import type React from 'react'

import style from './App.module.scss'

const App: React.FC = () => {
  return (
    <div className={style.appWrapper}>
      <header>Put header component in here</header>
      <main>Put main/route switch component here</main>
      <footer>Put Footer component here</footer>
    </div>
  )
}

export default App
