// import React from 'react'
// import { Link } from "react-router-dom";
// import order from "../assets/order.png"
// import { AiOutlineClose } from "react-icons/ai";



// const Cart = () => {

//   const Orders = [
//     {
//       "id": 1,
//       "price": 160.00,
//       "quantity": 1,
//       "title": "Wrap Top",
//       "color": "White",
//       "size": "S",
//       "image": order,
//     },
//     {
//       "id": 2,
//       "price": 195.00,
//       "quantity": 1,
//       "title": "Casual Wild Leg",
//       "color": "Dark Blue",
//       "size": "S",
//       "image": order,
//     },
//   ]

//   return (
//     <div className='max-w-5x1 px-25 py-10'>
//       <div className='flex justify-between '><div className='text-sm text-[#748C70] flex items-center'>Back <span className='pl-15 text-3xl font-semibold text-black'>Your Cart</span></div>
//         <div className='text-sm text-[#748C70] flex items-center'>Continue Shopping</div></div>
//       <div>
//         {/* cart header */}
//         <div className='flex  py-7 border-b border-gray-200'>
//           <div className='w-1/2'>Order Summary</div>
//           <div className='w-1/2 flex justify-around'>
//             <div>Price</div><div>Quantity</div><div>Total</div>
//           </div>
//         </div>
//         {/* cart items */}

//         {Orders.map((item) => (
//           <div className='flex  pt-7'   key={item.id}>
//             <div className='w-1/2'>
//             <div className=' grid grid-cols-4' ><div><img src={item.image} width={120} height={170}/> </div>
//               <div className='space-y-5 my-3 ' ><div className='flex justify-between'><div>{item.title}</div>
//                 <div><AiOutlineClose /></div></div>
//                 <div>{item.size}</div>
//                 <div>{item.color}</div></div></div>
//                 </div>
//             <div className='w-1/2 flex justify-around'>
//               <div>{item.price}</div><div>{item.quantity}</div><div>Total</div>
//             </div>
//           </div>
//         ))}

//       </div>
//     </div>
//   )
// }

// export default Cart


import React, { useState } from 'react';
import { Link } from "react-router-dom";
import order from "../assets/order.png";
import { AiOutlineClose } from "react-icons/ai";

const Cart = () => {
  // State to manage quantity for each item
  const [orders, setOrders] = useState([
    {
      id: 1,
      price: 160.00,
      quantity: 1,
      title: "Wrap Top",
      color: "White",
      size: "S",
      image: order,
    },
    {
      id: 2,
      price: 195.00,
      quantity: 1,
      title: "Casual Wild Leg",
      color: "Dark Blue",
      size: "S",
      image: order,
    },
    {
      id: 3,
      price: 130.00,
      quantity: 1,
      title: "Essential Dress",
      color: "Black",
      size: "2X",
      image: order,
    },
  ]);

  // Functions to handle quantity changes
  const increaseQuantity = (id) => {
    setOrders(orders.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setOrders(orders.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  // Remove item from cart
  const removeItem = (id) => {
    setOrders(orders.filter(item => item.id !== id));
  };

  // Calculate totals
  const subtotal = orders.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = 38.80; // Fixed as per image
  const shipping = 0; // Free as per image
  const total = subtotal + tax + shipping;

  return (
    <div className='max-w-5xl px-5 py-10 mx-auto'>
      {/* Header */}
      <div className='flex justify-between items-center'>
          <Link to="/" className='text-sm text-[#748C70] hover:underline'>Back</Link>
          <span className='text-3xl font-semibold text-black'>Your Cart</span>
        
        <Link to="/shopAll" className='hidden sm:block text-sm text-[#748C70] hover:underline'>Continue Shopping</Link>
      </div>

      {/* Cart Header */}
      <div className=' hidden sm:flex py-7 border-b border-gray-200 mt-5'>
        <div className='w-1/2 text-lg font-medium'>Order Summary</div>
        <div className='w-1/2 flex justify-around text-lg font-medium'>
          <div>Price</div>
          <div>Quantity</div>
          <div>Total</div>
        </div>
      </div>

      {/* Cart Items */}
      <div>
      {orders.map((item) => (
        <div className='flex py-3 ' key={item.id}>
          
            <div className='w-1/2 '>
            <div className='w-full flex gap-5' >
            <img src={item.image} alt={item.title} width={120} height={170} className='object-cover' />
            <div className='flex-1 space-y-3'>
              <div className='flex justify-between items-start'>
                <div className='font-medium'>{item.title}</div>
                <button onClick={() => removeItem(item.id)}>
                  <AiOutlineClose className='text-gray-500 hover:text-black' />
                </button>
              </div>
              <div className='text-sm text-gray-600'>Size {item.size}</div>
              <div className='text-sm text-gray-600'>Color {item.color}</div>
            </div>
          </div>
            </div>
          <div className='w-1/2 flex justify-around items-start'>
            <div>${item.price.toFixed(2)}</div>
            <div className='flex items-center gap-2'>
              <button 
                onClick={() => decreaseQuantity(item.id)} 
                className='px-2 py-1 bg-gray-200 rounded hover:bg-gray-300'
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button 
                onClick={() => increaseQuantity(item.id)} 
                className='px-2 py-1 bg-gray-200 rounded hover:bg-gray-300'
              >
                +
              </button>
            </div>
            <div>${(item.price * item.quantity).toFixed(2)}</div>
          </div>
        </div>
      ))}

      {/* Order Summary */}
      <div className='mt-7 w-full sm:w-1/2 ml-auto'>
        <div className='space-y-3  text-sm'>
          <div className='flex justify-between'>
            <span>Subtotal ({orders.length})</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className='flex justify-between'>
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className='flex justify-between'>
            <span>Shipping</span>
            <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div className='flex justify-between font-semibold text-lg pt-3 border-t border-gray-200'>
            <span>Total Orders</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <button className='w-full mt-5 py-3 bg-[#2F3E35] text-white rounded hover:bg-[#3a4a40]'>
          Next
        </button>
        <p className='text-xs text-gray-500 mt-3 text-center'>
          The total amount you pay may include applicable customs duties & taxes. We guarantee no additional charges on delivery.
        </p>
      </div>
      </div>
    </div>
  );
};

export default Cart;