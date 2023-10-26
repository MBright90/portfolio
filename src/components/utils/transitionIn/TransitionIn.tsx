import type React from 'react'
import { useContext, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { transitionContext } from '@contexts/transitionContext/transitionContext'

import style from './TransitionIn.module.scss'

const TransitionIn: React.FC = () => {
  const transitionDivRef = useRef<HTMLDivElement | null>(null)
  const { setTransitionStatus } = useContext(transitionContext)

  useEffect(() => {
    if (transitionDivRef.current != null) {
      transitionDivRef.current.addEventListener('animationend', () => {
        if (transitionDivRef.current != null) {
          transitionDivRef.current.style.display = 'none'
          setTransitionStatus(false)
        }
      })
    }
  }, [transitionDivRef.current])

  transitionDivRef.current?.addEventListener('transitionend', () => {
    if (transitionDivRef.current != null) transitionDivRef.current.style.display = 'none'
  })

  return createPortal(
    <div className={style.transitionIn} ref={transitionDivRef}></div>,
    document.querySelector('body')! as Element
  )
}

export default TransitionIn
