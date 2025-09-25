'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Award, Users, Globe, Heart, Star, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: '25+', label: 'Years Experience' },
    { number: '10,000+', label: 'Happy Customers' },
    { number: '500+', label: 'Premium Products' },
    { number: '50+', label: 'Countries Served' }
  ];

  const team = [
    {
      name: 'Robert Wood',
      role: 'Founder & Master Craftsman',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      bio: 'With over 30 years of experience, Robert founded Royalwood with a vision to create timeless furniture pieces.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
      bio: 'Sarah leads our design team, bringing modern aesthetics to traditional craftsmanship techniques.'
    },
    {
      name: 'Michael Chen',
      role: 'Quality Director',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      bio: 'Michael ensures every piece meets our rigorous quality standards before reaching our customers.'
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg"
              alt="About Royalwood"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          </div>
          
          <div className="relative container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-playfair gradient-text mb-6">
              About Royalwood
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Crafting luxury furniture for over 25 years, we transform spaces 
              into royal sanctuaries with our commitment to excellence and artistry.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="glass rounded-2xl p-6 md:p-8 hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold font-playfair gradient-text mb-6">
                  Our Mission
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                  At Royalwood, we believe that furniture is more than just functional pieces – 
                  it's an expression of your personality and a reflection of your lifestyle.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our mission is to create exceptional furniture that combines traditional 
                  craftsmanship with contemporary design, ensuring each piece becomes a 
                  treasured part of your home for generations to come.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Handcrafted with premium materials</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Sustainable and eco-friendly practices</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Lifetime craftsmanship guarantee</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                  alt="Craftsmanship"
                  className="w-full h-48 md:h-64 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg"
                  alt="Quality"
                  className="w-full h-48 md:h-64 object-cover rounded-2xl shadow-lg mt-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-playfair gradient-text mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide every decision we make and every piece we create
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="glass rounded-2xl p-8 h-full hover:scale-105 transition-all duration-300">
                  <Award className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold font-playfair mb-4">Excellence</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We pursue perfection in every detail, from material selection 
                    to final finishing touches.
                  </p>
                </div>
              </div>

              <div className="text-center group">
                <div className="glass rounded-2xl p-8 h-full hover:scale-105 transition-all duration-300">
                  <Heart className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold font-playfair mb-4">Passion</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our love for craftsmanship drives us to create furniture 
                    that inspires and delights.
                  </p>
                </div>
              </div>

              <div className="text-center group">
                <div className="glass rounded-2xl p-8 h-full hover:scale-105 transition-all duration-300">
                  <Users className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold font-playfair mb-4">Community</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We build lasting relationships with customers, artisans, 
                    and partners worldwide.
                  </p>
                </div>
              </div>

              <div className="text-center group">
                <div className="glass rounded-2xl p-8 h-full hover:scale-105 transition-all duration-300">
                  <Globe className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold font-playfair mb-4">Sustainability</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We're committed to responsible practices that protect 
                    our planet for future generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-playfair gradient-text mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The passionate individuals behind every Royalwood masterpiece
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="group">
                  <div className="glass rounded-2xl p-6 md:p-8 text-center hover:scale-105 transition-all duration-300">
                    <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 rounded-full overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold font-playfair mb-2">
                      {member.name}
                    </h3>
                    <p className="text-yellow-600 font-semibold mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-playfair gradient-text mb-6">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real stories from satisfied customers who chose Royalwood
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass rounded-2xl p-6 md:p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "The quality of Royalwood furniture is exceptional. Every piece 
                  in our home tells a story of craftsmanship and elegance."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">Emma Thompson</div>
                    <div className="text-sm text-gray-500">Interior Designer</div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 md:p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Outstanding customer service and beautiful furniture. 
                  Royalwood has transformed our living space completely."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">James Wilson</div>
                    <div className="text-sm text-gray-500">Homeowner</div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 md:p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "The attention to detail and premium materials make 
                  Royalwood furniture worth every penny. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">Maria Garcia</div>
                    <div className="text-sm text-gray-500">Architect</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-playfair gradient-text mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover our collection of premium furniture and experience 
              the Royalwood difference in your home.
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