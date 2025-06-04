import React from 'react'
import { Link } from "react-router-dom"
import Footer from './Footer'

const ItemDetails = () => {
  return (
    <>
      <div>
        {/* Image section */}
        <div className='grid grid-cols-2'>
          <div></div>
          <div></div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ItemDetails;
