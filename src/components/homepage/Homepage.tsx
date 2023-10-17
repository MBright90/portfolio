import type React from 'react'

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
      <div className={style.homepageWrapper}>
        <div className={style.homepageInfo}>
          <h1 className={style.homepageTitle}>
            <span aria-hidden>hi</span>, I&apos;m Michael
          </h1>
        </div>
      </div>
    </main>
  )
}

export default Homepage
