import React,{useState} from 'react'
import Footer from './Footer';

const Wishlist = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div>
        <h1> My Wish List add to the app</h1>
      <Footer/>
    </div>
  )
}

export default Wishlist;
    