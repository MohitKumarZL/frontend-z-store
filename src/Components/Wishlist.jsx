import React,{useState} from 'react'
import Footer from './Footer';
import best3 from "../assets/best3.png";
import { FaHeart } from "react-icons/fa";



const Wishlist = () => {
  const [isOpen, setIsOpen] = useState(false);
    const [favorite, setFavorite] = useState({});
  
  const items = [
      {
        id: 1,
        name: "Item 1",
        image: best3,
        price: "$10.00",
        title: "Tailored for you",
        color: ["bg-red-500", "bg-green-500", "bg-blue-500"],
      }]

  return (
  <>
       <div className='max-w-5xl px-5 py-10 mx-auto'>
      {/* Header */}
      <div className='flex text-3xl font-semibold justify-center'>
    Your Wishlist
  
      </div>
      <div className="w-full mt-4 sm:mt-6 hidden sm:block">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {items.map((item) => (
                  <div key={item.id} className="relative w-full">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                      <FaHeart
                        // onClick={() => handleFavoriteClick(item.id)}
                        className={`absolute sm:right-6 sm:top-6 right-3 top-3 text-base sm:text-2xl border border-black bg-black p-1 rounded-full ${
                          favorite[item.id] ? "text-red-500" : "text-white"
                        } cursor-pointer`}
                      />
                    </div>
                    <div className="mt-3">
                      <h2 className="text-base sm:text-lg font-semibold">{item.name}</h2>
                      <p className="text-sm text-gray-500">{item.title}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex">
                          {item.color.map((color, index) => (
                            <div
                              key={index}
                              className={`w-4 h-4 rounded-full mr-2 ${color}`}
                            />
                          ))}
                        </div>
                        <p className="text-sm text-gray-600">{item.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
    </div>
          <Footer/>

    </>
  )
}

export default Wishlist;
    