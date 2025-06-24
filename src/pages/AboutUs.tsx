import React from 'react'
import { Globe, Target, Heart, Shield } from 'lucide-react'
import { getImageUrl } from '../utils/imageUtils'

const AboutUs: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Heritage',
      description: 'Preserving traditional craftsmanship while embracing modern techniques'
    },
    {
      icon: Shield,
      title: 'Quality',
      description: 'Uncompromising standards in every thread and every garment'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connecting cultures through authentic Indian textiles worldwide'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Continuous improvement in processes, products, and service'
    }
  ]

  const milestones = [
    { year: '1998', event: 'Company founded in Tamil Nadu' },
    { year: '2005', event: 'First international export to UK' },
    { year: '2010', event: 'ISO certification achieved' },
    { year: '2015', event: 'Export to 25+ countries' },
    { year: '2020', event: 'Digital transformation completed' },
    { year: '2025', event: 'Serving 50+ countries globally' }
  ]

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-[#F9F9F9] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] mb-4 sm:mb-6">
              About <span className="text-[#800000]">Andavar Textile</span>
            </h1>
            <div className="w-16 sm:w-24 h-1 bg-[#FFD700] mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              For over 25 years, we have been weaving stories of tradition, quality, and trust. 
              From our roots in Tamil Nadu to serving customers across 50+ countries, our journey 
              is one of passion, dedication, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#222222] mb-4 sm:mb-6">Our Story</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  Founded in 1998 by visionary entrepreneurs with a deep appreciation for Indian textile heritage, 
                  Andavar Textile began as a small family business with big dreams. Our founders recognized the 
                  potential to share India's rich textile traditions with the world while maintaining the authentic 
                  craftsmanship that makes each piece unique.
                </p>
                <p>
                  What started as a local manufacturing unit has evolved into a globally recognized textile export 
                  company. We have carefully balanced growth with our commitment to quality, ensuring that every 
                  garment that leaves our facility meets the highest international standards.
                </p>
                <p>
                  Today, we employ over 500 skilled artisans and workers, each contributing their expertise to 
                  create textiles that tell stories of tradition, innovation, and excellence. Our state-of-the-art 
                  facility combines traditional weaving techniques with modern technology to deliver products that 
                  satisfy the most discerning global buyers.
                </p>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <img
                src={getImageUrl('/images/products/our-story.png')}
                alt="Andavar Textile - Our Story"
                className="rounded-xl sm:rounded-2xl shadow-xl w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#222222] mb-4 sm:mb-6">Our Values</h2>
            <div className="w-16 sm:w-24 h-1 bg-[#FFD700] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-[#800000] p-4 sm:p-6 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-[#600000] transition-colors duration-300">
                  <value.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#222222] mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#222222] mb-4 sm:mb-6">Our Journey</h2>
            <div className="w-16 sm:w-24 h-1 bg-[#FFD700] mx-auto"></div>
          </div>
          
          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#800000] hidden lg:block"></div>
            
            <div className="space-y-8 sm:space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}>
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left'}`}>
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border-l-4 border-[#800000]">
                      <div className="text-xl sm:text-2xl font-bold text-[#800000] mb-2">{milestone.year}</div>
                      <div className="text-sm sm:text-base text-gray-600">{milestone.event}</div>
                    </div>
                  </div>
                  
                  {/* Timeline Dot - Hidden on mobile */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FFD700] rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#800000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFD700] mb-2">25+</div>
              <div className="text-sm sm:text-base lg:text-lg">Years of Excellence</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFD700] mb-2">50+</div>
              <div className="text-sm sm:text-base lg:text-lg">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFD700] mb-2">500+</div>
              <div className="text-sm sm:text-base lg:text-lg">Skilled Employees</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFD700] mb-2">1M+</div>
              <div className="text-sm sm:text-base lg:text-lg">Garments Exported</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs