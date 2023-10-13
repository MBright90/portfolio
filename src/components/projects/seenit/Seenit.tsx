import type React from 'react'

import style from './Seenit.module.scss'

const Seenit: React.FC = () => {
  return (
    <div className={style.projectWrapper}>
      <div className={style.titleWrapper}>
        <h1 className={style.projectTitle}>SeenIt</h1>
      </div>

      <div className={style.mobileExampleWrapper}>Mobile example</div>

      <div className={`${style.desktopExample} ${style.desktopOne}`}>Desktop example one</div>
      <div className={`${style.desktopExample} ${style.desktopTwo}`}>Desktop example two</div>

      <div className={`${style.projectDetails} ${style.detailsOne}`}>Details one</div>
      <div className={`${style.projectDetails} ${style.detailsTwo}`}>Details two</div>

      <div className={style.projectLinks}>Links</div>
    </div>
  )
}

export default Seenit
