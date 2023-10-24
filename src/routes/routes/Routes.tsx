import type React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactPage from '@components/contactPage'
import Homepage from '@components/homepage'
import PageNotFound from '@components/pageNotFound'

const RouteSwitch: React.FC = () => {
  return (
    <Routes>
      <Route key={location.pathname} path="/" element={<Homepage />} />
      <Route key={location.pathname} path="/contact" element={<ContactPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default RouteSwitch
