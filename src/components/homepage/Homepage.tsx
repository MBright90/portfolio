import type React from 'react'
import { type ReactNode, useContext } from 'react'
import { Link } from 'react-router-dom'
import { themeContext } from '@contexts/themeContext'

import '@styles/theme.scss'
import style from './Homepage.module.scss'

const Homepage: React.FC = () => {
  const { theme } = useContext(themeContext)

  const marqueeTextLi: ReactNode = (
    <ul>
      <li className={style.marqueeText}>Ambitious</li>
      <li aria-hidden="true">
        <span className={style.marqueeBullet}>*</span>
      </li>
      <li className={style.marqueeText}>Dedicated</li>
      <li>
        <span className={style.marqueeBullet}>*</span>
      </li>
      <li className={style.marqueeText}>Self-taught</li>
      <li>
        <span className={style.marqueeBullet}>*</span>
      </li>
      <li className={style.marqueeText}>Inquisitive</li>
      <li>
        <span className={style.marqueeBullet}>*</span>
      </li>
    </ul>
  )

  return (
    <main>
      <div className={style.marqueeWrapper}>
        <div className={`${style.marquee} ${style.marqueeTop} ${theme}`}>{marqueeTextLi}</div>
        <div className={`${style.marquee} ${style.marqueeRight} ${theme}`}></div>
        <div className={`${style.marquee} ${style.marqueeBottom} ${theme}`}></div>
        <div className={`${style.marquee} ${style.marqueeLeft} ${theme}`}></div>
      </div>
      <div className={style.linkWrapper}>
        <div className={style.homepageTitle} role="image">
          <p className={style.homepageTitlePara}>I&apos;m Michael</p>
        </div>
        <Link to="/" className={`${style.homepageLink} ${style.linkOne} ${theme}`}>
          PROJECTS
        </Link>
        <Link to="/" className={`${style.homepageLink} ${style.linkTwo} ${theme}`}>
          ABOUT ME
        </Link>
        <Link to="/" className={`${style.homepageLink} ${style.linkThree} ${theme}`}>
          CONTACT
        </Link>
        <Link to="/" className={`${style.homepageLink} ${style.linkFour} ${theme}`}>
          SOMETHING ELSE
        </Link>
      </div>
    </main>
  )
}

export default Homepage
