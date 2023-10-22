import type React from 'react'
import { Link } from 'react-router-dom'

import style from './InternalLink.module.scss'

interface InternalLinkInterface {
  linkText: string
}

const InternalLink: React.FC<InternalLinkInterface> = ({ linkText }) => {
  return (
    <Link className={style.internalLink} to="/">
      {linkText}
    </Link>
  )
}

export default InternalLink
