import { Footer } from 'components/Footer'
import { HomePage } from 'pages/Home'
import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { InnerWrapper } from './InnerWrapper'
import { OuterWrapper } from './OuterWrapper'

export function AppWrapper() {
  const location = useLocation()

  const isMapPage: boolean = location.pathname === '/map' ? true : false

  return (
    <OuterWrapper>
      <InnerWrapper isPageMap={isMapPage}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </InnerWrapper>
      <Footer />
    </OuterWrapper>
  )
}
