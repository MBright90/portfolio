import type React from 'react'
import { seenitLogin, seenitResponsive } from '@assets/images/index'

import style from './Seenit.module.scss'

const Seenit: React.FC = () => {
  return (
    <div className={style.projectWrapper}>
      <div className={style.titleWrapper}>
        <h1 className={style.projectTitle}>SeenIt</h1>
      </div>
      <div className={style.exampleWrapper}>
        <img
          className={style.responsiveExamples}
          src={seenitResponsive}
          alt="Responsive examples of seenIt"
        />
        <div className={style.loginExamples}>
          <div className={style.loginDetails}>
            <h3>Firebase Auth</h3>
            <p>
              Allows log in with your usual google account, meaning there is no need to sign up.
              After your initial log in, you can choose to customize your username and picture to
              whatever you desire. Once logged in, the site uses your unique user ID to track your
              stats, posts and any comments you make.
            </p>
          </div>
          <img
            className={style.loginExampleImg}
            src={seenitLogin}
            alt="Example of Seenit's login screen"
          />
        </div>
      </div>
    </div>
  )
}

export default Seenit

/* <div className={style.mobileExampleWrapper}>Mobile example</div>

<div className={`${style.desktopExample} ${style.desktopOne}`}>Desktop example one</div>
<div className={`${style.desktopExample} ${style.desktopTwo}`}>Desktop example two</div>

<div className={`${style.projectDetails} ${style.detailsOne}`}>Details one</div>
<div className={`${style.projectDetails} ${style.detailsTwo}`}>Details two</div>

<div className={style.projectLinks}>Links</div> */
