import type React from 'react'
import { useContext } from 'react'
import Header from '@components/header'
import ExternalLinks from '@components/utils/externalLinks/ExternalLink'
import TransitionIn from '@components/utils/transitionIn'
import { transitionContext } from '@contexts/transitionContext'

import ContactForm from './contactForm/ContactForm'

import style from './ContactPage.module.scss'

const ContactPage: React.FC = () => {
  const { transitionActive } = useContext(transitionContext)

  let transition: React.ReactNode | null = null
  if (transitionActive) {
    transition = <TransitionIn />
  }

  return (
    <>
      <Header disabled="/contact" />
      <main className={style.contactPageWrapper}>
        {transition}
        <ContactForm />
      </main>
      <ExternalLinks />
    </>
  )
}

export default ContactPage
