import type React from 'react'
import { useContext } from 'react'
import ExternalLinks from '@components/utils/externalLinks/ExternalLink'
import InternalLink from '@components/utils/internalLink'
import TransitionIn from '@components/utils/transitionIn'
import { transitionContext } from '@contexts/transitionContext'

import Marquee from './marquee/Marquee'

import style from './Homepage.module.scss'

const Homepage: React.FC = () => {
  const { transitionActive } = useContext(transitionContext)

  let transition: React.ReactNode | null = null
  if (transitionActive) {
    transition = <TransitionIn />
  }

  const itemsOne: string[] = [
    'A bit of a dick head',
    'Ambitious and dedicated guitarist who looks Korean',
    'Creating unintuitive user interfaces',
    'In need of knowledge'
  ]

  const itemsTwo: string[] = ['Typescript', 'React', 'Cypress', 'GitHub']

  return (
    <main>
      {transition}
      <div className={style.marqueeWrapper}>
        <Marquee position="top" itemArr={itemsOne} />
        <Marquee position="right" itemArr={itemsTwo} />
        <Marquee position="bottom" itemArr={itemsOne} />
        <Marquee position="left" itemArr={itemsTwo} />
      </div>
      <div className={style.homepageWrapper}>
        <h1 className={style.homepageTitle}>
          <span className={style.titleTag} aria-hidden>
            hi,
          </span>
          <span style={{ whiteSpace: 'nowrap' }}> I&apos;m Michael</span>
        </h1>
        <p className={style.homepageInfo}>
          This is all about my dominance, where I pretend I am some crazy talented front end
          developer but really I just sit around listening to guitar music and watching my cat derp.
        </p>
        <div className={style.internalLinksContainer}>
          <InternalLink linkText="PROJECTS" route="/projects" />
          <InternalLink linkText="ABOUT ME" route="/about-me" />
          <InternalLink linkText="CONTACT" route="/contact" />
        </div>
        <ExternalLinks />
      </div>
    </main>
  )
}

export default Homepage
