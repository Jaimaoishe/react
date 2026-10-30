import React from 'react'
import imagSrc from '../assets/logo.png'



const Image = ({imagSrc,imgAlt}) => {
  return (
    <img src={imagSrc} alt={imgAlt} />
  )
}

export default Image
