import type React from 'react'
import { mainBg } from '@assets/images'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Marquee from './marquee/Marquee'

import style from './Homepage.module.scss'

const Homepage: React.FC = () => {
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
      <div className={style.homepageWrapper} style={{ backgroundImage: `url("${mainBg}")` }}>
        <h1 className={style.homepageTitle}>
          <span className={style.hi} aria-hidden>
            hi,
          </span>
          <span style={{ whiteSpace: 'nowrap' }}> I&apos;m Michael</span>
        </h1>
        <p className={style.homepageInfo}>This is all about my dominance</p>
        <div className={style.externalLinks}>
          <a href="https://github.com/MBright90">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </main>
  )
}

export default Homepage
