import React, { useContext, useEffect, useState } from 'react'
import Navbar from '@components/navBar/Navbar'
import Seenit from '@components/projects/seenit/Seenit'
import { themeContext } from '@contexts/themeContext/ThemeContext'

import style from './ProjectsPage.module.scss'

const ProjectsPage: React.FC = () => {
  const { theme } = useContext(themeContext)
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0)

  useEffect(() => {
    // console.log(currentProjectIndex)
  }, [currentProjectIndex])

  const projectsArr: React.ReactNode[] = [
    <Seenit key={0} />,
    <div key={1}>1</div>,
    <div key={2}>2</div>
  ]

  const changeProject = (indexChange: number): void => {
    let newIndex = currentProjectIndex + indexChange
    // Check new index is within range
    if (newIndex < 0) newIndex = projectsArr.length - 1
    else if (newIndex >= projectsArr.length) newIndex = 0

    setCurrentProjectIndex(newIndex)
  }

  return (
    <React.Fragment>
      <main className={`${style.projectsMain} ${theme}`}>
        {projectsArr[currentProjectIndex]}
        <div className={`${theme} ${style.projectChangeController}`} role="nav">
          <div className={style.rotateProjects}>
            <button
              className={style.rotateProjectsBtn}
              onClick={() => {
                changeProject(-1)
              }}
              aria-label="Previous project"
            >
              {'>>'}
            </button>
          </div>
          <div className={style.rotateProjects}>
            <button
              className={style.rotateProjectsBtn}
              onClick={() => {
                changeProject(1)
              }}
              aria-label="Next project"
            >
              {'>>'}
            </button>
          </div>
        </div>
      </main>
      <Navbar />
    </React.Fragment>
  )
}

export default ProjectsPage
