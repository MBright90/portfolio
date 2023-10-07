import type React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { themeContext } from '@contexts/themeContext'

import Marquee from './marquee/Marquee'

import '@styles/theme.scss'
import style from './Homepage.module.scss'

const Homepage: React.FC = () => {
  const { theme } = useContext(themeContext)

  const itemsOne: string[] = [
    'A11y conscientious',
    'Ambitious and dedicated self-taught front end developer',
    'Creating intuitive user interfaces',
    'Inquisitive'
  ]

  const itemsTwo: string[] = ['Typescript', 'React', 'Cypress', 'GitHub']

  return (
    <main>
      <div className={style.marqueeWrapper}>
        <Marquee position="top" itemArr={itemsOne} />
        <Marquee position="right" itemArr={itemsTwo} />
        <Marquee position="bottom" itemArr={itemsOne} />
        <Marquee position="left" itemArr={itemsTwo} />
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
