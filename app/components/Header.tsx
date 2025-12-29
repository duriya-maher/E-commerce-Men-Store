'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Search, ShoppingCart, User, ChevronDown } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menMenuOpen, setMenMenuOpen] = useState(false);
  const [kidsMenuOpen, setKidsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const menCategories = {
    'TOP': [
      { name: 'HOODIES | SWEATSHIRTS', href: '/collections/hoodies-sweatshirts' },
      { name: 'PULLOVERS', href: '/collections/pullovers' },
      { name: 'JACKETS', href: '/collections/jackets' },
      { name: 'SHIRTS | OVERSHIRTS', href: '/collections/overshirts' },
      { name: 'COATS', href: '/collections/coats' },
      { name: 'T-SHIRTS', href: '/collections/t-shirts' },
      { name: 'POLO SHIRTS', href: '/collections/polo-shirts' },
      { name: 'SHIRTS', href: '/collections/shirts' },
    ],
    'BOTTOM': [
      { name: 'DENIM', href: '/collections/denim' },
      { name: 'SWEATPANTS', href: '/collections/sweatpants' },
      { name: 'CHINOS', href: '/collections/chinos' },
      { name: 'SHORT', href: '/collections/shorts' },
      { name: 'SWIMMING SHORT', href: '/collections/swimming-shorts' },
    ],
    'OTHERS': [
      { name: 'SHOES', href: '/collections/shoes' },
      { name: 'PERFUMES', href: '/collections/perfumes' },
    ]
  };

  const kidsCategories = {
    'TOP': [
      { name: 'HOODIES | SWEATSHIRTS', href: '/collections/kids-hoodies' },
      { name: 'PULLOVERS', href: '/collections/kids-pullovers' },
      { name: 'JACKETS', href: '/collections/kids-jackets' },
      { name: 'T-SHIRTS', href: '/collections/kids-t-shirts' },
      { name: 'POLO SHIRTS', href: '/collections/kids-polo' },
    ],
    'BOTTOM': [
      { name: 'DENIM', href: '/collections/kids-denim' },
      { name: 'CHINOS', href: '/collections/kids-chinos' },
      { name: 'SWEATPANTS', href: '/collections/kids-sweatpants' },
      { name: 'SHORTS', href: '/collections/kids-shorts' },
    ],
    'OTHERS': [
      { name: 'SHOES', href: '/collections/kids-shoes' },
    ]
  };

  return (
    <header className="bg-white border-b-2 border-black sticky top-0 z-50">
      {/* Top Announcement Bar */}
      <div className="bg-black text-white text-center py-2 text-sm font-medium">
        <p>WINTER SALE - UP TO 70% OFF | FREE SHIPPING ON ORDERS OVER 1000 EGP</p>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/" className="text-2xl md:text-3xl font-bold tracking-tighter">
            MEN'S CLUB
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-sm font-bold hover:text-gray-600 transition-colors">
              HOME
            </Link>
            
            {/* Men Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setMenMenuOpen(true)}
              onMouseLeave={() => setMenMenuOpen(false)}
            >
              <button className="text-sm font-bold hover:text-gray-600 transition-colors flex items-center gap-1">
                MEN <ChevronDown size={16} />
              </button>
              {menMenuOpen && (
                <div className="absolute top-full left-0 bg-white border-2 border-black shadow-xl w-[600px] grid grid-cols-3 gap-8 p-8 animate-slide-down">
                  {Object.entries(menCategories).map(([title, items]) => (
                    <div key={title}>
                      <h3 className="font-bold mb-3 text-xs tracking-wider">{title}</h3>
                      <ul className="space-y-2">
                        {items.map((item) => (
                          <li key={item.name}>
                            <Link 
                              href={item.href}
                              className="text-xs hover:font-bold transition-all"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Kids Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setKidsMenuOpen(true)}
              onMouseLeave={() => setKidsMenuOpen(false)}
            >
              <button className="text-sm font-bold hover:text-gray-600 transition-colors flex items-center gap-1">
                KIDS <ChevronDown size={16} />
              </button>
              {kidsMenuOpen && (
                <div className="absolute top-full left-0 bg-white border-2 border-black shadow-xl w-[600px] grid grid-cols-3 gap-8 p-8 animate-slide-down">
                  {Object.entries(kidsCategories).map(([title, items]) => (
                    <div key={title}>
                      <h3 className="font-bold mb-3 text-xs tracking-wider">{title}</h3>
                      <ul className="space-y-2">
                        {items.map((item) => (
                          <li key={item.name}>
                            <Link 
                              href={item.href}
                              className="text-xs hover:font-bold transition-all"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="/sale" className="text-sm font-bold text-red-600 hover:text-red-700 transition-colors">
              SALE
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search size={20} />
            </button>
            <Link href="/account" className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
              <User size={20} />
            </Link>
            <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t-2 border-black bg-white animate-slide-down">
          <nav className="px-4 py-6 space-y-4">
            <Link 
              href="/" 
              className="block text-sm font-bold hover:bg-gray-100 px-3 py-2 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              HOME
            </Link>
            
            {/* Mobile Men Section */}
            <div>
              <button 
                onClick={() => setMenMenuOpen(!menMenuOpen)}
                className="w-full text-left text-sm font-bold hover:bg-gray-100 px-3 py-2 rounded flex items-center justify-between"
              >
                MEN <ChevronDown size={16} className={menMenuOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
              </button>
              {menMenuOpen && (
                <div className="pl-6 mt-2 space-y-3">
                  {Object.entries(menCategories).map(([title, items]) => (
                    <div key={title}>
                      <h3 className="font-bold text-xs mb-2">{title}</h3>
                      <ul className="space-y-1">
                        {items.map((item) => (
                          <li key={item.name}>
                            <Link 
                              href={item.href}
                              className="text-xs block py-1 hover:font-bold"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Kids Section */}
            <div>
              <button 
                onClick={() => setKidsMenuOpen(!kidsMenuOpen)}
                className="w-full text-left text-sm font-bold hover:bg-gray-100 px-3 py-2 rounded flex items-center justify-between"
              >
                KIDS <ChevronDown size={16} className={kidsMenuOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
              </button>
              {kidsMenuOpen && (
                <div className="pl-6 mt-2 space-y-3">
                  {Object.entries(kidsCategories).map(([title, items]) => (
                    <div key={title}>
                      <h3 className="font-bold text-xs mb-2">{title}</h3>
                      <ul className="space-y-1">
                        {items.map((item) => (
                          <li key={item.name}>
                            <Link 
                              href={item.href}
                              className="text-xs block py-1 hover:font-bold"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/sale" 
              className="block text-sm font-bold text-red-600 hover:bg-red-50 px-3 py-2 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              SALE
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
