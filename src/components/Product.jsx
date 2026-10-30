import React from 'react'
import Image from './Image'
import Badge from './Badge'
import { Heart } from 'lucide-react'
import { GitCompare } from 'lucide-react';
import { ShoppingCartMinus } from 'lucide-react';


const Product = ({productimag ,productBadge,productName ,productPrice}) => {
  return (
    <div className="relative group">
      <Image imagSrc={productimag}/>
      <Badge className="absolute top-5 left-4" badgeName ={productBadge}/>
    <div className="flex justify-between">
        <h3>{productName}</h3>
      <h3>{productPrice}</h3>
    </div>
    <div className="w-full bg-white p-5 absolute bottom-4 left-0 translate-y-full
    group-hover:translate-y-0 none transition-transform opacity-0 group-hover:opacity-100 duration-300 ease-in-out"  >
      <div className="text-[#767676] flex gap-2 right-2 items-center justify-end">
        Add to Wish List<Heart/>
      </div>
      
      <div className="text-[#767676] flex gap-2 right-2 items-center justify-end">
       Compare<GitCompare/>
       
      </div>
      <div className="text-black flex gap-2 right-2 items-center justify-end">
        Add to Cart<ShoppingCartMinus/>
      </div>
    </div>

    </div>
  )
}

export default Product
