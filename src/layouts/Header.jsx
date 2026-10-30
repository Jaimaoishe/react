import React from 'react'
import Container from '../components/Container';
import Flex from '../components/Flex';
import Image from '../components/Image';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { TextQuote } from 'lucide-react';
import { Search } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';




const Header = () => {
  const [show, setShow] =useState(false);
function handleshow(){
  setShow(!show);
}

  return (
    <>
    <div className={'py-5 border-b border-[#C4C4C4]'}>
      <Container>
        <Flex>
          <div className="w-[40%] ">
          <img src={logo} alt="logo"/>

          </div>
           <div className="w-[60%]">
         <ul className='flex gap-x-10 font-dm text-[#767676] '>
          <li ><Link to={"/"} className={"hover:text-black font-normal"}> Home</Link></li>
          <li><Link to={"/Shop"} className={"hover:text-black font-normal"}> Shops</Link></li>

          <li><Link to={"/About"} className={"hover:text-black font-normal"}> About</Link></li>
          <li><Link to={"/Contacts"} className={"hover:text-black font-normal"}> Contacts</Link></li>


         </ul>
          </div>
        </Flex>
      </Container>
      
    </div>

    <div className=" bg-[#F5F5F3] py-5 border-b ">
      <Container>
        <Flex>
          <div   onClick={handleshow}  className="w-[25%] flex items-center gap-2 font-normal relative"
          >
             <TextQuote  />
             <span className='text-[14px]'> Shop by Category </span>
             {/* Dropdown menu */}
             { show && (
             <div className="bg-black w-60 py-[15px] absolute top-6 left-0" >
              <ul className='text-[#767676]'>

                <Link to={"/"}><li className='py-3 px-6 border-b border-[#767676] hover:text-white  hover:font-bold transition-all duration-500'>Accesories</li></Link>
                <Link to={"/"}><li className='py-3 px-6 border-b border-[#767676] hover:text-white hover:font-bold transition-all duration-500'>Furniture</li></Link>
                <Link to={"/"}><li className='py-3 px-6 border-b border-[#767676] hover:text-white hover:font-bold transition-all duration-500'>Electronics</li></Link>
                <Link to={"/"}><li className='py-3 px-6 border-b border-[#767676] hover:text-white hover:font-bold transition-all duration-500'>Clothes</li></Link>
                <Link to={"/"}><li className='py-3 px-6 border-b border-[#767676] hover:text-white hover:font-bold transition-all duration-500'>Bags</li></Link>
                <Link to={"/"}><li className='py-3 px-6 hover:text-white hover:font-bold transition-all duration-500'>Home appliances</li></Link>

                
              </ul>



             </div>
)
 }
          </div>


<div className="w-[50%] bg-white relative">
<input type="text" 
placeholder='Search Products' 
className='p-5' />
 <Search  className="absolute  right-2.5 top-[34%] "/>

</div>
<div className=" w-[25%] place-items-end  ">
  <div className="flex gap-4">
    <div className="flex">
       <UserRound />
       <ChevronDown />
    </div>
    <ShoppingCart />

       
       

  </div>
 

</div>




        </Flex>
      </Container>
      

      

    </div>
    
    
  </>
  )
}

export default Header

