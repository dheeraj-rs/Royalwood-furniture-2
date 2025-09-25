'use client';

import React from 'react';
import Link from 'next/link';
import { Product } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    });
    
    toast.success('Added to cart!');
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success('Added to wishlist!');
  };

  return (
    <Link href={`/product/${product.id}`}>
      <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          
          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="sm"
              variant="secondary"
              className="w-10 h-10 rounded-full p-0 bg-white/90 hover:bg-white"
              onClick={handleWishlist}
            >
              <Heart className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="w-10 h-10 rounded-full p-0 bg-white/90 hover:bg-white"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Sale Badge */}
          {product.originalPrice && (
            <div className="absolute top-4 left-4">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                SALE
              </span>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500 capitalize">{product.category}</span>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-gray-600">{product.rating}</span>
              <span className="text-sm text-gray-400">({product.reviewCount})</span>
            </div>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors">
            {product.name}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-yellow-600">
                ${product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through">
                  ${product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            
            {product.inStock ? (
              <span className="text-green-600 text-sm font-medium">In Stock</span>
            ) : (
              <span className="text-red-600 text-sm font-medium">Out of Stock</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};