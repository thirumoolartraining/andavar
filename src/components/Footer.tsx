import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, MessageCircle, Linkedin, MapPin, Phone, Mail, ArrowUp } from 'lucide-react'

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#4B0000] text-white relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-4 sm:-top-6 right-4 sm:right-8 bg-[#FFD700] p-2 sm:p-3 rounded-full shadow-lg hover:bg-[#F4C430] transition-all duration-300 transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-4 w-4 sm:h-6 sm:w-6 text-[#800000]" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4 sm:mb-6">
              <Link to="/" className="inline-block">
                <img 
                  src="/images/logo/andavar-logo.png" 
                  alt="Andavar Textile Logo" 
                  className="h-12 w-auto sm:h-16 md:h-20 bg-white p-1 rounded-md shadow-sm"
                />
              </Link>
            </div>
            
            <p className="font-text text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base max-w-lg">
              Leading manufacturer and exporter of traditional and contemporary 
              Indian garments, serving global buyers with authentic craftsmanship 
              and premium quality textiles.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-[#FFD700] mt-1 flex-shrink-0" />
                <div className="font-text text-xs sm:text-sm text-gray-300">
                  No: 136, 6th Main Road,<br />
                  Kallidaikurichi, Chettipillaimar Street,<br />
                  Tirunelveli - 627416, Tamil Nadu, India
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-[#FFD700]" />
                <span className="font-text text-xs sm:text-sm text-gray-300">+91 93427 52821</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-[#FFD700]" />
                <span className="font-text text-xs sm:text-sm text-gray-300">info@andavartextiles.shop</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-title text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-[#FFD700]">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/" className="font-text text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-text text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-text text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#products" className="font-text text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Products
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Connect */}
          <div>
            <h3 className="font-title text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-[#FFD700]">Connect With Us</h3>
            
            <div className="flex space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#800000] p-2 sm:p-3 rounded-full hover:bg-[#600000] transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://wa.me/919342752821"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#800000] p-2 sm:p-3 rounded-full hover:bg-[#600000] transition-all duration-300 transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#800000] p-2 sm:p-3 rounded-full hover:bg-[#600000] transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>

            <div className="font-text text-xs sm:text-sm text-gray-300">
              <p className="mb-1 sm:mb-2">Business Hours:</p>
              <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#800000] mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <p className="font-text text-gray-300 text-xs sm:text-sm">
              © 2025 Andavar Textile. All rights reserved. | Designed for global excellence.
            </p>
            <div className="flex items-center space-x-4">
              <Link 
                to="/privacy-policy" 
                className="font-text text-gray-300 hover:text-white text-xs sm:text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-500">|</span>
              <Link 
                to="/terms-conditions" 
                className="font-text text-gray-300 hover:text-white text-xs sm:text-sm transition-colors"
              >
                Terms & Conditions
              </Link>
              <span className="text-gray-500">|</span>
              <Link 
                to="/shipping-policy" 
                className="font-text text-gray-300 hover:text-white text-xs sm:text-sm transition-colors"
              >
                Shipping Policy
              </Link>
              <span className="text-gray-500">|</span>
              <Link 
                to="/cancellation-refund-policy" 
                className="font-text text-gray-300 hover:text-white text-xs sm:text-sm transition-colors"
              >
                Cancellation & Refund
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer