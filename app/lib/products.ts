import { Product } from './types';

export const products: Product[] = [
  // HOODIES & SWEATSHIRTS
  {
    id: 'hoodie-001',
    name: 'Basic Hoodie Sweatshirt',
    price: 2095,
    salePrice: 628.50,
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&h=1000&fit=crop'
    ],
    category: 'men',
    subcategory: 'hoodies',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Grey', 'Navy', 'Burgundy'],
    description: 'Premium cotton blend hoodie with adjustable drawstring hood and kangaroo pocket. Perfect for everyday wear.',
    inStock: true,
    featured: true
  },
  {
    id: 'hoodie-002',
    name: 'Full Button Sweatshirt',
    price: 2995,
    salePrice: 899,
    images: [
      'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=800&h=1000&fit=crop'
    ],
    category: 'men',
    subcategory: 'hoodies',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Olive', 'Black', 'Charcoal'],
    description: 'Stylish button-up sweatshirt with ribbed cuffs and hem.',
    inStock: true,
    featured: true
  },

  // JACKETS
  {
    id: 'jacket-001',
    name: 'Hooded Puffer Jacket',
    price: 5295,
    salePrice: 1588.50,
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1548126032-f6d5f4c1b22a?w=800&h=1000&fit=crop'
    ],
    category: 'men',
    subcategory: 'jackets',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Navy', 'Forest Green'],
    description: 'Insulated puffer jacket with detachable hood. Water-resistant outer shell.',
    inStock: true,
    featured: true
  },
  {
    id: 'jacket-002',
    name: 'Leather Puffer Jacket',
    price: 7195,
    salePrice: 2158.50,
    images: [
      'https://images.unsplash.com/photo-1520975954732-35dd22299614?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&fit=crop'
    ],
    category: 'men',
    subcategory: 'jackets',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Brown'],
    description: 'Premium leather puffer jacket with quilted design and zip closure.',
    inStock: true,
    featured: true
  },
  {
    id: 'jacket-003',
    name: 'Slim Fit Jacket',
    price: 5795,
    salePrice: 1738.50,
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1601835267174-02d8e21db1b4?w=800&h=1000&fit=crop'
    ],
    category: 'men',
    subcategory: 'jackets',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Camel', 'Navy', 'Charcoal'],
    description: 'Tailored slim-fit jacket perfect for smart-casual occasions.',
    inStock: true,
    featured: false
  },

  // COATS
  {
    id: 'coat-001',
    name: 'Hooded Coat',
    price: 7895,
    salePrice: 2369,
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&h=1000&fit=crop'
    ],
    category: 'men',
    subcategory: 'coats',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Charcoal', 'Camel'],
    description: 'Long wool-blend coat with attached hood. Sophisticated winter essential.',
    inStock: true,
    featured: true
  },

  // PULLOVERS
  {
    id: 'pullover-001',
    name: 'Full Zipper Pullover',
    price: 2095,
    salePrice: 629,
    images: [
      'https://images.unsplash.com/photo-1620799140705-19e5268e3a5f?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&h=1000&fit=crop'
    ],
    category: 'men',
    subcategory: 'pullovers',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Navy', 'Grey', 'Black'],
    description: 'Comfortable full-zip pullover with mock neck collar.',
    inStock: true,
    featured: false
  },
  {
    id: 'pullover-002',
    name: 'Quarter Zipper Pullover',
    price: 1995,
    salePrice: 599,
    images: [
      'https://images.unsplash.com/photo-1618453292507-4959ece6429e?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=800&h=1000&fit=crop'
    ],
    category: 'men',
    subcategory: 'pullovers',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Burgundy', 'Forest', 'Navy'],
    description: 'Classic quarter-zip pullover in soft fleece material.',
    inStock: false,
    featured: false
  },

  // T-SHIRTS
  {
    id: 'tshirt-001',
    name: 'Crew Neck Printed T-shirt',
    price: 995,
    salePrice: 298.50,
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=1000&fit=crop'
    ],
    category: 'men',
    subcategory: 't-shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Grey', 'Navy'],
    description: 'Premium cotton t-shirt with artistic print. Regular fit.',
    inStock: true,
    featured: true
  },
  {
    id: 'tshirt-002',
    name: 'Over Size Printed T-shirt',
    price: 1745,
    salePrice: 523.50,
    images: [
      'https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&h=1000&fit=crop'
    ],
    category: 'men',
    subcategory: 't-shirts',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Cream', 'Olive'],
    description: 'Relaxed oversized fit t-shirt with bold graphic print.',
    inStock: true,
    featured: false
  },
  {
    id: 'tshirt-003',
    name: 'Basic Crew Neck T-shirt',
    price: 1145,
    salePrice: 343.50,
    images: [
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800&h=1000&fit=crop'
    ],
    category: 'men',
    subcategory: 't-shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Grey', 'Navy', 'Burgundy'],
    description: 'Essential basic t-shirt in premium cotton. Versatile wardrobe staple.',
    inStock: true,
    featured: false
  },

  // SHIRTS
  {
    id: 'shirt-001',
    name: 'Slim Fit Printed Shirt',
    price: 1645,
    salePrice: 493.50,
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&h=1000&fit=crop'
    ],
    category: 'men',
    subcategory: 'shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blue Print', 'Black Print', 'White Print'],
    description: 'Modern slim-fit shirt with contemporary print pattern.',
    inStock: true,
    featured: false
  },
  {
    id: 'shirt-002',
    name: 'Slim Fit Striped Shirt',
    price: 1495,
    salePrice: 995,
    images: [
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&h=1000&fit=crop'
    ],
    category: 'men',
    subcategory: 'shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Blue Stripe', 'White Stripe'],
    description: 'Classic striped shirt with button-down collar.',
    inStock: true,
    featured: false
  },
  {
    id: 'shirt-003',
    name: 'Slim Fit Shirt',
    price: 1045,
    salePrice: 313.50,
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1603252109612-e3b9e1ce0e4f?w=800&h=1000&fit=crop'
    ],
    category: 'men',
    subcategory: 'shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Light Blue', 'Pink'],
    description: 'Classic dress shirt perfect for formal and business occasions.',
    inStock: true,
    featured: false
  },

  // POLO SHIRTS
  {
    id: 'polo-001',
    name: 'Classic Polo Shirt',
    price: 1295,
    salePrice: 648,
    images: [
      'https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1619794575743-f96638db2524?w=800&h=1000&fit=crop'
    ],
    category: 'men',
    subcategory: 'polo-shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy', 'Black', 'White', 'Burgundy'],
    description: 'Timeless polo shirt in premium pique cotton.',
    inStock: true,
    featured: false
  },

  // DENIM
  {
    id: 'denim-001',
    name: 'Wide Leg Denim Pant',
    price: 1895,
    salePrice: 758,
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=800&h=1000&fit=crop'
    ],
    category: 'men',
    subcategory: 'denim',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Light Blue', 'Dark Blue', 'Black'],
    description: 'Relaxed wide-leg denim with comfortable fit.',
    inStock: true,
    featured: true
  },
  {
    id: 'denim-002',
    name: 'Cargo Fit Denim Pants',
    price: 2095,
    salePrice: 838,
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=800&h=1000&fit=crop'
    ],
    category: 'men',
    subcategory: 'denim',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Blue', 'Black', 'Grey'],
    description: 'Utility-inspired denim with multiple cargo pockets.',
    inStock: true,
    featured: true
  },
  {
    id: 'denim-003',
    name: 'Boy Friend Denim Pant',
    price: 1895,
    salePrice: 758,
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=800&h=1000&fit=crop'
    ],
    category: 'men',
    subcategory: 'denim',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Light Wash', 'Medium Wash'],
    description: 'Relaxed boyfriend-fit denim jeans.',
    inStock: true,
    featured: false
  },
  {
    id: 'denim-004',
    name: 'Loose Fit Denim Pant',
    price: 2295,
    salePrice: 918,
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1548883354-48d1f3e6ac92?w=800&h=1000&fit=crop'
    ],
    category: 'men',
    subcategory: 'denim',
    sizes: ['30', '32', '34', '36', '38'],
    colors: ['Black', 'Dark Blue'],
    description: 'Comfortable loose-fit denim for everyday wear.',
    inStock: true,
    featured: false
  },
  {
    id: 'denim-005',
    name: 'Regular Fit Denim Pant',
    price: 1745,
    salePrice: 698,
    images: [
      'https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&h=1000&fit=crop'
    ],
    category: 'men',
    subcategory: 'denim',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Dark Blue', 'Black'],
    description: 'Classic regular-fit denim jeans.',
    inStock: true,
    featured: false
  },

  // CHINOS
  {
    id: 'chino-001',
    name: 'Slim Fit Chino Pants',
    price: 1595,
    salePrice: 798,
    images: [
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&h=1000&fit=crop'
    ],
    category: 'men',
    subcategory: 'chinos',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Khaki', 'Navy', 'Black', 'Olive'],
    description: 'Tailored slim-fit chino pants for smart-casual wear.',
    inStock: true,
    featured: false
  },

  // SWEATPANTS
  {
    id: 'sweatpants-001',
    name: 'Jogger Sweatpants',
    price: 1495,
    salePrice: 748,
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1624378440070-7dd4f8b4e9f6?w=800&h=1000&fit=crop'
    ],
    category: 'men',
    subcategory: 'sweatpants',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Grey', 'Navy'],
    description: 'Comfortable jogger-style sweatpants with elastic cuffs.',
    inStock: true,
    featured: false
  },

  // SHORTS
  {
    id: 'shorts-001',
    name: 'Cotton Shorts',
    price: 995,
    salePrice: 498,
    images: [
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1591195853892-1f99c8d07df8?w=800&h=1000&fit=crop'
    ],
    category: 'men',
    subcategory: 'shorts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Khaki', 'Navy', 'Black'],
    description: 'Lightweight cotton shorts perfect for summer.',
    inStock: true,
    featured: false
  },
  {
    id: 'shorts-002',
    name: 'Swimming Shorts',
    price: 895,
    salePrice: 448,
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&h=1000&fit=crop'
    ],
    category: 'men',
    subcategory: 'swimming-shorts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Navy', 'Black', 'Red'],
    description: 'Quick-dry swimming shorts with mesh lining.',
    inStock: true,
    featured: false
  },

  // SHOES
  {
    id: 'shoes-001',
    name: 'Leather Sneakers',
    price: 2995,
    salePrice: 1498,
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=1000&fit=crop'
    ],
    category: 'men',
    subcategory: 'shoes',
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    colors: ['White', 'Black', 'Navy'],
    description: 'Premium leather sneakers with cushioned sole.',
    inStock: true,
    featured: false
  },

  // KIDS COLLECTION
  {
    id: 'kids-hoodie-001',
    name: 'Kids Basic Hoodie',
    price: 1295,
    salePrice: 518,
    images: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=800&h=1000&fit=crop'
    ],
    category: 'kids',
    subcategory: 'hoodies',
    sizes: ['4-5Y', '6-7Y', '8-9Y', '10-11Y', '12-13Y'],
    colors: ['Black', 'Grey', 'Navy'],
    description: 'Comfortable hoodie for kids with soft cotton blend.',
    inStock: true,
    featured: false
  },
  {
    id: 'kids-tshirt-001',
    name: 'Kids Graphic T-Shirt',
    price: 695,
    salePrice: 278,
    images: [
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800&h=1000&fit=crop'
    ],
    category: 'kids',
    subcategory: 't-shirts',
    sizes: ['4-5Y', '6-7Y', '8-9Y', '10-11Y'],
    colors: ['White', 'Black', 'Blue'],
    description: 'Fun graphic t-shirt for active kids.',
    inStock: true,
    featured: false
  },
];

export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getProductsByCategory = (category: string) => products.filter(p => p.category === category);
export const getProductsBySubcategory = (subcategory: string) => products.filter(p => p.subcategory === subcategory);
export const getProductById = (id: string) => products.find(p => p.id === id);
export const getSaleProducts = () => products.filter(p => p.salePrice);
