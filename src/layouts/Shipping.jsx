
import React from 'react'
import Flex from '../components/Flex'
import Container from '../components/Container'
import { Truck } from 'lucide-react';
import { RotateCcw } from 'lucide-react';

const Shipping = () => {
  return (
   <div className=" mt-2  border-b-[#F0F0F0]">
    <Container>
        <Flex>
            <div className="w-[45%] flex items-center gap-2">
               
                <span className="font-bold text-2xl ">2</span>
                <span className='text-[#767676] font-normal'>Two years warranty</span>
            </div>
         
            <div className="w-[38%] flex items-center gap-2">
                <Truck />
                <span className='text-[#767676] '>Free shipping</span>

            </div>

            <div className="w-[20%] flex gap-2 ">
                 <RotateCcw />
                 <span className='text-[#767676]' > Return policy in 30 days</span>
            </div>
            

        </Flex>
    </Container>
   </div>
  )
}

export default Shipping
