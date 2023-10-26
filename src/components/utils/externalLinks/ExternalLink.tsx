import type React from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import style from './ExternalLinks.module.scss'

const ExternalLinks: React.FC = () => {
  return (
    <div className={style.externalLinksContainer}>
      <a href="https://github.com/MBright90">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  )
}

export default ExternalLinks
