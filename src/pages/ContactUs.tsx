import React from 'react'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import ContactForm from '../components/ContactForm'

const ContactUs: React.FC = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: [
        'No: 136, 6th Main Road',
        'Kallidaikurichi, Chettipillaimar Street',
        'Tirunelveli - 627416',
        'Tamil Nadu, India'
      ]
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        '+91 93427 52821',
        'Toll Free: 1800-XXX-XXXX'
      ]
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'info@andavartextiles.shop'
      ]
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Saturday',
        '9:00 AM - 6:00 PM',
        'Sunday: Closed'
      ]
    }
  ]

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#F9F9F9] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] mb-4 sm:mb-6">
            Contact <span className="text-[#800000]">Us</span>
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-[#FFD700] mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Ready to start your textile sourcing journey? Get in touch with our expert team. 
            We're here to help you find the perfect solutions for your business needs.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center group">
                <div className="bg-[#800000] p-4 sm:p-6 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-[#600000] transition-colors duration-300">
                  <info.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#222222] mb-3 sm:mb-4">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-xs sm:text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#222222] mb-4 sm:mb-6">Find Us</h2>
            <div className="w-16 sm:w-24 h-1 bg-[#FFD700] mx-auto"></div>
          </div>
          
          <div className="bg-gray-300 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-64 sm:h-80 lg:h-96">
            {/* Placeholder for map - In production, integrate with Google Maps */}
            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 sm:h-16 sm:w-16 text-[#800000] mx-auto mb-3 sm:mb-4" />
                <p className="text-[#222222] font-semibold text-sm sm:text-base">Interactive Map Coming Soon</p>
                <p className="text-gray-600 text-xs sm:text-sm">Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Quick Actions */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#222222] mb-6 sm:mb-8">Need Immediate Help?</h2>
          
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <a
              href="https://wa.me/919342752821"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white p-4 sm:p-6 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 mr-3 sm:mr-4 flex-shrink-0" />
              <div className="text-left">
                <div className="font-bold text-base sm:text-lg">WhatsApp Chat</div>
                <div className="text-green-100 text-sm">Get instant responses</div>
              </div>
            </a>
            
            <a
              href="tel:+919342752821"
              className="flex items-center justify-center bg-[#800000] hover:bg-[#600000] text-white p-4 sm:p-6 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="h-6 w-6 sm:h-8 sm:w-8 mr-3 sm:mr-4 flex-shrink-0" />
              <div className="text-left">
                <div className="font-bold text-base sm:text-lg">Call Directly</div>
                <div className="text-red-100 text-sm">Speak with our team</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs