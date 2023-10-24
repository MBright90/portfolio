import type React from 'react'
import { useRef } from 'react'
import { createPortal } from 'react-dom'

import style from './TransitionIn.module.scss'

const TransitionIn: React.FC = () => {
  const transitionDivRef = useRef<HTMLDivElement | null>(null)

  return createPortal(
    <div className={style.transitionIn} ref={transitionDivRef}></div>,
    document.querySelector('body')! as Element
  )
}

export default TransitionIn
