import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Global Fashion Ltd.',
      country: 'United Kingdom',
      flag: '🇬🇧',
      quote: 'Andavar Textile consistently delivers exceptional quality. Their sarees are works of art that our customers absolutely love.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'Asia Textiles Import',
      country: 'Singapore',
      flag: '🇸🇬',
      quote: 'Professional service, timely delivery, and authentic craftsmanship. They have been our trusted partner for over 5 years.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      company: 'Heritage Collections',
      country: 'Canada',
      flag: '🇨🇦',
      quote: 'The attention to detail in their traditional wear is remarkable. Our boutique customers appreciate the authentic quality.',
      rating: 5,
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] mb-4 tracking-wide">
            WHAT OUR CLIENTS SAY
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-[#FFD700] mx-auto mb-4 sm:mb-6"></div>
          <p className="font-text text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Trusted by textile buyers worldwide for our commitment to quality and service excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 sm:-top-4 left-6 sm:left-8">
                <div className="bg-[#800000] p-2 sm:p-3 rounded-full">
                  <Quote className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4 sm:mb-6 mt-2 sm:mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-[#FFD700] fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-text text-sm sm:text-base text-gray-600 italic text-center mb-4 sm:mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Client Info */}
              <div className="text-center">
                <div className="text-left">
                  <div className="font-title font-bold text-[#222222] text-sm sm:text-base">{testimonial.name}</div>
                  <div className="font-text text-xs sm:text-sm text-gray-500 line-clamp-1">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials