import React from 'react'
import Navber from '../Navber'
import NavHeader from '../NavHeader'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
const RootLayout = () => {
  return (
    <>
<Navber/>
    <NavHeader/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout