import React from 'react'
import { useProducts } from '../hooks/useProducts'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const ProductCategoryGrid: React.FC = () => {
  const { products, loading } = useProducts()

  if (loading) {
    return (
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] mb-4">
              OUR PRODUCT CATEGORIES
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-[#FFD700] mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-[4/5] bg-gray-200 rounded-xl animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="products" className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] mb-4 tracking-wide">
            OUR PRODUCT CATEGORIES
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-[#FFD700] mx-auto mb-4 sm:mb-6"></div>
          <p className="font-text text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Discover our comprehensive range of traditional and contemporary garments, 
            crafted with precision and exported worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {products.map((product) => (
            <Link 
              to={`/products?category=${product.id}`}
              key={product.id}
              className="block group relative aspect-[4/5] rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-title text-sm sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2 group-hover:text-[#FFD700] transition-colors duration-300 line-clamp-2">
                  {product.name}
                </h3>
                <p className="font-text text-xs sm:text-sm text-gray-200 mb-2 sm:mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2 hidden sm:block">
                  {product.description}
                </p>
                <div className="font-text flex items-center text-xs sm:text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <span className="text-[#FFD700]">View Details</span>
                  <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 text-[#FFD700]" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCategoryGrid