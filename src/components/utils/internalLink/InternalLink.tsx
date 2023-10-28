import type React from 'react'
import { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { transitionContext } from '@contexts/transitionContext/transitionContext'

import style from './InternalLink.module.scss'

interface InternalLinkInterface {
  linkText: string
  route: string
}

const InternalLink: React.FC<InternalLinkInterface> = ({ linkText, route }) => {
  const { setTransitionStatus } = useContext(transitionContext)
  const navigate = useNavigate()
  const transitionOutRef = useRef<HTMLDivElement | null>(null)

  const followRoute = (): void => {
    transitionOutRef.current?.removeEventListener('animationend', followRoute)
    setTransitionStatus(true)
    navigate(route)
  }

  const transitionToPage = (): void => {
    transitionOutRef.current?.addEventListener('animationend', followRoute)
    transitionOutRef.current?.classList.add(style.active)
  }

  return (
    <div className={style.linkWrapper}>
      <button className={style.internalLink} onClick={transitionToPage}>
        {linkText}
      </button>
      <div className={style.transitionOut} ref={transitionOutRef}></div>
    </div>
  )
}

export default InternalLink
