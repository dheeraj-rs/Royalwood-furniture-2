'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, VolumeX, Maximize, Award, Users, Globe, Heart } from 'lucide-react';

export default function StoryPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero Video Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg"
              alt="Royalwood Story"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          </div>

          {/* Video Player Overlay */}
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <div className="glass-dark rounded-3xl p-8 md:p-12 mb-8">
              <h1 className="text-4xl md:text-6xl font-bold font-playfair gradient-text mb-6">
                Our Story
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Discover the journey of craftsmanship, passion, and dedication that built Royalwood into a symbol of luxury furniture.
              </p>
              
              {/* Video Player Controls */}
              <div className="bg-black/50 rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <Button
                    size="lg"
                    onClick={togglePlay}
                    className="luxury-button text-black font-semibold w-16 h-16 rounded-full p-0"
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                  </Button>
                </div>
                
                <div className="flex items-center justify-center space-x-4 text-white">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleMute}
                    className="text-white hover:text-yellow-400"
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </Button>
                  
                  <div className="flex-1 max-w-md">
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full w-1/3 transition-all duration-300"></div>
                    </div>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:text-yellow-400"
                  >
                    <Maximize className="w-5 h-5" />
                  </Button>
                </div>
                
                <div className="text-center text-gray-300 text-sm mt-4">
                  {isPlaying ? 'Now Playing' : 'Paused'} • 3:45 / 12:30
                </div>
              </div>
              
              <p className="text-gray-300 text-lg">
                Experience 25 years of furniture craftsmanship in this exclusive documentary
              </p>
            </div>
          </div>
        </section>

        {/* Story Content */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold font-playfair gradient-text mb-6">
                  The Royalwood Legacy
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  From humble beginnings to becoming a symbol of luxury furniture, 
                  our journey is one of passion, dedication, and unwavering commitment to excellence.
                </p>
              </div>

              {/* Timeline */}
              <div className="space-y-12 md:space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <div className="glass rounded-2xl p-6 md:p-8">
                      <div className="text-yellow-600 font-bold text-lg mb-2">1999</div>
                      <h3 className="text-2xl md:text-3xl font-bold font-playfair mb-4">The Beginning</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Founded by master craftsman Robert Wood in a small workshop, 
                        Royalwood began with a simple vision: to create furniture that 
                        combines traditional craftsmanship with modern elegance.
                      </p>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <img
                      src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg"
                      alt="Workshop"
                      className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img
                      src="https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg"
                      alt="Expansion"
                      className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                  <div>
                    <div className="glass rounded-2xl p-6 md:p-8">
                      <div className="text-yellow-600 font-bold text-lg mb-2">2010</div>
                      <h3 className="text-2xl md:text-3xl font-bold font-playfair mb-4">Global Expansion</h3>
                      <p className="text-gray-600 leading-relaxed">
                        After a decade of growth, Royalwood expanded internationally, 
                        bringing our luxury furniture to discerning customers worldwide 
                        while maintaining our commitment to quality and craftsmanship.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <div className="glass rounded-2xl p-6 md:p-8">
                      <div className="text-yellow-600 font-bold text-lg mb-2">2024</div>
                      <h3 className="text-2xl md:text-3xl font-bold font-playfair mb-4">Digital Innovation</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Today, Royalwood combines traditional craftsmanship with 
                        cutting-edge technology, offering customers an immersive 
                        digital experience while preserving our artisanal heritage.
                      </p>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <img
                      src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                      alt="Modern Showroom"
                      className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-playfair gradient-text mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do at Royalwood
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="glass rounded-2xl p-8 h-full hover:scale-105 transition-transform duration-300">
                  <Award className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold font-playfair mb-4">Excellence</h3>
                  <p className="text-gray-600">
                    We strive for perfection in every piece we create, 
                    ensuring the highest quality standards.
                  </p>
                </div>
              </div>

              <div className="text-center group">
                <div className="glass rounded-2xl p-8 h-full hover:scale-105 transition-transform duration-300">
                  <Heart className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold font-playfair mb-4">Passion</h3>
                  <p className="text-gray-600">
                    Our love for craftsmanship drives us to create 
                    furniture that tells a story.
                  </p>
                </div>
              </div>

              <div className="text-center group">
                <div className="glass rounded-2xl p-8 h-full hover:scale-105 transition-transform duration-300">
                  <Users className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold font-playfair mb-4">Community</h3>
                  <p className="text-gray-600">
                    We believe in building lasting relationships 
                    with our customers and craftsmen.
                  </p>
                </div>
              </div>

              <div className="text-center group">
                <div className="glass rounded-2xl p-8 h-full hover:scale-105 transition-transform duration-300">
                  <Globe className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold font-playfair mb-4">Sustainability</h3>
                  <p className="text-gray-600">
                    We're committed to responsible sourcing 
                    and environmental stewardship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-playfair gradient-text mb-6">
              Be Part of Our Story
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have made Royalwood 
              furniture a part of their homes and lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="luxury-button text-black font-semibold px-8">
                Explore Collection
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black px-8">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}