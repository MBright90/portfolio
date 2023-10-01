import type React from 'react'
import { Link } from 'react-router-dom'

import style from './Homepage.module.scss'

const Homepage: React.FC = () => {
  return (
    <main>
      <div className={style.linkWrapper}>
        <h1 className={style.homepageTitle}>I&apos;m Michael</h1>
        <Link to="/" className={`${style.homepageLink} ${style.linkOne}`}>
          Link one
        </Link>
        <Link to="/" className={`${style.homepageLink} ${style.linkTwo}`}>
          Link two
        </Link>
        <Link to="/" className={`${style.homepageLink} ${style.linkThree}`}>
          Link three
        </Link>
        <Link to="/" className={`${style.homepageLink} ${style.linkFour}`}>
          Link four
        </Link>
      </div>
    </main>
  )
}

export default Homepage
