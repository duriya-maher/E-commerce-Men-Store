'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProductById, products } from '@/app/lib/products';
import ProductCard from '@/app/components/ProductCard';
import { ShoppingCart, Heart, Share2, Truck, RotateCcw, Shield } from 'lucide-react';

export default function ProductPage() {
  const params = useParams();
  const product = getProductById(params.id as string);
  
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
        <Link href="/" className="btn-primary">
          Return Home
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discountPercentage = product.salePrice 
    ? Math.round(((product.price - product.salePrice) / product.price) * 100)
    : 0;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    if (!selectedColor) {
      alert('Please select a color');
      return;
    }
    // Add to cart logic here
    alert(`Added ${quantity} item(s) to cart!`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm mb-8">
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <Link href={`/collections/${product.subcategory}`} className="hover:underline capitalize">
          {product.subcategory}
        </Link>
        <span>/</span>
        <span className="text-gray-500">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative aspect-[3/4] bg-gray-100">
            {product.salePrice && (
              <div className="badge-sale">
                Save {discountPercentage}%
              </div>
            )}
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Thumbnail Images */}
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square border-2 ${
                    selectedImage === index ? 'border-black' : 'border-gray-200'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
          
          {/* Price */}
          <div className="flex items-center gap-4 mb-6">
            {product.salePrice ? (
              <>
                <span className="text-3xl font-bold text-red-600">
                  {product.salePrice.toFixed(2)} EGP
                </span>
                <span className="text-xl text-gray-400 line-through">
                  {product.price.toFixed(2)} EGP
                </span>
                <span className="bg-red-600 text-white px-3 py-1 text-sm font-bold">
                  -{discountPercentage}%
                </span>
              </>
            ) : (
              <span className="text-3xl font-bold">
                {product.price.toFixed(2)} EGP
              </span>
            )}
          </div>

          {/* Stock Status */}
          <div className="mb-6">
            {product.inStock ? (
              <span className="text-green-600 font-medium flex items-center gap-2">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                In Stock
              </span>
            ) : (
              <span className="text-red-600 font-medium flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                Out of Stock
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Size Selection */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <label className="font-bold">SIZE:</label>
              <Link href="/size-guide" className="text-sm underline">
                Size Guide
              </Link>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border-2 py-3 font-medium transition-colors ${
                    selectedSize === size
                      ? 'border-black bg-black text-white'
                      : 'border-gray-300 hover:border-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-8">
            <label className="font-bold mb-3 block">COLOR: {selectedColor}</label>
            <div className="flex flex-wrap gap-3">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 border-2 font-medium transition-colors ${
                    selectedColor === color
                      ? 'border-black bg-black text-white'
                      : 'border-gray-300 hover:border-black'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <label className="font-bold mb-3 block">QUANTITY:</label>
            <div className="flex items-center gap-4">
              <div className="flex items-center border-2 border-gray-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100 font-bold"
                >
                  -
                </button>
                <span className="px-6 py-2 font-medium border-x-2 border-gray-300">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100 font-bold"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="space-y-3 mb-8">
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full btn-primary disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <ShoppingCart size={20} />
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button className="btn-secondary flex items-center justify-center gap-2">
                <Heart size={18} />
                Wishlist
              </button>
              <button className="btn-secondary flex items-center justify-center gap-2">
                <Share2 size={18} />
                Share
              </button>
            </div>
          </div>

          {/* Product Features */}
          <div className="border-t-2 border-gray-200 pt-6 space-y-4">
            <div className="flex items-start gap-3">
              <Truck className="flex-shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-bold mb-1">Free Shipping</h4>
                <p className="text-sm text-gray-600">Free shipping on orders over 1000 EGP</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <RotateCcw className="flex-shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-bold mb-1">Easy Returns</h4>
                <p className="text-sm text-gray-600">14 days return policy</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="flex-shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-bold mb-1">Secure Payment</h4>
                <p className="text-sm text-gray-600">100% secure transactions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold uppercase mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
