'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
          alt="Luxury Furniture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-full blur-3xl animate-float hidden lg:block" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 rounded-full blur-3xl animate-float animation-delay-2000 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-playfair leading-tight">
              Welcome to{' '}
              <span className="gradient-text block lg:inline">
                Royalwood
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Discover exquisite handcrafted furniture that transforms your space 
              into a royal sanctuary. Where luxury meets craftsmanship.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/shop">
                <Button 
                  size="lg"
                  className="luxury-button text-black font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto"
                >
                  Explore Collection
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              
              <Link href="/story">
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="text-white border-white/20 hover:bg-white/10 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Story
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 md:mt-16 animate-slide-up">
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 mb-1 md:mb-2">500+</div>
              <div className="text-gray-300 text-sm md:text-base">Premium Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 mb-1 md:mb-2">25+</div>
              <div className="text-gray-300 text-sm md:text-base">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 mb-1 md:mb-2">10k+</div>
              <div className="text-gray-300 text-sm md:text-base">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 mb-1 md:mb-2">99%</div>
              <div className="text-gray-300 text-sm md:text-base">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};