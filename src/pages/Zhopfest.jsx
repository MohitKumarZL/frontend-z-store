import React from 'react'
import Zhoppic from "../assets/zhoppic.jpg"
import HomeZhopfest from '../Components/HomeZhopfest'
import Footer from '../Components/Footer'
import slide1 from "../assets/Swiper/slide1.png";
import slide2 from "../assets/Swiper/slide2.png";
import slide3 from "../assets/Swiper/slide3.png";

const Zhopfest = () => {
  return (
    <>
      <div className='max-w-7xl mx-auto px-[7.5vw] pt-12'>
        <div className='flex flex-cols-2'>
          <div>
            <img src={slide3} className='w-[35.429vw] h-[53.286vw]' />
          </div>
          <div>
            <ul>
              <li>Shop the Look</li>
              <li>quantity of items</li>
              <li></li>
              <li>items title</li>
              <li><span>subtitle</span> Price</li>
              <li>color</li>
            </ul>
          </div>
        </div>

      </div>
      <HomeZhopfest />
      <Footer />
    </>
  )
}

export default Zhopfest
