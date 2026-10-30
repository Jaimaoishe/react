import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Product from '../components/Product'
import product1 from '../assets/product1.png'
import product2 from '../assets/product 2.png'
import product3 from '../assets/product3.png'
import product4 from '../assets/product4.png'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const NewArrival = () => {
  return (
  
<Container>
  <span className='font-dm mt-2 mt-4 text-2xl py-2'>New Arrivals</span>
<Swiper navigation={true}
 modules={[Navigation]}
  className="mySwiper"
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="w-[1/4] gap-1 mt-7 items-center "> 
        <Product  productimag={product1}
         productBadge={"Top"}
         productPrice={"$44.00"}
          productName={"Basic Crew Neck Tee"} />
         <div className="text-[#767676]">Black</div>
        </div>
        </SwiperSlide>
      <SwiperSlide> 
        <div >
        <Product productimag={product2}
         productBadge={"Hot"} 
          productPrice={"$44.00"} 
          productName={"Basic Crew Neck Tee"} />
         <div className="text-[#767676]">Black</div>
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <Product productimag={product3}
        productBadge={"Trendy"}
          productPrice={"$44.00"} 
          productName={"Basic Crew Neck Tee"} />
         <div className="text-[#767676]">Black</div>
        
        </SwiperSlide>
      <SwiperSlide>
        <div >
        <Product
         productimag={product4}
          productBadge={"New"} 
           productPrice={"$44.00"}
            productName={"Basic Crew Neck Tee"} />
        <div className="text-[#767676]">Black</div>
        </div>
        </SwiperSlide>
         <SwiperSlide>
        <div >
        <Product
         productimag={product1}
          productBadge={"New"} 
           productPrice={"$44.00"}
            productName={"Basic Crew Neck Tee"} />
        <div className="text-[#767676]">Black</div>
        </div>
        </SwiperSlide>
         <SwiperSlide>
        <div >
        <Product
         productimag={product2}
          productBadge={"New"} 
           productPrice={"$44.00"}
            productName={"Basic Crew Neck Tee"} />
        <div className="text-[#767676]">Black</div>
        </div>
        
       
       
        </SwiperSlide>
      ...
    </Swiper>































       
</Container>
  )
}

export default NewArrival
