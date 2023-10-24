import type React from 'react'
import { createPortal } from 'react-dom'
import TransitionIn from '@components/utils/transitionIn'
import useTransition, { type TransitionHookReturnType } from '@hooks/useTransition'

import style from './ContactPage.module.scss'

const ContactPage: React.FC = () => {
  const { transitionBool, removeTransition }: TransitionHookReturnType = useTransition()

  const transitionIn = (): React.ReactNode | null => {
    if (transitionBool as boolean) {
      removeTransition()
      return createPortal(<TransitionIn />, document.querySelector('#root')!)
    }
    return null
  }

  return (
    <main className={style.contactPageWrapper}>
      {transitionIn()}
      <form></form>
    </main>
  )
}

export default ContactPage
