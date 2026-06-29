import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        // Note: The escuelajs API ignores ?category=kids, it fetches all products
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
        
        // Filtering by category name
        const clothes = data.filter((item) => item.category.name === 'Clothes');
        
        // Let's just grab the first 12 for a nice grid
        setProducts(clothes.slice(0, 12));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Latest Products</h2>
        <div className="w-24 h-1 bg-red-500 mx-auto"></div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
        </div>
      ) : (
        /* CSS Grid for Responsive Layout */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((item) => {
            // Some API images are broken or improperly formatted as arrays of strings inside strings.
            // This safely grabs a working image or falls back to a placeholder.
            let imageUrl = "https://via.placeholder.com/640x480?text=No+Image";
            if (item.images && item.images.length > 0) {
              // Clean up the URL string in case the API returns weirdly formatted strings
              imageUrl = item.images[0].replace(/\[|\]|"/g, ""); 
            }

            return (
              <div 
                key={item.id} 
                onClick={() => navigate(`/product/${item.id}`)}
                className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col border border-gray-100 cursor-pointer"
              >
                {/* Image Container with Overflow Hidden for zoom effect */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    src={imageUrl} 
                    alt={item.title} 
                    onError={(e) => { e.target.src = "https://via.placeholder.com/640x480?text=Image+Error" }}
                  />
                  {/* Overlay add-to-cart button that slides up on hover */}
                  <div className="absolute inset-x-0 bottom-0 bg-white/90 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-4">
                    <button className="w-full bg-black text-white font-bold py-2 rounded-lg hover:bg-gray-800 transition-colors">
                      Quick View
                    </button>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-5 flex flex-col flex-grow">
                  <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-2">
                    {item.category.name}
                  </span>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 flex-grow">
                    {item.title}
                  </h3>
                  
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-2xl font-extrabold text-red-500">
                      ${item.price}
                    </span>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-red-500 hover:text-white transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Product;