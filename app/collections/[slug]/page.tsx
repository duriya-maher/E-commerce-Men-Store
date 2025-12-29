'use client';

import { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import ProductCard from '@/app/components/ProductCard';
import { products } from '@/app/lib/products';
import { collections } from '@/app/lib/collections';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';

export default function CollectionPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const collection = collections.find(c => c.slug === slug);
  const collectionProducts = products.filter(p => 
    p.subcategory === slug || 
    (slug === 'all' ? true : false) ||
    (slug === 'new-arrivals' ? p.featured : false)
  );

  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Get unique sizes and colors
  const availableSizes = useMemo(() => {
    const sizes = new Set<string>();
    collectionProducts.forEach(p => p.sizes.forEach(s => sizes.add(s)));
    return Array.from(sizes).sort();
  }, [collectionProducts]);

  const availableColors = useMemo(() => {
    const colors = new Set<string>();
    collectionProducts.forEach(p => p.colors.forEach(c => colors.add(c)));
    return Array.from(colors).sort();
  }, [collectionProducts]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...collectionProducts];

    // Filter by price
    filtered = filtered.filter(p => {
      const price = p.salePrice || p.price;
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Filter by size
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(p => 
        p.sizes.some(s => selectedSizes.includes(s))
      );
    }

    // Filter by color
    if (selectedColors.length > 0) {
      filtered = filtered.filter(p => 
        p.colors.some(c => selectedColors.includes(c))
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
        break;
      case 'price-desc':
        filtered.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
        break;
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Keep featured order
        break;
    }

    return filtered;
  }, [collectionProducts, sortBy, priceRange, selectedSizes, selectedColors]);

  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const clearFilters = () => {
    setSelectedSizes([]);
    setSelectedColors([]);
    setPriceRange([0, 10000]);
  };

  if (!collection && slug !== 'all' && slug !== 'new-arrivals') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Collection Not Found</h1>
        <p className="text-gray-600">The collection you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold uppercase mb-2">
          {collection?.name || (slug === 'all' ? 'All Products' : 'New Arrivals')}
        </h1>
        {collection?.description && (
          <p className="text-gray-600">{collection.description}</p>
        )}
        <p className="text-sm text-gray-500 mt-2">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
        </p>
      </div>

      {/* Filters and Sort Bar */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-gray-200">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 font-bold text-sm"
        >
          <SlidersHorizontal size={18} />
          Filters
          {(selectedSizes.length > 0 || selectedColors.length > 0) && (
            <span className="bg-black text-white text-xs px-2 py-1 rounded-full">
              {selectedSizes.length + selectedColors.length}
            </span>
          )}
        </button>

        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm font-medium">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border-2 border-gray-300 px-3 py-2 text-sm font-medium focus:border-black focus:outline-none"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Sidebar Filters */}
        {showFilters && (
          <aside className="w-64 flex-shrink-0 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              {/* Clear Filters */}
              {(selectedSizes.length > 0 || selectedColors.length > 0) && (
                <button
                  onClick={clearFilters}
                  className="text-sm font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
                >
                  <X size={16} /> Clear All Filters
                </button>
              )}

              {/* Size Filter */}
              {availableSizes.length > 0 && (
                <div>
                  <h3 className="font-bold mb-3 flex items-center justify-between">
                    SIZE
                    {selectedSizes.length > 0 && (
                      <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                        {selectedSizes.length}
                      </span>
                    )}
                  </h3>
                  <div className="grid grid-cols-4 gap-2">
                    {availableSizes.map(size => (
                      <button
                        key={size}
                        onClick={() => toggleSize(size)}
                        className={`border-2 py-2 text-sm font-medium transition-colors ${
                          selectedSizes.includes(size)
                            ? 'border-black bg-black text-white'
                            : 'border-gray-300 hover:border-black'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Filter */}
              {availableColors.length > 0 && (
                <div>
                  <h3 className="font-bold mb-3 flex items-center justify-between">
                    COLOR
                    {selectedColors.length > 0 && (
                      <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                        {selectedColors.length}
                      </span>
                    )}
                  </h3>
                  <div className="space-y-2">
                    {availableColors.map(color => (
                      <label
                        key={color}
                        className="flex items-center gap-2 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={selectedColors.includes(color)}
                          onChange={() => toggleColor(color)}
                          className="w-4 h-4 accent-black"
                        />
                        <span className="text-sm group-hover:font-medium">
                          {color}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Price Range */}
              <div>
                <h3 className="font-bold mb-3">PRICE RANGE</h3>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-black"
                  />
                  <div className="flex justify-between text-sm">
                    <span>0 EGP</span>
                    <span>{priceRange[1]} EGP</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        )}

        {/* Products Grid */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 mb-4">
                No products found matching your filters.
              </p>
              <button
                onClick={clearFilters}
                className="btn-secondary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
