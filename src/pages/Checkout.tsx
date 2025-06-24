import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { checkoutFormSchema, type CheckoutFormData } from '../schemas/checkoutForm'
import { useCartStore } from '../store/cartStore'
import { countries } from '../data/products'
import { useNavigate } from 'react-router-dom'
import { useFormSubmission } from '../hooks/useFormSubmission'
import { ShoppingBag, CreditCard, Plus, Minus } from 'lucide-react'

const Checkout: React.FC = () => {
  const { items, getTotalPrice, clearCart, updateQuantity } = useCartStore()
  const navigate = useNavigate()
  const { submitOrderForm, isSubmitting } = useFormSubmission()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormSchema)
  })

  React.useEffect(() => {
    if (items.length === 0) {
      navigate('/products')
    }
  }, [items.length, navigate])

  const onSubmit = async (data: CheckoutFormData) => {
    const success = await submitOrderForm(data, items)
    if (success) {
      clearCart()
      navigate('/thank-you')
    }
  }

  if (items.length === 0) {
    return null
  }

  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] mb-4">
            Checkout
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-[#FFD700] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Order Summary */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <ShoppingBag className="h-6 w-6 text-[#800000] mr-3" />
                <h2 className="font-title text-xl font-bold text-[#222222]">Order Summary</h2>
              </div>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex space-x-4 p-4 border rounded-lg">
                    <img
                      src={getImageUrl(item.image)}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      loading="lazy"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-title font-medium text-[#222222] truncate">{item.name}</h3>
                      <p className="font-text text-sm text-gray-500 capitalize">{item.category}</p>
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center space-x-2">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              updateQuantity(item.id, Math.max(item.minOrder, item.quantity - 1));
                            }}
                            className="p-1 text-gray-500 hover:text-[#800000] focus:outline-none"
                            disabled={item.quantity <= item.minOrder}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              updateQuantity(item.id, item.quantity + 1);
                            }}
                            className="p-1 text-gray-500 hover:text-[#800000] focus:outline-none"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <span className="font-text font-semibold text-[#800000]">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span className="font-title text-[#222222]">Total:</span>
                  <span className="font-title text-[#800000]">₹{getTotalPrice().toLocaleString()}</span>
                </div>
                <p className="font-text text-sm text-gray-500 mt-2">
                  * Final pricing will be confirmed based on your requirements
                </p>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <CreditCard className="h-6 w-6 text-[#800000] mr-3" />
                <h2 className="font-title text-xl font-bold text-[#222222]">Contact Information</h2>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-text block text-sm font-semibold text-[#222222] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      {...register('fullName')}
                      className="font-text w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <p className="font-text mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="font-text block text-sm font-semibold text-[#222222] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email')}
                      className="font-text w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="font-text mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-text block text-sm font-semibold text-[#222222] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="font-text w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <p className="font-text mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="font-text block text-sm font-semibold text-[#222222] mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      {...register('company')}
                      className="font-text w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent"
                      placeholder="Enter company name (optional)"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-text block text-sm font-semibold text-[#222222] mb-2">
                    Country *
                  </label>
                  <select
                    {...register('country')}
                    className="font-text w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent"
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

                <div>
                  <label className="font-text block text-sm font-semibold text-[#222222] mb-2">
                    Shipping Address *
                  </label>
                  <textarea
                    rows={3}
                    {...register('address')}
                    className="font-text w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent resize-none"
                    placeholder="Enter your complete shipping address"
                  />
                  {errors.address && (
                    <p className="font-text mt-1 text-sm text-red-600">{errors.address.message}</p>
                  )}
                </div>

                <div>
                  <label className="font-text block text-sm font-semibold text-[#222222] mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    rows={3}
                    {...register('notes')}
                    className="font-text w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent resize-none"
                    placeholder="Any special requirements or notes..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="font-text w-full bg-[#800000] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#600000] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Processing...
                    </div>
                  ) : (
                    'Submit Order Request'
                  )}
                </button>

                <p className="font-text text-sm text-gray-600 text-center">
                  This is a quote request. Our team will contact you with pricing and payment details.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout