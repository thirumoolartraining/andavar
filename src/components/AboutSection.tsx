import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, Globe, Users } from 'lucide-react'

const AboutSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/products/andavar-textile-about.png"
                alt="Andavar Textile - Our Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 bg-white p-3 sm:p-6 rounded-lg sm:rounded-xl shadow-xl border max-w-[200px] sm:max-w-xs">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <div className="bg-[#800000] p-2 sm:p-3 rounded-full flex-shrink-0">
                  <Award className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <div className="font-title font-bold text-[#222222] text-sm sm:text-base">ISO Certified</div>
                  <div className="font-text text-xs sm:text-sm text-gray-600">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] mb-4 sm:mb-6">
              About <span className="text-[#800000]">Andavar Textile</span>
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-[#FFD700] mb-4 sm:mb-6"></div>
            
            <p className="font-text text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
              Based in Tamil Nadu, we specialize in manufacturing and exporting 
              culturally rich Indian garments. Our focus is on quality, heritage, 
              and trust, serving global textile buyers who value authentic craftsmanship.
            </p>
            
            <p className="font-text text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
              With over 25 years of experience in the textile industry, we have built 
              lasting relationships with clients across 50+ countries. Our state-of-the-art 
              manufacturing facility combines traditional techniques with modern technology 
              to deliver exceptional products.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="text-center">
                <div className="bg-[#800000] p-2 sm:p-3 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="font-title font-bold text-[#800000] text-lg sm:text-xl">50+</div>
                <div className="font-text text-xs sm:text-sm text-gray-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="bg-[#800000] p-2 sm:p-3 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="font-title font-bold text-[#800000] text-lg sm:text-xl">500+</div>
                <div className="font-text text-xs sm:text-sm text-gray-600">Employees</div>
              </div>
              <div className="text-center">
                <div className="bg-[#800000] p-2 sm:p-3 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="font-title font-bold text-[#800000] text-lg sm:text-xl">25+</div>
                <div className="font-text text-xs sm:text-sm text-gray-600">Years</div>
              </div>
            </div>

            <Link
              to="/about"
              className="font-text inline-flex items-center bg-[#800000] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#600000] transition-all duration-300 transform hover:scale-105 w-full sm:w-auto justify-center"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection