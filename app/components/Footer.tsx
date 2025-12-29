'use client';

import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Find Us */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase tracking-wider">Find Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/stores" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Store Locator
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase tracking-wider">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Return & Exchange Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase tracking-wider">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/collections/hoodies-sweatshirts" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Hoodies & Sweatshirts
                </Link>
              </li>
              <li>
                <Link href="/collections/jackets" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Jackets
                </Link>
              </li>
              <li>
                <Link href="/collections/denim" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Denim
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-red-400 hover:text-red-300 transition-colors text-sm font-bold">
                  Sale - Up to 70% Off
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase tracking-wider">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">
              Sign up to receive exclusive offers and updates.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button type="submit" className="bg-white text-black px-6 py-2 font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                <Mail size={16} />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} MEN'S CLUB. All rights reserved.
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-500">
            <span>Egypt (EGP ج.م)</span>
            <span>•</span>
            <button className="hover:text-white transition-colors">English</button>
            <span>•</span>
            <button className="hover:text-white transition-colors">العربية</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
