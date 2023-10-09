import React from 'react'
import Navbar from '@components/navBar/Navbar'

import style from './ProjectsPage.module.scss'

const ProjectsPage: React.FC = () => {
  return (
    <React.Fragment>
      <main className={style.projectsMain}></main>
      <Navbar />
    </React.Fragment>
  )
}

export default ProjectsPage
