import React, { useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import { Product } from '../data/products'
import { useCartStore } from '../store/cartStore'
import AddToCartModal from './AddToCartModal'

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { addToCart } = useCartStore()

  const handleAddToCart = (quantity: number) => {
    addToCart(product, quantity)
  }

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-full flex flex-col">
        <div className="aspect-[4/5] overflow-hidden flex-shrink-0 relative group">
          <div className="absolute inset-0 bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 transform-gpu will-change-transform"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="font-title font-semibold text-[#222222] mb-2 line-clamp-2 text-sm sm:text-base flex-shrink-0">
            {product.name}
          </h3>
          <p className="font-text text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2 flex-grow">
            {product.description}
          </p>
          
          <div className="space-y-2 mb-4 flex-shrink-0">
            <div className="flex justify-between items-center">
              <span className="font-title text-lg sm:text-xl font-bold text-[#800000]">
                ₹{product.price.toLocaleString()}
              </span>
              <span className="font-text text-xs text-gray-500">per piece</span>
            </div>
            <p className="font-text text-xs sm:text-sm text-gray-600">
              Min Order: {product.minOrder} pieces
            </p>
          </div>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="font-text w-full bg-[#800000] text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#600000] transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base mt-auto"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>

      <AddToCartModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={handleAddToCart}
      />
    </>
  )
}

export default ProductCard