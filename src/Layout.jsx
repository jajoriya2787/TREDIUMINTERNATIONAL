import React from 'react'
import Header from './Commone/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Commone/Footer'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout