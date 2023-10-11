import type React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import style from './Navbar.module.scss'

const Navbar: React.FC = () => {
  const [dropActive, setDropActive] = useState<boolean>(false)

  const toggleNavMenu = (): void => {
    setDropActive(!dropActive)
  }

  return (
    <nav className={style.navbar}>
      <div
        className={style.navToggle}
        role="button"
        onClick={toggleNavMenu}
        aria-label="Toggle navigation"
      >
        Tog
      </div>
      <ul className={style.navLinkList}>
        <Link to="/home" className={style.navbarLink}>
          HOME
        </Link>
        <Link to="/" className={style.navbarLink}>
          PROJECTS
        </Link>
        <Link to="/" className={style.navbarLink}>
          ABOUT ME
        </Link>
        <Link to="/" className={style.navbarLink}>
          SOMETHING ELSE
        </Link>
        <Link to="/" className={style.navbarLink}>
          CONTACT
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
