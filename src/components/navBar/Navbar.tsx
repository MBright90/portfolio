import type React from 'react'
import { Link } from 'react-router-dom'

import style from './Navbar.module.scss'

const Navbar: React.FC = () => {
  return (
    <nav className={style.navbar}>
      <Link to="/" className={style.navbarLink}>
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
    </nav>
  )
}

export default Navbar
