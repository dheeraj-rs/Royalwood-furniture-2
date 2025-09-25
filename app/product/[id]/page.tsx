'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { getProductById, products } from '@/lib/products';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Heart, Share2, Star, Minus, Plus, Shield, Truck, RotateCcw } from 'lucide-react';
import { toast } from 'sonner';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: { id: string };
}

// Generate static params for all products
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category
      });
    }
    toast.success(`Added ${quantity} item(s) to cart!`);
  };

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 glass">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index
                        ? 'border-yellow-500 scale-105'
                        : 'border-gray-200 hover:border-gray-300 hover:scale-102'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <span className="text-sm text-gray-500 uppercase tracking-wide">
                    {product.category}
                  </span>
                  {product.inStock ? (
                    <span className="text-green-600 text-sm font-medium bg-green-50 px-3 py-1 rounded-full">
                      In Stock
                    </span>
                  ) : (
                    <span className="text-red-600 text-sm font-medium bg-red-50 px-3 py-1 rounded-full">
                      Out of Stock
                    </span>
                  )}
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold font-playfair text-gray-900 mb-4 leading-tight">
                  {product.name}
                </h1>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 md:w-5 md:h-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-gray-600 text-sm md:text-base">
                      {product.rating} ({product.reviewCount} reviews)
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl md:text-4xl font-bold text-yellow-600">
                    ${product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl md:text-2xl text-gray-400 line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <span className="text-lg font-semibold">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-lg w-fit">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity <= 1}
                      className="h-10 w-10"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="px-4 py-2 text-lg font-semibold min-w-[3rem] text-center">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleQuantityChange(1)}
                      disabled={quantity >= 10}
                      className="h-10 w-10"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <Button
                    size="lg"
                    className="luxury-button text-black font-semibold w-full h-12"
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="mr-2 w-5 h-5" />
                    Add to Cart
                  </Button>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Button size="lg" variant="outline" className="h-12">
                      <Heart className="mr-2 w-4 h-4" />
                      Wishlist
                    </Button>
                    
                    <Button size="lg" variant="outline" className="h-12">
                      <Share2 className="mr-2 w-4 h-4" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center space-x-3 p-4 glass rounded-lg">
                  <Shield className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Warranty</div>
                    <div className="text-sm text-gray-600">2 Year Coverage</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 glass rounded-lg">
                  <Truck className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Free Delivery</div>
                    <div className="text-sm text-gray-600">Within 7 days</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 glass rounded-lg">
                  <RotateCcw className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Easy Returns</div>
                    <div className="text-sm text-gray-600">30 Day Policy</div>
                  </div>
                </div>
              </div>

              {/* Product Tags */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 rounded-full text-sm capitalize font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}