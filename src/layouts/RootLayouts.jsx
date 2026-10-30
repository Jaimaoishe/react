import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { Container } from 'lucide-react'






const RootLayouts = () => {
  return (
    <>
 <Header/>
 <Outlet/>
 <Footer/>
 
    </>
    
  )
}

export default RootLayouts
