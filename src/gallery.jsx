import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { X, Menu, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const MySalonGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery', active: true },
    { name: 'Features', href: '/features' },
    { name: 'Contact', href: '/contact' }
  ];

  
  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'hair', name: 'Hair Services' },
    { id: 'makeup', name: 'Makeup Services' },
    { id: 'bridal', name: 'Bridal' },
    { id: 'facial', name: 'Facial Treatments' },
    { id: 'body', name: 'Body Treatments' },
    { id: 'nails', name: 'Nail Care' },
    { id: 'special', name: 'Special Treatments' }
  ];

  const galleryImages = [
    { id: 1, category: 'hair', title: 'Elegant Updo Styling', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800' },
    { id: 2, category: 'makeup', title: 'Professional Makeup', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800' },
    { id: 3, category: 'bridal', title: 'Bridal Beauty Package', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800' },
    { id: 4, category: 'hair', title: 'Hair Coloring & Cut', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800' },
    { id: 5, category: 'special', title: 'Spa Relaxation', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800' },
    { id: 6, category: 'makeup', title: 'Natural Glow Makeup', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800' },
    { id: 7, category: 'nails', title: 'Creative Nail Design', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800' },
    { id: 8, category: 'bridal', title: 'Wedding Day Look', image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800' },
    { id: 9, category: 'hair', title: 'Balayage Excellence', image: 'https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=800' },
    { id: 10, category: 'makeup', title: 'Evening Glamour', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800' },
    { id: 11, category: 'facial', title: 'Facial Treatment', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800' },
    { id: 12, category: 'nails', title: 'French Manicure', image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800' },
    { id: 13, category: 'hair', title: 'Beach Wave Styling', image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800' },
    { id: 14, category: 'bridal', title: 'Traditional Bridal', image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800' },
    { id: 15, category: 'makeup', title: 'Smokey Eye Look', image: 'https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?w=800' },
    { id: 16, category: 'hair', title: 'Platinum Blonde', image: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800' },
    { id: 17, category: 'body', title: 'Body Massage', image: 'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=800' },
    { id: 18, category: 'nails', title: 'Gel Polish Art', image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800' },
    { id: 19, category: 'facial', title: 'Anti-Aging Treatment', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800' },
    { id: 20, category: 'special', title: 'Aromatherapy Session', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
 

      {/* Main Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-serif text-stone-800 tracking-tight"><Link to="/" >MySalon</Link></h1>
              <p className="text-xs text-stone-500 tracking-widest uppercase">Beauty & Wellness</p>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    link.active
                      ? 'text-amber-600'
                      : 'text-neutral-700 hover:text-amber-600'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-neutral-700 hover:text-amber-600"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden py-1 border-t border-neutral-200">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block py-3 px-1 text-x font-medium transition-colors ${
                    link.active
                      ? 'text-amber-600 '
                      : 'text-neutral-700 hover:text-amber-600 '
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 animate-float">
            <Sparkles className="w-12 h-12 text-amber-600" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-neutral-800 mb-4">
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
            Explore our portfolio of exceptional beauty transformations and discover the artistry behind every service we provide
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  opacity: 0
                }}
                onClick={() => setLightboxImage(image)}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-medium text-lg mb-1">
                      {image.title}
                    </h3>
                    <p className="text-neutral-300 text-sm capitalize">
                      {image.category}
                    </p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 shadow-md">
                  <span className="text-xs font-medium text-amber-600 capitalize">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-neutral-600 text-lg">No images found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors p-2 bg-black/50 rounded-full"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <img
              src={lightboxImage.image}
              alt={lightboxImage.title}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="text-center mt-6 bg-white/10 backdrop-blur-md rounded p-6">
              <h3 className="text-white text-2xl font-medium mb-2">
                {lightboxImage.title}
              </h3>
              <p className="text-neutral-300 capitalize text-lg">
                {lightboxImage.category}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-neutral-800 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-neutral-600 mb-10 text-lg">
            Ready to experience exceptional beauty services? Book your appointment today and let our expert team create your perfect look
          </p>
          <button className="bg-amber-600 text-white px-12 py-4 font-medium hover:bg-amber-700 transition-all duration-300 shadow-md hover:shadow-lg">
            Send Message
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* MySalon Info */}
            <div>
              <h3 className="text-2xl font-serif text-white mb-4">MySalon</h3>
              <p className="text-neutral-400 leading-relaxed mb-4">
                Your destination for beauty and relaxation. Experience world-class services in an elegant environment.
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-neutral-400">Opening Hours:</p>
                <p className="text-white">Monday - Saturday</p>
                <p className="text-neutral-400">8:00 AM - 9:00 PM</p>
                <p className="text-white">Sunday</p>
                <p className="text-neutral-400">9:00 AM - 6:00 PM (Sunday Closed)</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-medium text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#home" className="text-neutral-400 hover:text-amber-500 transition-colors">Home</a></li>
                <li><a href="#about" className="text-neutral-400 hover:text-amber-500 transition-colors">About</a></li>
                <li><a href="#services" className="text-neutral-400 hover:text-amber-500 transition-colors">Services</a></li>
                <li><a href="#gallery" className="text-neutral-400 hover:text-amber-500 transition-colors">Gallery</a></li>
                <li><a href="#features" className="text-neutral-400 hover:text-amber-500 transition-colors">Features</a></li>
                <li><a href="#contact" className="text-neutral-400 hover:text-amber-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Connect With Us */}
            <div>
              <h4 className="text-white font-medium text-lg mb-6">Connect With Us</h4>
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-400">121 Wallstreet Street, New York, USA 10005</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span className="text-neutral-400">+1 234-567-8900</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span className="text-neutral-400">mysalon@email.com</span>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-6">
                <a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-neutral-500 text-sm text-center">
              © 2024 - MySalon. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default MySalonGallery;