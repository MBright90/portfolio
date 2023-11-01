import type React from 'react'

import HeaderLink from './headerLink/HeaderLink'

import style from './Header.module.scss'

interface HeaderProps {
  disabled: '/' | '/projects' | 'about-me' | '/contact'
}

const Header: React.FC<HeaderProps> = ({ disabled }) => {
  return (
    <header className={style.header}>
      <HeaderLink linkText={'HOME'} route="/" disabled={disabled} />
      <HeaderLink linkText={'PROJECTS'} route="/" disabled={disabled} />
      <HeaderLink linkText={'ABOUT ME'} route="/" disabled={disabled} />
      <HeaderLink linkText={'CONTACT'} route="/contact" disabled={disabled} />
    </header>
  )
}

export default Header
