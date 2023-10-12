import type React from 'react'

import style from './Seenit.module.scss'

const Seenit: React.FC = () => {
  return (
    <div className={style.projectWrapper}>
      <div className={style.titleWrapper}>
        <h1 className={style.projectTitle}>SeenIt</h1>
      </div>
      <div>Mobile example</div>
      <div>Details one</div>
      <div>Desktop example</div>
      <div>Details two</div>
      <div>Links</div>
    </div>
  )
}

export default Seenit
