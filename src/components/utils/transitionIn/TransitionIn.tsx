import type React from 'react'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import style from './TransitionIn.module.scss'

const TransitionIn: React.FC = () => {
  const transitionDivRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (transitionDivRef.current != null) {
      transitionDivRef.current.addEventListener('animationend', () => {
        if (transitionDivRef.current != null) transitionDivRef.current.style.display = 'none'
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
