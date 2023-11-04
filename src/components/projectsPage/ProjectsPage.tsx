import type React from 'react'
import { useContext } from 'react'
import Header from '@components/header/Header'
import ExternalLinks from '@components/utils/externalLinks/ExternalLink'
import TransitionIn from '@components/utils/transitionIn/TransitionIn'
import { transitionContext } from '@contexts/transitionContext/transitionContext'

import style from './ProjectsPage.module.scss'

const ProjectsPage: React.FC = () => {
  const { transitionActive } = useContext(transitionContext)

  let transition: React.ReactNode | null = null
  if (transitionActive) {
    transition = <TransitionIn />
  }

  return (
    <>
      <Header disabled="/projects" />
      <main className={style.projectsPageWrapper}>
        {transition}
        <div>projects</div>
      </main>
      <ExternalLinks />
    </>
  )
}

export default ProjectsPage
