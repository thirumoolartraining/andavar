import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { X, Plus, Minus } from 'lucide-react'
import { Product } from '../data/products'

const addToCartSchema = z.object({
  quantity: z.number().min(1, 'Quantity must be at least 1')
})

type AddToCartFormData = z.infer<typeof addToCartSchema>

interface AddToCartModalProps {
  product: Product
  isOpen: boolean
  onClose: () => void
  onAddToCart: (quantity: number) => void
}

const AddToCartModal: React.FC<AddToCartModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart
}) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<AddToCartFormData>({
    resolver: zodResolver(addToCartSchema.refine(
      (data) => data.quantity >= product.minOrder,
      {
        message: `Minimum order quantity is ${product.minOrder}`,
        path: ['quantity']
      }
    )),
    defaultValues: {
      quantity: product.minOrder
    }
  })

  const quantity = watch('quantity')

  const onSubmit = (data: AddToCartFormData) => {
    onAddToCart(data.quantity)
    onClose()
  }

  const incrementQuantity = () => {
    setValue('quantity', quantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > product.minOrder) {
      setValue('quantity', quantity - 1)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="mb-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold text-[#222222] mb-2">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-2">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-[#800000]">₹{product.price.toLocaleString()}</span>
            <span className="text-sm text-gray-500">Min Order: {product.minOrder}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity
            </label>
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={decrementQuantity}
                disabled={quantity <= product.minOrder}
                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Minus className="h-4 w-4" />
              </button>
              <input
                type="number"
                {...register('quantity', { valueAsNumber: true })}
                className="w-20 text-center border border-gray-300 rounded-lg py-2 focus:ring-2 focus:ring-[#800000] focus:border-transparent"
                min={product.minOrder}
              />
              <button
                type="button"
                onClick={incrementQuantity}
                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            {errors.quantity && (
              <p className="mt-1 text-sm text-red-600">{errors.quantity.message}</p>
            )}
          </div>

          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-medium">Total:</span>
              <span className="text-xl font-bold text-[#800000]">
                ₹{(product.price * quantity).toLocaleString()}
              </span>
            </div>
          </div>

          <div className="flex space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-[#800000] text-white rounded-lg hover:bg-[#600000] transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddToCartModal