import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../src/Components/Footer'
import Navbar from '../src/Components/Navbar'

function Root() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Root
