import React from 'react'
import ScrollToTop from '../utils/ScrollToTop'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
        <ScrollToTop />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout