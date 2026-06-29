import React from 'react';
import { useCart } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, updateQuantity, removeItem, getTotalAmount, clearCart } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50 px-4">
        <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full text-center border border-gray-100">
          <div className="w-20 h-20 bg-red-55 rounded-full flex items-center justify-center mx-auto mb-6 bg-red-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Your Cart is Empty</h2>
          <p className="text-gray-500 mb-8">Looks like you haven't added any products to your cart yet.</p>
          <button 
            onClick={() => navigate('/')} 
            className="w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 duration-200"
          >
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-950 mb-8 tracking-tight">Your Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => {
              let imageUrl = "https://via.placeholder.com/640x480?text=No+Image";
              if (item.images && item.images.length > 0) {
                imageUrl = item.images[0].replace(/\[|\]|"/g, ""); 
              }

              return (
                <div key={item.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center space-x-4 hover:shadow-md transition-shadow duration-300">
                  <img src={imageUrl} alt={item.title} className="w-20 h-20 object-cover rounded-xl border bg-gray-50" />
                  
                  <div className="flex-grow flex flex-col justify-between h-20">
                    <div>
                      <h3 className="font-bold text-gray-900 text-base line-clamp-1">{item.title}</h3>
                      <p className="text-sm font-semibold text-red-500">${item.price}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2 border border-gray-200 rounded-lg px-2 py-0.5">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-gray-500 hover:text-black font-bold px-1 text-sm focus:outline-none"
                        >
                          -
                        </button>
                        <span className="font-semibold text-sm px-1 min-w-[16px] text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-gray-500 hover:text-black font-bold px-1 text-sm focus:outline-none"
                        >
                          +
                        </button>
                      </div>

                      {/* Remove item */}
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors focus:outline-none p-1"
                        aria-label="Remove item"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Summary panel */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-fit space-y-6">
            <h2 className="text-xl font-bold text-gray-900 border-b pb-4">Order Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between text-gray-600 text-sm">
                <span>Subtotal</span>
                <span className="font-semibold text-gray-900">${getTotalAmount()}</span>
              </div>
              <div className="flex justify-between text-gray-600 text-sm">
                <span>Shipping</span>
                <span className="text-green-600 font-semibold">Free</span>
              </div>
              <div className="flex justify-between text-gray-600 text-sm pb-4 border-b">
                <span>Estimated Tax</span>
                <span className="font-semibold text-gray-900">$0.00</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-gray-950">
                <span>Total</span>
                <span>${getTotalAmount()}</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <button className="w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 duration-200">
                Proceed to Checkout
              </button>
              <button 
                onClick={clearCart} 
                className="w-full bg-gray-50 text-gray-600 border border-gray-200 py-3 rounded-xl font-bold hover:bg-gray-100 hover:text-black transition-all"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
