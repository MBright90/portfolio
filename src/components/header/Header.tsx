import type React from 'react'

import HeaderLink from './headerLink/HeaderLink'

import style from './Header.module.scss'

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <HeaderLink linkText={'HOME'} route="/" />
      <HeaderLink linkText={'PROJECTS'} route="/" />
      <HeaderLink linkText={'ABOUT ME'} route="/" />
      <HeaderLink linkText={'CONTACT'} route="/contact" />
    </header>
  )
}

export default Header
