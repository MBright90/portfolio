import type React from 'react'

import style from './InternalLink.module.scss'

interface InternalLinkInterface {
  linkText: string
  route: string
}

const InternalLink: React.FC<InternalLinkInterface> = ({ linkText, route }) => {
  const transitionToPage = (route: string) => {
    // Add css transition here
    // COLOR COVERS SCREEN BEFORE TRANSITIONING TO NEW PAGE
  }

  return <button className={style.internalLink}>{linkText}</button>
}

export default InternalLink
