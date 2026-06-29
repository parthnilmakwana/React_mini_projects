import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        } else {
          // Fallback: If single product fetch fails (due to API database integrity bugs in the public sandbox),
          // fetch all products and search for the matching ID in the list.
          console.warn(`Single product fetch failed for ID ${id}, trying fallback list search...`);
          const listResponse = await fetch('https://api.escuelajs.co/api/v1/products');
          if (!listResponse.ok) {
            throw new Error('Failed to fetch product details');
          }
          const listData = await listResponse.json();
          const matchedProduct = listData.find(item => item.id === Number(id));
          if (!matchedProduct) {
            throw new Error('Product not found in database');
          }
          setProduct(matchedProduct);
        }
      } catch (err) {
        console.error("Error fetching product details:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Oops! Product Not Found</h2>
        <p className="text-gray-600 mb-6">{error || "The product you're looking for doesn't exist."}</p>
        <button 
          onClick={() => navigate(-1)} 
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
        >
          Go Back
        </button>
      </div>
    );
  }

  // Handle API image quirks
  let imageUrl = "https://via.placeholder.com/640x480?text=No+Image";
  if (product.images && product.images.length > 0) {
    imageUrl = product.images[0].replace(/\[|\]|"/g, ""); 
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-black mb-8 transition-colors group font-semibold"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Shop
        </button>

        {/* Product Card Details */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-6 sm:p-8 lg:p-12">
          
          {/* Left: Image Panel */}
          <div className="relative rounded-2xl overflow-hidden bg-gray-100 h-96 md:h-auto min-h-[400px]">
            <img 
              src={imageUrl} 
              alt={product.title} 
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = "https://via.placeholder.com/640x480?text=Image+Error" }}
            />
          </div>

          {/* Right: Info Panel */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Category */}
              {product.category && (
                <span className="text-sm font-semibold tracking-wider text-red-500 uppercase">
                  {product.category.name}
                </span>
              )}

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-4 leading-tight">
                {product.title}
              </h1>

              {/* Price */}
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-extrabold text-gray-900">${product.price}</span>
                <span className="ml-2 text-sm text-gray-500">USD</span>
              </div>

              {/* Description */}
              <div className="border-t border-b border-gray-100 py-6 mb-6">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <button 
                onClick={() => addToCart(product)}
                className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 duration-200"
              >
                Add to Cart
              </button>
              
              <div className="flex items-center justify-center text-sm text-gray-500 space-x-6 pt-2">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  In Stock
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.952 11.952 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Secure checkout
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
