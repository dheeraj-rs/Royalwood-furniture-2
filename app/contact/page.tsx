'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg"
              alt="Contact Royalwood"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          </div>
          
          <div className="relative container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-playfair gradient-text mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Get in touch with our team. We're here to help you find the perfect 
              furniture for your space.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="glass rounded-2xl p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold font-playfair gradient-text mb-6">
                    Send us a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 123-4567"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="product">Product Information</option>
                          <option value="order">Order Support</option>
                          <option value="custom">Custom Design</option>
                          <option value="warranty">Warranty Claim</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us how we can help you..."
                        required
                        rows={6}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full luxury-button text-black font-semibold"
                    >
                      <Send className="mr-2 w-5 h-5" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="glass rounded-2xl p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold font-playfair gradient-text mb-6">
                    Get in Touch
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Visit Our Showroom</h3>
                        <p className="text-gray-600">
                          123 Furniture Boulevard<br />
                          Design District, NY 10001<br />
                          United States
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                        <p className="text-gray-600">
                          Sales: +1 (555) 123-4567<br />
                          Support: +1 (555) 123-4568<br />
                          Toll-free: 1-800-ROYALWOOD
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                        <p className="text-gray-600">
                          General: info@royalwood.com<br />
                          Sales: sales@royalwood.com<br />
                          Support: support@royalwood.com
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 7:00 PM<br />
                          Saturday: 10:00 AM - 6:00 PM<br />
                          Sunday: 12:00 PM - 5:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="glass rounded-2xl p-6 md:p-8">
                  <h3 className="text-xl font-bold font-playfair mb-4">Find Us</h3>
                  <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p>Interactive Map</p>
                      <p className="text-sm">123 Furniture Boulevard, NY</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-playfair gradient-text mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Quick answers to common questions about our products and services
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-3">How long does delivery take?</h3>
                <p className="text-gray-600">
                  Standard delivery takes 5-7 business days for in-stock items. Custom pieces 
                  may take 4-6 weeks depending on the complexity of the design.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-3">Do you offer custom furniture design?</h3>
                <p className="text-gray-600">
                  Yes! We specialize in custom furniture design. Our team works closely with 
                  you to create pieces that perfectly match your vision and space requirements.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-3">What is your return policy?</h3>
                <p className="text-gray-600">
                  We offer a 30-day return policy for all standard items in original condition. 
                  Custom pieces are non-returnable but come with our satisfaction guarantee.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-3">Do you provide assembly service?</h3>
                <p className="text-gray-600">
                  Yes, we offer professional assembly service for an additional fee. Our trained 
                  technicians ensure your furniture is assembled correctly and safely.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}