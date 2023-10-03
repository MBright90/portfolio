import type React from 'react'
import { Link } from 'react-router-dom'

import '@styles/theme.scss'
import style from './Homepage.module.scss'

const Homepage: React.FC = () => {
  return (
    <main>
      <div className={style.marqueeWrapper}>
        <div className={`${style.marquee} ${style.marqueeTop}`}></div>
        <div className={`${style.marquee} ${style.marqueeRight}`}></div>
        <div className={`${style.marquee} ${style.marqueeBottom}`}></div>
        <div className={`${style.marquee} ${style.marqueeLeft}`}></div>
      </div>
      <div className={style.linkWrapper}>
        <div className={style.homepageTitle} role="image">
          <p className={style.homepageTitlePara}>I&apos;m Michael</p>
        </div>
        <Link to="/" className={`${style.homepageLink} ${style.linkOne} dark`}>
          PROJECTS
        </Link>
        <Link to="/" className={`${style.homepageLink} ${style.linkTwo} light`}>
          ABOUT ME
        </Link>
        <Link to="/" className={`${style.homepageLink} ${style.linkThree} dark`}>
          CONTACT
        </Link>
        <Link to="/" className={`${style.homepageLink} ${style.linkFour} light`}>
          SOMETHING ELSE
        </Link>
      </div>
    </main>
  )
}

export default Homepage
