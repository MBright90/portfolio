import type React from 'react'

import style from './PageNotFound.module.scss'

const PageNotFound: React.FC = () => {
  return (
    <div className={style.pageNotFoundContainer}>
      <p className={style.pageNotFoundPara}>
        Page Not Found<span className={style.flashing} aria-hidden="true"></span>
      </p>
    </div>
  )
}

export default PageNotFound
