import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'


const Footer = () => {
  return (
   <>
   
   <Container>
    <div className="w-full bg-[#F5F5F3] h-100 mt-28 relative">


      <div className="">
    <ul className="absolute top-16 left-20 ">
      <Link to="/" className=' font-dm font-bold'><li>MENU</li></Link>
      <Link to="/" className='font-dm text-[#6D6D6D]'><li>Home</li></Link>
      <Link to="/"  className=' font-dm text-[#6D6D6D]'><li>Shop</li></Link>
      <Link to="/"  className=' font-dm text-[#6D6D6D]'><li>About</li></Link>
      <Link to="/"  className=' font-dm text-[#6D6D6D]'><li>Contact</li></Link>
      <Link to="/"  className=' font-dm text-[#6D6D6D]'><li>Journal</li></Link>
    
    </ul>

    </div>
    <div className="">
      <ul className="absolute top-16 left-45">
      <Link to="/" className=' font-dm font-bold'><li>SHOP</li></Link>
      <Link to="/" className='font-dm text-[#6D6D6D]'><li>Category1</li></Link>
      <Link to="/"  className=' font-dm text-[#6D6D6D]'><li>Category2</li></Link>
      <Link to="/"  className=' font-dm text-[#6D6D6D]'><li>Category3</li></Link>
      <Link to="/"  className=' font-dm text-[#6D6D6D]'><li>Category4</li></Link>
      <Link to="/"  className=' font-dm text-[#6D6D6D]'><li>Category5</li></Link>
    
    </ul>
    </div>
    <div className="">
       <ul className="absolute top-16 left-80 ">
      <Link to="/" className=' font-dm font-bold'><li>HELP</li></Link>
      <Link to="/" className='font-dm text-[#6D6D6D]'><li>Privacy Policy</li></Link>
      <Link to="/"  className=' font-dm text-[#6D6D6D]'><li>Terms & Conditions</li></Link>
      <Link to="/"  className=' font-dm text-[#6D6D6D]'><li>Special E-shop</li></Link>
      <Link to="/"  className=' font-dm text-[#6D6D6D]'><li>Shipping</li></Link>
      <Link to="/"  className=' font-dm text-[#6D6D6D]'><li>Secure Payments</li></Link>
    
    </ul>
    </div>

    <div className="">
      <span className='font-bold font-dm top-16 left-[40%] absolute'>(052) 611-5711<br></br>
company@domain.com</span>
<span className='text-[#6D6D6D] top-30 left-[40%] absolute'>575 Crescent Ave. Quakertown, PA 18951</span>
    </div>
    <div className="absolute top-16 left-[70%] h-9">
      <img src={logo} alt={logo} className='h-6'></img>
     
    </div>

  

    <h3 className='absolute top-[80%] left-[70%] font-dm text-[#6D6D6D] text-sm'>2020 Orebi Minimal eCommerce Figma Template by Adveits</h3>
    </div>
   </Container>
   
   </>
  )
}

export default Footer

