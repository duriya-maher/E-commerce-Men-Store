'use client';

import ProductCard from '../components/ProductCard';
import { getSaleProducts } from '../lib/products';
import Image from 'next/image';

export default function SalePage() {
  const saleProducts = getSaleProducts();

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] bg-gradient-to-r from-red-600 to-orange-500">
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 uppercase tracking-tight">
              SALE
            </h1>
            <p className="text-2xl md:text-3xl text-white mb-2">
              Up to 70% Off
            </p>
            <p className="text-lg text-white opacity-90">
              Limited time offer on selected items
            </p>
          </div>
        </div>
      </section>

      {/* Sale Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold uppercase mb-2">Sale Items</h2>
            <p className="text-gray-600">
              {saleProducts.length} products on sale
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {saleProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Sale Info */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Sale Terms & Conditions</h2>
          <div className="text-left space-y-4 text-gray-600">
            <p>• Sale prices are valid while stocks last</p>
            <p>• Discounts cannot be combined with other offers</p>
            <p>• All sale items are final sale and cannot be returned or exchanged</p>
            <p>• Limited quantities available</p>
          </div>
        </div>
      </section>
    </>
  );
}
