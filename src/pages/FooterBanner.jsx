import React from 'react'
import Sustainability from "../assets/Sustainability.png";


const FooterBanner = () => {
  return (
    <div className='mt-12 sm:mt-22'>
      <img src={Sustainability} alt="Sustainability"  className=' w-full h-[102vw] sm:h-auto object-center ' />
    </div>
  )
}

export default FooterBanner
