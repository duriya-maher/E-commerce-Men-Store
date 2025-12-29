'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '../lib/types';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [currentImage, setCurrentImage] = useState(0);
  
  const discountPercentage = product.salePrice 
    ? Math.round(((product.price - product.salePrice) / product.price) * 100)
    : 0;

  return (
    <Link href={`/products/${product.id}`} className="product-card">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        {/* Sale Badge */}
        {product.salePrice && (
          <div className="badge-sale">
            Save {discountPercentage}%
          </div>
        )}
        
        {/* Out of Stock Badge */}
        {!product.inStock && (
          <div className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 text-xs font-bold uppercase z-10">
            Sold Out
          </div>
        )}

        {/* Product Images */}
        <div 
          className="relative w-full h-full"
          onMouseEnter={() => product.images.length > 1 && setCurrentImage(1)}
          onMouseLeave={() => setCurrentImage(0)}
        >
          <Image
            src={product.images[currentImage]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
        </div>

        {/* Quick Add Button - Shows on Hover */}
        {product.inStock && (
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-90 text-white py-3 text-center font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Choose Options
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-medium text-sm mb-2 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-2">
          {product.salePrice ? (
            <>
              <span className="text-red-600 font-bold">
                {product.salePrice.toFixed(2)} EGP
              </span>
              <span className="text-gray-400 line-through text-sm">
                {product.price.toFixed(2)} EGP
              </span>
            </>
          ) : (
            <span className="font-bold">
              {product.price.toFixed(2)} EGP
            </span>
          )}
        </div>

        {/* Available Colors */}
        {product.colors.length > 0 && (
          <div className="mt-2 flex gap-1">
            {product.colors.slice(0, 4).map((color) => (
              <div
                key={color}
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ 
                  backgroundColor: color.toLowerCase().includes('white') ? '#fff' : 
                                 color.toLowerCase().includes('black') ? '#000' :
                                 color.toLowerCase().includes('grey') || color.toLowerCase().includes('gray') ? '#666' :
                                 color.toLowerCase().includes('navy') ? '#001f3f' :
                                 color.toLowerCase().includes('blue') ? '#0074D9' :
                                 color.toLowerCase().includes('red') ? '#FF4136' :
                                 color.toLowerCase().includes('burgundy') ? '#85144b' :
                                 color.toLowerCase().includes('olive') ? '#3D9970' :
                                 color.toLowerCase().includes('khaki') ? '#C9B88C' :
                                 '#ddd'
                }}
                title={color}
              />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
