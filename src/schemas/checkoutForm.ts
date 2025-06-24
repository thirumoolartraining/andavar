import { z } from 'zod'

export const checkoutFormSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().optional(),
  country: z.string().min(1, 'Please select your country'),
  address: z.string().min(10, 'Please enter your complete address'),
  notes: z.string().optional(),
})

export type CheckoutFormData = z.infer<typeof checkoutFormSchema>