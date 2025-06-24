import React from 'react'
import { ChevronDown } from 'lucide-react'

const Hero: React.FC = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-[#F9F9F9] to-white pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#222222] leading-tight mb-4 sm:mb-6">
              <span className="text-[#800000]">Timeless Textiles.</span>
              <br />
              Trusted Worldwide.
            </h1>
            <p className="font-text text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              From traditional sarees to modern menswear, Andavar Textile delivers 
              heritage and quality at scale. Serving global buyers with authentic 
              Indian craftsmanship since decades.
            </p>
            <button
              onClick={scrollToProducts}
              className="font-text inline-flex items-center bg-[#800000] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-[#600000] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
            >
              Explore Our Products
              <ChevronDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2">
            <div className="aspect-square sm:aspect-[4/5] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-md sm:max-w-lg lg:max-w-none">
              <img
                src="/images/products/andavar-textile-hero.png"
                alt="Andavar Textile - Traditional Indian textile craftsmanship"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-white p-3 sm:p-6 rounded-xl shadow-xl border">
              <div className="text-center">
                <div className="font-title text-xl sm:text-2xl font-bold text-[#800000]">25+</div>
                <div className="font-text text-xs sm:text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-6 bg-white p-3 sm:p-6 rounded-xl shadow-xl border">
              <div className="text-center">
                <div className="font-title text-xl sm:text-2xl font-bold text-[#800000]">50+</div>
                <div className="font-text text-xs sm:text-sm text-gray-600">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero