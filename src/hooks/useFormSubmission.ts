import { useState } from 'react'
import toast from 'react-hot-toast'
import { supabase } from '../lib/supabase'
import type { ContactFormData } from '../schemas/contactForm'
import type { CheckoutFormData } from '../schemas/checkoutForm'
import type { CartItem } from '../store/cartStore'

export const useFormSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submitContactForm = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: data.name,
            email: data.email,
            company: data.company || null,
            country: data.country,
            message: data.message
          }
        ])

      if (error) {
        console.error('Supabase error:', error)
        throw error
      }

      toast.success('Thank you for your inquiry! We will contact you within 24 hours.')
      return true
    } catch (error) {
      console.error('Contact form submission error:', error)
      toast.error('Failed to send message. Please try again.')
      return false
    } finally {
      setIsSubmitting(false)
    }
  }

  const submitOrderForm = async (formData: CheckoutFormData, cartItems: CartItem[]) => {
    setIsSubmitting(true)
    
    try {
      const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
      
      const orderData = {
        customer_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || null,
        country: formData.country,
        address: formData.address,
        notes: formData.notes || null,
        items: cartItems.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          category: item.category
        })),
        total_amount: totalAmount
      }

      const { error } = await supabase
        .from('order_submissions')
        .insert([orderData])

      if (error) {
        console.error('Supabase error:', error)
        throw error
      }

      toast.success('Order request submitted successfully! We will contact you soon.')
      return true
    } catch (error) {
      console.error('Order submission error:', error)
      toast.error('Failed to submit order. Please try again.')
      return false
    } finally {
      setIsSubmitting(false)
    }
  }

  return { 
    submitContactForm, 
    submitOrderForm, 
    isSubmitting 
  }
}