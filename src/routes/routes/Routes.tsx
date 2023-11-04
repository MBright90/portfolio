import type React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutPage from '@components/aboutPage/AboutPage'
import ContactPage from '@components/contactPage'
import Homepage from '@components/homepage'
import PageNotFound from '@components/pageNotFound'
import ProjectsPage from '@components/projectsPage/ProjectsPage'

const RouteSwitch: React.FC = () => {
  return (
    <Routes>
      <Route key={location.pathname} path="/" element={<Homepage />} />
      <Route key={location.pathname} path="/contact" element={<ContactPage />} />
      <Route key={location.pathname} path="/about-me" element={<AboutPage />} />
      <Route key={location.pathname} path="/projects" element={<ProjectsPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default RouteSwitch
