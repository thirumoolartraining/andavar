import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react'

const ThankYou: React.FC = () => {
  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-gradient-to-br from-[#F9F9F9] to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center">
          <div className="mb-8">
            <CheckCircle className="h-20 w-20 sm:h-24 sm:w-24 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] mb-4">
              Thank You!
            </h1>
            <div className="w-16 sm:w-24 h-1 bg-[#FFD700] mx-auto mb-6"></div>
          </div>

          <div className="bg-white rounded-xl p-6 sm:p-8 lg:p-12 shadow-lg mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#800000] mb-4">
              Your Order Request Has Been Submitted Successfully!
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              We have received your order request and our team will review it shortly. 
              You can expect to hear from us within 24 hours with detailed pricing, 
              availability, and next steps.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-[#F9F9F9] rounded-lg">
                <h3 className="font-semibold text-[#222222] mb-2">What's Next?</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Order review and verification</li>
                  <li>• Pricing confirmation</li>
                  <li>• Production timeline</li>
                  <li>• Payment and shipping details</li>
                </ul>
              </div>
              <div className="text-center p-4 bg-[#F9F9F9] rounded-lg">
                <h3 className="font-semibold text-[#222222] mb-2">Need Help?</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4 text-[#800000]" />
                    <span>+91 93427 52821</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4 text-[#800000]" />
                    <span>info@andavartextiles.shop</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center justify-center bg-[#800000] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#600000] transition-colors"
              >
                Continue Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center border border-[#800000] text-[#800000] px-6 py-3 rounded-lg font-semibold hover:bg-[#800000] hover:text-white transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Order Reference: #{Date.now().toString().slice(-8)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThankYou