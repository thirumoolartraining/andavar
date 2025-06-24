export interface ProductCategory {
  id: string
  name: string
  image: string
  description: string
}

export interface Product {
  id: string
  name: string
  price: number
  minOrder: number
  image: string
  category: string
  description: string
}

export const productCategories: ProductCategory[] = [
  {
    id: 'sarees',
    name: 'Sarees',
    image: '/images/products/banarasi-silk-saree.png',
    description: 'Traditional and designer sarees in silk, cotton, and blended fabrics'
  },
  {
    id: 'lehengas',
    name: 'Lehengas',
    image: '/images/products/bridal-lehenga-set.png',
    description: 'Elegant lehengas for special occasions and weddings'
  },
  {
    id: 'silk-sarees',
    name: 'Silk Sarees',
    image: '/images/products/kanjivaram-silk -saree.png',
    description: 'Premium silk sarees with intricate designs and patterns'
  },
  {
    id: 'silk-shirts',
    name: 'Silk Shirts',
    image: '/images/products/designer-silk-shirt.png',
    description: 'Luxurious silk shirts for formal and casual wear'
  },
  {
    id: 't-shirts',
    name: 'T-Shirts',
    image: '/images/products/cotton-round-neck-tshirt.png',
    description: 'Comfortable cotton t-shirts in various styles and colors'
  },
  {
    id: 'shirts',
    name: 'Shirts',
    image: '/images/products/formal-cotton-shirt.png',
    description: 'Formal and casual shirts in cotton and blended fabrics'
  },
  {
    id: 'trousers',
    name: 'Trousers',
    image: '/images/products/formal-trousers.png',
    description: 'Tailored trousers for professional and casual wear'
  },
  {
    id: 'dhotis',
    name: 'Dhotis',
    image: '/images/products/pure-cotton-dhoti.png',
    description: 'Traditional dhotis in pure cotton and silk varieties'
  }
]

