import type React from 'react'

import style from './Header.module.scss'

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <button className={style.headerBtn}></button>
    </header>
  )
}

export default Header
