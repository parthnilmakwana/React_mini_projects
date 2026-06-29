import React from 'react'

function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-gray-50 to-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center py-12 lg:py-24 gap-12">
          
          {/* Left Side: Text and Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <span className="text-red-500 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Summer Arrivals
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              New <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
                Collection
              </span> <br />
              For Everyone
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Discover our latest styles designed for comfort and elegance. Unveil the best version of yourself with our new seasonal pieces.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <button className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Shop Now
              </button>
              <button className="px-8 py-3 bg-white hover:bg-gray-50 text-gray-900 font-bold rounded-full border border-gray-200 transition-all duration-300 shadow-sm hover:shadow-md">
                Explore Offers
              </button>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="flex-1 relative z-10 w-full max-w-md lg:max-w-none">
            {/* Decorative background blob behind image */}
            <div className="absolute inset-0 bg-red-200 rounded-full blur-3xl opacity-30 transform translate-x-10 translate-y-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop" 
              alt="Fashion Model Hero" 
              className="relative rounded-2xl shadow-2xl object-cover w-full h-[400px] lg:h-[600px] hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Hero