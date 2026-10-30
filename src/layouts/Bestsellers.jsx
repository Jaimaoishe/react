import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import selling from '../assets/selling products 1.png'
import selling1 from '../assets/selling products 2.png'

import selling2 from '../assets/selling products 3.png'

import selling3 from '../assets/selling products 4.png'


const Bestsellers = () => {
  return (
    <Container>
      
            <div className="font-dm mt-2 mt-4 text-2xl py-2">
             <h1>Our Bestsellers</h1>
            </div>
              <Flex>
            <div className="gap-2 items-center flex">
                <div className="mt-5 relative">
                <img src={selling} alt="selling"/>
                <span className="absolute bg-black py-2 w-25 text-amber-50 text-center top-3 left-2">New</span>
                <div className=" flex justify-between">
                     <span>Basic Crew Neck Tee</span>
                     <h3 className='text-[#767676]'>$44.00</h3>
                </div>
                <span className='text-[#767676]'>Black</span>
                
            </div>
             <div className="mt-5 relative">
                <img src={selling1} alt="selling"/>
                <span className="absolute bg-black py-2 w-25 text-amber-50 text-center top-3 left-2">New</span>
                <div className="flex justify-between">
                     <span>Basic Crew Neck Tee</span>
                     <h3 className='text-[#767676]'>$44.00</h3>

                </div>
                 <span className='text-[#767676]'>Black</span>
                
            </div>
             <div className="mt-5 relative">
                <img src={selling2} alt="selling"/>
                <span className="absolute bg-black py-2 w-25 text-amber-50 text-center top-3 left-2">New</span>
                <div className="flex justify-between">
                     <span>Basic Crew Neck Tee</span>
                     <h3 className='text-[#767676]'>$44.00</h3>

                </div>
                 <span className='text-[#767676]'>Black</span>
                
            </div>
             <div className="mt-5 relative">
                <img src={selling3} alt="selling"/>
                <span className="absolute bg-black py-2 w-25 text-amber-50 text-center top-3 left-2">New</span>
                <div className="flex justify-between">
                     <span>Basic Crew Neck Tee</span>
                     <h3 className='text-[#767676]'>$44.00</h3>

                </div>
                 <span className='text-[#767676]'>Black</span>
                
            </div>
            </div>
        </Flex>
    </Container>
  )
}

export default Bestsellers
