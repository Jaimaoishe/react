import React from 'react'
import Banner from '../layouts/Banner'
import Shipping from '../layouts/Shipping'
import Products from '../layouts/Products'
import NewArrival from '../layouts/NewArrival'
import Bestsellers from '../layouts/Bestsellers'
import Phone from '../layouts/Phone'

const Home = () => {
  return (
   <>
   <Banner/>
   <Shipping/>
   <Products/>
   <NewArrival/>
   <Bestsellers/>
   <Phone/>
   </>
  )
}

export default Home
