import type React from 'react'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from '@components/pageNotFound'

const RouteSwitch: React.FC = () => {
  return (
    <Routes>
      <Route key={location.pathname} path="/" element={<div>HOME</div>}></Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default RouteSwitch
