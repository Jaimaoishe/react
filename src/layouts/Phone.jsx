import React from 'react'
import Container from '../components/Container'
import banner from '../assets/banner2.png'
import { Link, Links } from 'react-router-dom'

const Phone = () => {
  return (
    <Container >
        
      <div className="mt-14">
         <Link className="mt-5"> <img src={banner} alt={banner}></img></Link>
      
      </div>
    </Container>
  )
}

export default Phone
