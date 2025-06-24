import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData } from '../schemas/contactForm'
import { useFormSubmission } from '../hooks/useFormSubmission'
import { countries } from '../data/products'
import { Send } from 'lucide-react'

const ContactForm: React.FC = () => {
  const { submitContactForm, isSubmitting } = useFormSubmission()
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    const success = await submitContactForm(data)
    if (success) {
      reset()
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] mb-4 tracking-wide">
            GET IN TOUCH
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-[#FFD700] mx-auto mb-4 sm:mb-6"></div>
          <p className="font-text text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Ready to explore our textile solutions? Send us your requirements and 
            our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="bg-[#F9F9F9] rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12">
          <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="font-text block text-sm font-semibold text-[#222222] mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                {...register('name')}
                className="font-text w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="font-text mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="font-text block text-sm font-semibold text-[#222222] mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className="font-text w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="font-text mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="font-text block text-sm font-semibold text-[#222222] mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                {...register('company')}
                className="font-text w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                placeholder="Enter your company name"
              />
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" className="font-text block text-sm font-semibold text-[#222222] mb-2">
                Country *
              </label>
              <select
                id="country"
                {...register('country')}
                className="font-text w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent transition-all duration-200 text-sm sm:text-base"
              >
                <option value="">Select your country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {errors.country && (
                <p className="font-text mt-1 text-sm text-red-600">{errors.country.message}</p>
              )}
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label htmlFor="message" className="font-text block text-sm font-semibold text-[#222222] mb-2">
                Message *
              </label>
              <textarea
                id="message"
                rows={5}
                {...register('message')}
                className="font-text w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"
                placeholder="Tell us about your requirements, quantity, and any specific details..."
              />
              {errors.message && (
                <p className="font-text mt-1 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="font-text inline-flex items-center bg-[#800000] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-[#600000] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none w-full sm:w-auto justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm