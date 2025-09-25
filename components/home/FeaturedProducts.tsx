'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product/ProductCard';
import { getFeaturedProducts } from '@/lib/products';
import { ArrowRight } from 'lucide-react';

export const FeaturedProducts: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair gradient-text mb-6">
            Featured Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked selection of premium furniture pieces, 
            each crafted with meticulous attention to detail and royal elegance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        <div className="text-center animate-slide-up">
          <Link href="/shop">
            <Button 
              size="lg" 
              className="luxury-button text-black font-semibold px-8 py-4"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};