import type React from 'react'
import { Link } from 'react-router-dom'

import style from './InternalLink.module.scss'

interface InternalLinkInterface {
  linkText: string
}

const InternalLink: React.FC<InternalLinkInterface> = ({ linkText }) => {
  return (
    // <div className={style.internalLink}>
    //   <div className={style.pulse} aria-hidden></div>
    <Link className={style.internalLink} to="/">{linkText}</Link>
    // </div>
  )
}

export default InternalLink
