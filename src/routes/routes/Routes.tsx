import type React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '@components/homepage'
import PageNotFound from '@components/pageNotFound'
import ProjectsPage from '@components/projectsPage/ProjectsPage'

const RouteSwitch: React.FC = () => {
  return (
    <Routes>
      <Route key={location.pathname} path="/" element={<ProjectsPage />} />
      <Route key={location.pathname} path="/home" element={<Homepage />} />
      <Route key={location.pathname} path="/projects" element={<ProjectsPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default RouteSwitch
