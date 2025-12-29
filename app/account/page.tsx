'use client';

import { useState } from 'react';
import { User, Package, MapPin, Heart, Settings } from 'lucide-react';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('profile');

  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+20 123 456 7890'
  };

  const orders = [
    {
      id: 'ORD-001',
      date: '2024-12-20',
      status: 'Delivered',
      total: 3500,
      items: 3
    },
    {
      id: 'ORD-002',
      date: '2024-12-15',
      status: 'In Transit',
      total: 2100,
      items: 2
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl md:text-4xl font-bold uppercase mb-8">My Account</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full text-left px-4 py-3 flex items-center gap-3 font-medium transition-colors ${
                activeTab === 'profile'
                  ? 'bg-black text-white'
                  : 'bg-white border-2 border-gray-200 hover:border-black'
              }`}
            >
              <User size={20} />
              Profile
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`w-full text-left px-4 py-3 flex items-center gap-3 font-medium transition-colors ${
                activeTab === 'orders'
                  ? 'bg-black text-white'
                  : 'bg-white border-2 border-gray-200 hover:border-black'
              }`}
            >
              <Package size={20} />
              Orders
            </button>
            <button
              onClick={() => setActiveTab('addresses')}
              className={`w-full text-left px-4 py-3 flex items-center gap-3 font-medium transition-colors ${
                activeTab === 'addresses'
                  ? 'bg-black text-white'
                  : 'bg-white border-2 border-gray-200 hover:border-black'
              }`}
            >
              <MapPin size={20} />
              Addresses
            </button>
            <button
              onClick={() => setActiveTab('wishlist')}
              className={`w-full text-left px-4 py-3 flex items-center gap-3 font-medium transition-colors ${
                activeTab === 'wishlist'
                  ? 'bg-black text-white'
                  : 'bg-white border-2 border-gray-200 hover:border-black'
              }`}
            >
              <Heart size={20} />
              Wishlist
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full text-left px-4 py-3 flex items-center gap-3 font-medium transition-colors ${
                activeTab === 'settings'
                  ? 'bg-black text-white'
                  : 'bg-white border-2 border-gray-200 hover:border-black'
              }`}
            >
              <Settings size={20} />
              Settings
            </button>
          </nav>
        </aside>

        {/* Content */}
        <div className="lg:col-span-3">
          {activeTab === 'profile' && (
            <div className="border-2 border-gray-200 p-6">
              <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
              <form className="space-y-4">
                <div>
                  <label className="block font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue={user.name}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue={user.email}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    defaultValue={user.phone}
                    className="input-field"
                  />
                </div>
                <button type="submit" className="btn-primary">
                  Save Changes
                </button>
              </form>
            </div>
          )}

          {activeTab === 'orders' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Order History</h2>
              <div className="space-y-4">
                {orders.map(order => (
                  <div key={order.id} className="border-2 border-gray-200 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-lg mb-1">Order #{order.id}</h3>
                        <p className="text-sm text-gray-600">
                          Placed on {new Date(order.date).toLocaleDateString()}
                        </p>
                      </div>
                      <span className={`px-3 py-1 text-sm font-bold ${
                        order.status === 'Delivered'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-gray-600">
                        {order.items} {order.items === 1 ? 'item' : 'items'}
                      </p>
                      <p className="font-bold">
                        {order.total.toFixed(2)} EGP
                      </p>
                    </div>
                    <button className="btn-secondary mt-4">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'addresses' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Saved Addresses</h2>
              <button className="btn-primary mb-6">
                Add New Address
              </button>
              <div className="border-2 border-gray-200 p-6">
                <h3 className="font-bold mb-2">Home Address</h3>
                <p className="text-gray-600 mb-4">
                  123 Main Street<br />
                  Port Said, Egypt<br />
                  12345
                </p>
                <div className="flex gap-2">
                  <button className="btn-secondary text-sm">Edit</button>
                  <button className="text-red-600 hover:text-red-700 text-sm font-bold">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'wishlist' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">My Wishlist</h2>
              <p className="text-gray-600">Your wishlist is empty.</p>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="border-2 border-gray-200 p-6">
              <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-3">Change Password</h3>
                  <form className="space-y-3">
                    <input
                      type="password"
                      placeholder="Current Password"
                      className="input-field"
                    />
                    <input
                      type="password"
                      placeholder="New Password"
                      className="input-field"
                    />
                    <input
                      type="password"
                      placeholder="Confirm New Password"
                      className="input-field"
                    />
                    <button type="submit" className="btn-primary">
                      Update Password
                    </button>
                  </form>
                </div>
                <div className="border-t-2 border-gray-200 pt-6">
                  <h3 className="font-bold mb-3 text-red-600">Danger Zone</h3>
                  <button className="bg-red-600 text-white px-6 py-3 font-bold hover:bg-red-700 transition-colors">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