export const products: Product[] = [
  // Sarees
  {
    id: 'saree-1',
    name: 'Banarasi Silk Saree',
    price: 2500,
    minOrder: 10,
    image: '/images/products/banarasi-silk-saree.png',
    category: 'sarees',
    description: 'Traditional Banarasi silk saree with golden zari work'
  },
  {
    id: 'saree-2',
    name: 'Cotton Handloom Saree',
    price: 1200,
    minOrder: 20,
    image: '/images/products/cotton-handloom-saree.png',
    category: 'sarees',
    description: 'Pure cotton handloom saree with traditional motifs'
  },
  {
    id: 'saree-3',
    name: 'Kanjivaram Silk Saree',
    price: 3500,
    minOrder: 5,
    image: '/images/products/kanjivaram-silk -saree.png',
    category: 'sarees',
    description: 'Authentic Kanjivaram silk saree with temple border'
  },
  {
    id: 'saree-4',
    name: 'Georgette Designer Saree',
    price: 1800,
    minOrder: 15,
    image: '/images/products/georgette-designer-saree.png',
    category: 'sarees',
    description: 'Modern georgette saree with contemporary prints'
  },
  {
    id: 'saree-5',
    name: 'Chiffon Party Saree',
    price: 2200,
    minOrder: 12,
    image: '/images/products/chiffon-party-saree.png',
    category: 'sarees',
    description: 'Elegant chiffon saree perfect for parties and events'
  },

  // Lehengas
  {
    id: 'lehenga-1',
    name: 'Bridal Lehenga Set',
    price: 8500,
    minOrder: 3,
    image: '/images/products/bridal-lehenga-set.png',
    category: 'lehengas',
    description: 'Heavy embroidered bridal lehenga with dupatta'
  },
  {
    id: 'lehenga-2',
    name: 'Party Wear Lehenga',
    price: 4500,
    minOrder: 8,
    image: '/images/products/party-wear-lehenga.png',
    category: 'lehengas',
    description: 'Designer party wear lehenga with sequin work'
  },
  {
    id: 'lehenga-3',
    name: 'Traditional Ghagra',
    price: 3200,
    minOrder: 10,
    image: '/images/products/traditional-ghagra.png',
    category: 'lehengas',
    description: 'Traditional ghagra choli with mirror work'
  },
  {
    id: 'lehenga-4',
    name: 'Indo-Western Lehenga',
    price: 5200,
    minOrder: 6,
    image: '/images/products/indo-western-lehenga.png',
    category: 'lehengas',
    description: 'Modern Indo-Western style lehenga'
  },
  {
    id: 'lehenga-5',
    name: 'Festival Lehenga',
    price: 3800,
    minOrder: 8,
    image: '/images/products/festival-lehenga.png',
    category: 'lehengas',
    description: 'Colorful festival lehenga with traditional prints'
  },

  // Silk Sarees
  {
    id: 'silk-saree-1',
    name: 'Pure Mysore Silk',
    price: 4200,
    minOrder: 5,
    image: '/images/products/pure-mysore-silk.png',
    category: 'silk-sarees',
    description: 'Authentic Mysore silk saree with gold border'
  },
  {
    id: 'silk-saree-2',
    name: 'Tussar Silk Saree',
    price: 3800,
    minOrder: 8,
    image: '/images/products/tussar-silk-saree.png',
    category: 'silk-sarees',
    description: 'Natural tussar silk with hand-painted designs'
  },
  {
    id: 'silk-saree-3',
    name: 'Mulberry Silk Saree',
    price: 3200,
    minOrder: 10,
    image: '/images/products/mulberry-silk-saree.png',
    category: 'silk-sarees',
    description: 'Premium mulberry silk with intricate weaving'
  },
  {
    id: 'silk-saree-4',
    name: 'Patola Silk Saree',
    price: 5500,
    minOrder: 4,
    image: '/images/products/patola-silk-saree.png',
    category: 'silk-sarees',
    description: 'Traditional Patola silk with geometric patterns'
  },
  {
    id: 'silk-saree-5',
    name: 'Chanderi Silk Saree',
    price: 2800,
    minOrder: 12,
    image: '/images/products/chanderi-silk-saree.png',
    category: 'silk-sarees',
    description: 'Lightweight Chanderi silk with delicate motifs'
  },

  // Silk Shirts
  {
    id: 'silk-shirt-1',
    name: 'Formal Silk Shirt',
    price: 1800,
    minOrder: 20,
    image: '/images/products/formal-silk-shirt.png',
    category: 'silk-shirts',
    description: 'Premium silk formal shirt for business wear'
  },
  {
    id: 'silk-shirt-2',
    name: 'Casual Silk Shirt',
    price: 1500,
    minOrder: 25,
    image: '/images/products/casual-silk-shirt.png',
    category: 'silk-shirts',
    description: 'Comfortable silk shirt for casual occasions'
  },
  {
    id: 'silk-shirt-3',
    name: 'Designer Silk Shirt',
    price: 2200,
    minOrder: 15,
    image: '/images/products/designer-silk-shirt.png',
    category: 'silk-shirts',
    description: 'Designer silk shirt with unique patterns'
  },
  {
    id: 'silk-shirt-4',
    name: 'Party Silk Shirt',
    price: 2500,
    minOrder: 12,
    image: '/images/products/party-silk-shirt.png',
    category: 'silk-shirts',
    description: 'Elegant silk shirt perfect for parties'
  },
  {
    id: 'silk-shirt-5',
    name: 'Traditional Silk Kurta',
    price: 1900,
    minOrder: 18,
    image: '/images/products/traditional-silk-kurta.png',
    category: 'silk-shirts',
    description: 'Traditional silk kurta with ethnic designs'
  },

  // T-Shirts
  {
    id: 'tshirt-1',
    name: 'Cotton Round Neck T-Shirt',
    price: 450,
    minOrder: 50,
    image: '/images/products/cotton-round-neck-tshirt.png',
    category: 't-shirts',
    description: 'Comfortable cotton round neck t-shirt'
  },
  {
    id: 'tshirt-2',
    name: 'Polo T-Shirt',
    price: 550,
    minOrder: 40,
    image: '/images/products/polo-tshirt.png',
    category: 't-shirts',
    description: 'Classic polo t-shirt with collar'
  },
  {
    id: 'tshirt-3',
    name: 'V-Neck T-Shirt',
    price: 480,
    minOrder: 45,
    image: '/images/products/vneck-tshirt.png',
    category: 't-shirts',
    description: 'Stylish V-neck t-shirt'
  },
  {
    id: 'tshirt-4',
    name: 'Graphic Print T-Shirt',
    price: 520,
    minOrder: 35,
    image: '/images/products/printed-tshirt.png',
    category: 't-shirts',
    description: 'T-shirt with trendy graphic prints'
  },
  {
    id: 'tshirt-5',
    name: 'Slim Fit T-Shirt',
    price: 490,
    minOrder: 40,
    image: '/images/products/long-sleeve-tshirt.png',
    category: 't-shirts',
    description: 'Slim fit t-shirt for a modern look'
  },

  // Shirts
  {
    id: 'shirt-1',
    name: 'Formal Cotton Shirt',
    price: 1200,
    minOrder: 30,
    image: '/images/products/formal-cotton-shirt.png',
    category: 'shirts',
    description: 'Premium cotton formal shirt'
  },
  {
    id: 'shirt-2',
    name: 'Casual Linen Shirt',
    price: 980,
    minOrder: 35,
    image: '/images/products/linen-shirt.png',
    category: 'shirts',
    description: 'Breathable linen shirt for casual wear'
  },
  {
    id: 'shirt-3',
    name: 'Denim Shirt',
    price: 1100,
    minOrder: 25,
    image: '/images/products/denim-shirt.png',
    category: 'shirts',
    description: 'Classic denim shirt for a rugged look'
  },
  {
    id: 'shirt-4',
    name: 'Checkered Shirt',
    price: 1050,
    minOrder: 30,
    image: '/images/products/casual-check-shirt.png',
    category: 'shirts',
    description: 'Stylish checkered pattern shirt'
  },
  {
    id: 'shirt-5',
    name: 'Office Wear Shirt',
    price: 1300,
    minOrder: 25,
    image: '/images/products/oxford-shirt.png',
    category: 'shirts',
    description: 'Professional office wear shirt'
  },

  // Trousers
  {
    id: 'trouser-1',
    name: 'Formal Trousers',
    price: 1800,
    minOrder: 25,
    image: '/images/products/formal-trousers.png',
    category: 'trousers',
    description: 'Classic formal trousers for office wear'
  },
  {
    id: 'trouser-2',
    name: 'Chinos',
    price: 1650,
    minOrder: 30,
    image: '/images/products/casual-chinos.png',
    category: 'trousers',
    description: 'Comfortable chinos for smart casual look'
  },
  {
    id: 'trouser-3',
    name: 'Linen Trousers',
    price: 1950,
    minOrder: 20,
    image: '/images/products/linen-trousers.png',
    category: 'trousers',
    description: 'Lightweight linen trousers for summer'
  },
  {
    id: 'trouser-4',
    name: 'Slim Fit Trousers',
    price: 1750,
    minOrder: 25,
    image: '/images/products/cotton-trousers.png',
    category: 'trousers',
    description: 'Modern slim fit trousers'
  },
  {
    id: 'trouser-5',
    name: 'Pleated Trousers',
    price: 2100,
    minOrder: 20,
    image: '/images/products/cargo-trousers.png',
    category: 'trousers',
    description: 'Elegant pleated trousers for formal occasions'
  },

  // Dhotis
  {
    id: 'dhoti-1',
    name: 'Pure Cotton Dhoti',
    price: 850,
    minOrder: 40,
    image: '/images/products/pure-cotton-dhoti.png',
    category: 'dhotis',
    description: 'Traditional pure cotton dhoti'
  },
  {
    id: 'dhoti-2',
    name: 'Silk Dhoti',
    price: 2200,
    minOrder: 25,
    image: '/images/products/silk-dhoti.png',
    category: 'dhotis',
    description: 'Premium silk dhoti for special occasions'
  },
  {
    id: 'dhoti-3',
    name: 'Wedding Dhoti Set',
    price: 3500,
    minOrder: 15,
    image: '/images/products/wedding-dhoti.png',
    category: 'dhotis',
    description: 'Luxury dhoti set with matching angavastram'
  },
  {
    id: 'dhoti-4',
    name: 'Printed Cotton Dhoti',
    price: 1100,
    minOrder: 30,
    image: '/images/products/handloom-dhoti.png',
    category: 'dhotis',
    description: 'Cotton dhoti with traditional prints'
  },
  {
    id: 'dhoti-5',
    name: 'Uttariyam Dhoti Set',
    price: 2800,
    minOrder: 20,
    image: '/images/products/festival-dhoti.png',
    category: 'dhotis',
    description: 'Complete dhoti set with uttariyam for ceremonies'
  }
]

export const countries = [
  'India', 'United States', 'United Kingdom', 'Canada', 'Australia', 'Singapore',
  'Germany', 'France', 'Italy', 'Japan', 'South Korea', 'UAE', 'Saudi Arabia',
  'Malaysia', 'Thailand', 'Indonesia', 'Bangladesh', 'Sri Lanka', 'Nepal'
]