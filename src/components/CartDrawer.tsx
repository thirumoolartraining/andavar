import React from 'react'
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react'
import { useCartStore } from '../store/cartStore'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import type { MouseEvent } from 'react' // Import MouseEvent type

const CartDrawer: React.FC = () => {
  const { 
    items, 
    isCartOpen, 
    closeCart, 
    updateQuantity, 
    removeFromCart, 
    getTotalPrice,
    getTotalItems 
  } = useCartStore()

  if (!isCartOpen) return null

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={() => closeCart()}
      >
        <motion.div 
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween' }}
          className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl"
          onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b sticky top-0 bg-white z-10">
              <h2 className="text-lg font-semibold text-[#222222]">
                Shopping Cart ({getTotalItems()})
              </h2>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center p-6">
                  <ShoppingBag className="h-20 w-20 text-gray-200 mb-4" />
                  <p className="text-gray-600 text-lg font-medium mb-2">Your cart is empty</p>
                  <p className="text-gray-400 mb-6">Looks like you haven't added anything to your cart yet</p>
                  <Link
                    to="/products"
                    onClick={closeCart}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#800000] hover:bg-[#600000] transition-colors"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div 
                      key={item.id} 
                      className="flex space-x-4 p-3 border rounded-lg hover:shadow-md transition-shadow duration-200"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                    >
                      <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-md overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900 truncate">{item.name}</h3>
                        <p className="text-sm text-gray-500 capitalize">{item.category}</p>
                        <p className="text-sm font-semibold text-[#800000] mt-1">
                          ₹{item.price.toLocaleString()}
                        </p>
                        <div className="flex items-center mt-2">
                          <button
                            onClick={(e: MouseEvent<HTMLButtonElement>) => {
                              e.stopPropagation()
                              updateQuantity(item.id, item.quantity - 1)
                            }}
                            disabled={item.quantity <= item.minOrder}
                            className="p-1.5 text-gray-600 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-40"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="mx-2 w-8 text-center text-gray-700">
                            {item.quantity}
                          </span>
                          <button
                            onClick={(e: MouseEvent<HTMLButtonElement>) => {
                              e.stopPropagation()
                              updateQuantity(item.id, item.quantity + 1)
                            }}
                            className="p-1.5 text-gray-600 hover:bg-gray-100 rounded-full transition-colors duration-200"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <button
                          onClick={(e: MouseEvent<HTMLButtonElement>) => {
                            e.stopPropagation()
                            removeFromCart(item.id)
                          }}
                          className="p-1.5 text-gray-400 hover:text-red-500 rounded-full hover:bg-red-50 transition-colors duration-200"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                        <p className="mt-auto font-medium text-gray-900">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t p-4 bg-gray-50">
                <div className="flex justify-between text-lg font-semibold mb-4">
                  <span>Total:</span>
                  <span className="text-[#800000]">
                    ₹{getTotalPrice().toLocaleString('en-IN')}
                  </span>
                </div>
                
                <Link
                  to="/checkout"
                  onClick={closeCart}
                  className="w-full bg-[#800000] text-white py-3 rounded-lg font-semibold hover:bg-[#600000] text-center block shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Proceed to Checkout
                </Link>
                
                <div className="mt-3 text-center">
                  <Link
                    to="/products"
                    onClick={closeCart}
                    className="inline-flex items-center text-sm text-gray-600 hover:text-[#800000] transition-colors"
                  >
                    <ArrowLeft className="mr-1 h-3.5 w-3.5" />
                    Continue Shopping
                  </Link>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default CartDrawer