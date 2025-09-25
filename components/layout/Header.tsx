'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react';
import { AuthModal } from '@/components/auth/AuthModal';

export const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const { state } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg md:text-xl">R</span>
            </div>
            <span className="text-xl md:text-2xl font-bold font-playfair gradient-text hidden sm:block">
              Royalwood
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-yellow-600 transition-colors duration-300 font-medium text-base"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-1 md:space-x-3">
            {/* Search - Hidden on mobile */}
            <Button variant="ghost" size="sm" className="hidden md:flex p-2">
              <Search className="w-5 h-5" />
            </Button>

            {/* Cart */}
            <Link href="/cart">
              <Button variant="ghost" size="sm" className="relative p-2">
                <ShoppingCart className="w-5 h-5" />
                {state.itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {state.itemCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* User Account */}
            {user ? (
              <div className="relative group">
                <Button variant="ghost" size="sm" className="p-2">
                  <User className="w-5 h-5" />
                  <span className="hidden lg:inline ml-2 max-w-20 truncate">{user.name}</span>
                </Button>
                <div className="absolute right-0 mt-2 w-48 glass-dark rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <Link
                    href="/profile"
                    className="block px-4 py-3 text-white hover:bg-white/20 rounded-t-lg transition-colors text-sm"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/orders"
                    className="block px-4 py-3 text-white hover:bg-white/20 transition-colors text-sm"
                  >
                    Orders
                  </Link>
                  {user.isAdmin && (
                    <Link
                      href="/admin"
                      className="block px-4 py-3 text-white hover:bg-white/20 transition-colors text-sm"
                    >
                      Admin
                    </Link>
                  )}
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-3 text-white hover:bg-white/20 rounded-b-lg transition-colors text-sm"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="sm" 
                className="p-2"
                onClick={() => setIsAuthModalOpen(true)}
              >
                <User className="w-5 h-5" />
                <span className="hidden lg:inline ml-2">Login</span>
              </Button>
            )}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-2 ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20 animate-slide-up bg-white/95 backdrop-blur-md rounded-b-2xl">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-yellow-600 transition-colors duration-300 font-medium py-3 px-2 rounded-lg hover:bg-yellow-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-200 mt-2">
                <Link
                  href="/cart"
                  className="text-gray-700 hover:text-yellow-600 transition-colors duration-300 font-medium py-3 px-2 rounded-lg hover:bg-yellow-50 flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Cart ({state.itemCount})
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </header>
  );
};