import type React from 'react'
import { useContext } from 'react'
import Header from '@components/header'
import TransitionIn from '@components/utils/transitionIn'
import { transitionContext } from '@contexts/transitionContext'

import style from './ContactPage.module.scss'

const ContactPage: React.FC = () => {
  const { transitionActive } = useContext(transitionContext)

  let transition: React.ReactNode | null = null
  if (transitionActive) {
    transition = <TransitionIn />
  }

  return (
    <>
      <Header />
      <main className={style.contactPageWrapper}>
        {transition}
        <form></form>
      </main>
    </>
  )
}

export default ContactPage
