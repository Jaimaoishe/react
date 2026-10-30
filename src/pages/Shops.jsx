import React, { useState } from 'react'
import Container from '../components/Container'

const Shop = () => {

  const [count,setCount] =useState(0)

  
  function handleClick (){

    setCount(count+1)
  }
    function handleClickMinus (){

    setCount(count-1)
    }
      
  return (
    <>
    
    <div className="bg-violet-600   py-10">


        <Container className="gap-2 items-center">
 
  <div className="bg-red-700 py-6 px-4 w-[20%]  rounded-2xl text-amber-50 font-bold">
    {count}
    </div>
 <button  onClick={handleClick}  className="py-6 px-30 rounded-2xl text-amber-50
  bg-blue-500" >Increment</button>
  
 <button  onClick={handleClickMinus}  className="py-6 px-30 rounded-2xl text-amber-50
  bg-blue-500" >decrement</button>
 
  



        </Container>

    </div>

    </>
    
  )
}

export default Shop