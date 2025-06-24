import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { productCategories, products } from '../data/products'
import ProductCard from '../components/ProductCard'

const Products: React.FC = () => {
  const [searchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  // Read category from URL query parameter on component mount
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category')
    if (categoryFromUrl && productCategories.some(cat => cat.id === categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl)
    } else {
      setSelectedCategory('all')
    }
  }, [searchParams])

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  // Scroll to top when category changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [selectedCategory])

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#F9F9F9] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] mb-4 sm:mb-6">
            Our <span className="text-[#800000]">Products</span>
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-[#FFD700] mx-auto mb-6 sm:mb-8"></div>
          <p className="font-text text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Discover our comprehensive range of traditional and contemporary garments, 
            crafted with precision and exported worldwide.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sm:py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`font-text px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-200 text-sm sm:text-base ${
                selectedCategory === 'all'
                  ? 'bg-[#800000] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Products
            </button>
            {productCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`font-text px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-200 text-sm sm:text-base ${
                  selectedCategory === category.id
                    ? 'bg-[#800000] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedCategory !== 'all' && (
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="font-title text-2xl sm:text-3xl font-bold text-[#222222] mb-4">
                {productCategories.find(cat => cat.id === selectedCategory)?.name}
              </h2>
              <p className="font-text text-gray-600 max-w-2xl mx-auto">
                {productCategories.find(cat => cat.id === selectedCategory)?.description}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 auto-rows-fr">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="font-text text-gray-500 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Products