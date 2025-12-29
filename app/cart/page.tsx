'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

export default function CartPage() {
  // This would come from a context/state management in a real app
  const [cartItems, setCartItems] = useState([
    {
      id: 'hoodie-001',
      name: 'Basic Hoodie Sweatshirt',
      price: 2095,
      salePrice: 628.50,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&h=200&fit=crop',
      size: 'L',
      color: 'Black',
      quantity: 2
    },
    {
      id: 'denim-001',
      name: 'Wide Leg Denim Pant',
      price: 1895,
      salePrice: 758,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=200&fit=crop',
      size: '32',
      color: 'Dark Blue',
      quantity: 1
    }
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.salePrice || item.price) * item.quantity,
    0
  );
  const shipping = subtotal > 1000 ? 0 : 50;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <ShoppingBag size={64} className="mx-auto mb-4 text-gray-400" />
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">
            Start adding items to your cart to see them here.
          </p>
          <Link href="/" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl md:text-4xl font-bold uppercase mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex gap-4 p-4 border-2 border-gray-200 bg-white">
              <div className="relative w-24 h-24 flex-shrink-0 bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <Link href={`/products/${item.id}`} className="font-bold hover:underline block mb-1">
                  {item.name}
                </Link>
                <p className="text-sm text-gray-600 mb-2">
                  Size: {item.size} | Color: {item.color}
                </p>
                <div className="flex items-center gap-3">
                  {item.salePrice ? (
                    <>
                      <span className="font-bold text-red-600">
                        {item.salePrice.toFixed(2)} EGP
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        {item.price.toFixed(2)} EGP
                      </span>
                    </>
                  ) : (
                    <span className="font-bold">
                      {item.price.toFixed(2)} EGP
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col items-end justify-between">
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600 hover:text-red-700 p-2"
                  title="Remove item"
                >
                  <Trash2 size={20} />
                </button>

                <div className="flex items-center border-2 border-gray-300">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-1 border-x-2 border-gray-300 font-medium">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="border-2 border-gray-200 p-6 sticky top-24">
            <h2 className="text-xl font-bold uppercase mb-6">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">{subtotal.toFixed(2)} EGP</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">
                  {shipping === 0 ? 'FREE' : `${shipping.toFixed(2)} EGP`}
                </span>
              </div>
              {subtotal < 1000 && (
                <p className="text-xs text-gray-500">
                  Add {(1000 - subtotal).toFixed(2)} EGP more for free shipping
                </p>
              )}
            </div>

            <div className="border-t-2 border-gray-200 pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">Total</span>
                <span className="text-2xl font-bold">{total.toFixed(2)} EGP</span>
              </div>
            </div>

            <button className="w-full btn-primary mb-3">
              Proceed to Checkout
            </button>
            <Link href="/" className="block text-center text-sm hover:underline">
              Continue Shopping
            </Link>

            <div className="mt-6 pt-6 border-t border-gray-200 text-sm text-gray-600 space-y-2">
              <p>✓ Secure checkout</p>
              <p>✓ Free returns within 14 days</p>
              <p>✓ Customer support available 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
