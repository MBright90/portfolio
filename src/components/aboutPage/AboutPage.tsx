import type React from 'react'
import { useContext } from 'react'
import Header from '@components/header/Header'
import ExternalLinks from '@components/utils/externalLinks/ExternalLink'
import TransitionIn from '@components/utils/transitionIn/TransitionIn'
import { transitionContext } from '@contexts/transitionContext/transitionContext'

import style from './AboutPage.module.scss'

const AboutPage: React.FC = () => {
  const { transitionActive } = useContext(transitionContext)

  let transition: React.ReactNode | null = null
  if (transitionActive) {
    transition = <TransitionIn />
  }

  return (
    <>
      <Header disabled="/about-me" />
      <main className={style.aboutPageWrapper}>
        {transition}
        <div>projects</div>
      </main>
      <ExternalLinks />
    </>
  )
}

export default AboutPage
