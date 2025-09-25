'use client';

import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export default function CartPage() {
  const { state, updateQuantity, removeItem, clearCart } = useCart();

  const handleQuantityChange = (id: string, currentQuantity: number, delta: number) => {
    const newQuantity = currentQuantity + delta;
    if (newQuantity <= 0) {
      removeItem(id);
      toast.success('Item removed from cart');
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemoveItem = (id: string) => {
    removeItem(id);
    toast.success('Item removed from cart');
  };

  const handleClearCart = () => {
    clearCart();
    toast.success('Cart cleared');
  };

  if (state.items.length === 0) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8 py-20">
            <div className="text-center max-w-md mx-auto">
              <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
              <h1 className="text-3xl font-bold font-playfair text-gray-900 mb-4">
                Your Cart is Empty
              </h1>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link href="/shop">
                <Button size="lg" className="luxury-button text-black font-semibold">
                  Start Shopping
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <h1 className="text-4xl font-bold font-playfair gradient-text mb-8">
            Shopping Cart
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {state.items.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-32 h-32 rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {item.name}
                        </h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <p className="text-gray-600 text-sm capitalize mb-4">
                        {item.category}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, item.quantity, -1)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="px-4 py-2 font-semibold">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, item.quantity, 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-lg font-bold text-yellow-600">
                            ${(item.price * item.quantity).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-500">
                            ${item.price.toLocaleString()} each
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="flex justify-between items-center pt-4">
                <Button
                  variant="outline"
                  onClick={handleClearCart}
                  className="text-red-600 border-red-200 hover:bg-red-50"
                >
                  Clear Cart
                </Button>
                
                <Link href="/shop">
                  <Button variant="outline">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal ({state.itemCount} items)</span>
                    <span>${state.total.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${Math.round(state.total * 0.08).toLocaleString()}</span>
                  </div>
                  
                  <hr className="my-4" />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-yellow-600">
                      ${Math.round(state.total * 1.08).toLocaleString()}
                    </span>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full mt-6 luxury-button text-black font-semibold"
                >
                  Proceed to Checkout
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              
              {/* Security Features */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Why Shop With Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Secure Payment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Free Shipping</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">30-Day Returns</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">24/7 Support</span>
                  </div>
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