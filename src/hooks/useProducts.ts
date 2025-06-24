import { useState, useEffect } from 'react'
import { productCategories, type ProductCategory } from '../data/products'

export const useProducts = () => {
  const [products, setProducts] = useState<ProductCategory[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const fetchProducts = async () => {
      setLoading(true)
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500))
      setProducts(productCategories)
      setLoading(false)
    }

    fetchProducts()
  }, [])

  return { products, loading }
}