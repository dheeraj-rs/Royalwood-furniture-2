'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-2xl font-bold font-playfair gradient-text">
                Royalwood
              </span>
            </div>
            <p className="text-gray-400">
              Crafting premium furniture that transforms your space into a royal sanctuary. 
              Quality, elegance, and craftsmanship in every piece.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors block">
                Home
              </Link>
              <Link href="/shop" className="text-gray-400 hover:text-white transition-colors block">
                Shop
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors block">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors block">
                Contact
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <div className="space-y-2">
              <Link href="/shop?category=sofas" className="text-gray-400 hover:text-white transition-colors block">
                Sofas
              </Link>
              <Link href="/shop?category=chairs" className="text-gray-400 hover:text-white transition-colors block">
                Chairs
              </Link>
              <Link href="/shop?category=tables" className="text-gray-400 hover:text-white transition-colors block">
                Tables
              </Link>
              <Link href="/shop?category=bedroom" className="text-gray-400 hover:text-white transition-colors block">
                Bedroom
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-yellow-500" />
                <span className="text-gray-400">123 Furniture St, Design City</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-yellow-500" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-yellow-500" />
                <span className="text-gray-400">info@royalwood.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Royalwood Furniture. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};