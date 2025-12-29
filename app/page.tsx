'use client';

import Link from 'next/link';
import Image from 'next/image';
import ProductCard from './components/ProductCard';
import { getFeaturedProducts, getSaleProducts } from './lib/products';
import { collections } from './lib/collections';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const saleProducts = getSaleProducts().slice(0, 8);
  const topCollections = collections.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] bg-gray-900">
        <Image
          src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=1920&h=1080&fit=crop"
          alt="Fall Winter Collection"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight animate-fade-in">
              Fall Winter 2026
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Discover The New Collection
            </p>
            <Link 
              href="/collections/new-arrivals"
              className="btn-primary inline-block animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Best Seller Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-title">Best Seller Products</h2>
          <Link 
            href="/collections/all"
            className="text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
          >
            View All <ChevronRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Featured Collections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="section-title text-center mb-12">Best Seller Collections</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topCollections.map((collection) => (
            <Link 
              key={collection.id}
              href={`/collections/${collection.slug}`}
              className="group relative overflow-hidden aspect-[4/5] bg-gray-100"
            >
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                  <p className="text-sm opacity-90 mb-4">{collection.itemCount} Items</p>
                  <div className="font-bold flex items-center gap-2">
                    Shop Now <ChevronRight size={18} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Denim Sale Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-2">
              Every Day Denim
            </p>
            <h2 className="text-4xl md:text-5xl font-bold uppercase">
              Denim Sale - 60% Off
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {saleProducts.filter(p => p.subcategory === 'denim').slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/collections/denim" className="btn-primary">
              View All Denim
            </Link>
          </div>
        </div>
      </section>

      {/* Shop The Look */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="section-title text-center mb-12">Shop The Look</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Look 1 */}
          <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&h=1000&fit=crop"
              alt="Look 1"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-bold mb-3">Complete The Look</h3>
              <ul className="space-y-2 text-sm">
                <li>• Hooded Coat - 2,369.00 EGP</li>
                <li>• Slim Fit Denim - 758.00 EGP</li>
              </ul>
              <Link href="/collections/coats" className="btn-secondary mt-4 inline-block">
                Shop Items
              </Link>
            </div>
          </div>

          {/* Look 2 */}
          <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&fit=crop"
              alt="Look 2"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-bold mb-3">Complete The Look</h3>
              <ul className="space-y-2 text-sm">
                <li>• Puffer Jacket - 2,158.50 EGP</li>
                <li>• Boy Friend Denim - 758.00 EGP</li>
              </ul>
              <Link href="/collections/jackets" className="btn-secondary mt-4 inline-block">
                Shop Items
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Summer Sale */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">
              Summer Sale
            </h2>
            <p className="text-xl text-gray-600">Up to 70% Off Selected Items</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {saleProducts.filter(p => p.subcategory === 't-shirts' || p.subcategory === 'shirts').slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/sale" className="btn-primary">
              View All Sale Items
            </Link>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-bold text-lg mb-2">FREE SHIPPING</h3>
              <p className="text-sm text-gray-300">On orders over 1000 EGP</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">EASY RETURNS</h3>
              <p className="text-sm text-gray-300">14 days return policy</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">SECURE PAYMENT</h3>
              <p className="text-sm text-gray-300">100% secure transactions</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
