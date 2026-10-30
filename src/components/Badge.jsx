import React from 'react'

const Badge = ({badgeName,className}) => {
  return (
    <div className={`py-2.5 px-7 bg-[#262626 text bg-black text-white ml-2 font-bold font-dm ${className}]`}>{badgeName}
      
    </div>
  )
}

export default Badge
