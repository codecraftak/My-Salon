import React, {useState} from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Menu,
  X,
  Clock,
} from "lucide-react";

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="bg-white text-neutral-800">
      
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex-shrink-0">
              <h1 className="text-3xl font-serif text-stone-800 tracking-tight"><Link to="/" >MySalon</Link></h1>
              <p className="text-xs text-stone-500 tracking-widest uppercase">Beauty & Wellness</p>
            </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {[
                { name: "Home", to: "/" },
                { name: "About", to: "/about" },
                { name: "Services", to: "/services" },
                { name: "Gallery", to: "/gallery" },
                { name: "Features", to: "/features" },
                { name: "Contact", to: "/contact" },
                
            ].map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`text-sm font-medium ${
                    item.name === "About"
                      ? "text-amber-600"
                      : "text-neutral-700 hover:text-amber-600"
                  } transition-colors`}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>
          {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-neutral-700 hover:text-amber-600"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
        </div>
        
        {/* Mobile Menu */}
          {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-neutral-200 shadow-md">
            <nav className="px-4 py-4 space-y-6">
              {[
                { name: "Home", to: "/" },
                { name: "About", to: "/about" },
                { name: "Services", to: "/services" },
                { name: "Gallery", to: "/gallery" },
                { name: "Features", to: "/features" },
                { name: "Contact", to: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`block text-base font-medium ${
                    item.name === "About"
                      ? "text-amber-600"
                      : "text-neutral-700 hover:text-amber-600"
                    } transition-colors`}
                  onClick={() => setMobileMenuOpen(false)}
                > 
                  {item.name}
                </Link>
              ))}
            </nav>

          </div>
          )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1631408946577-25526c0d307e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWJvdXQlMjBzYWxvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000')] bg-cover bg-center h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h2 className="relative text-white text-4xl sm:text-5xl font-serif font-semibold text-center">
          About MySalon
        </h2>
      </section>

      {/* About Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-semibold mb-4 text-neutral-900">
              Experience the Essence of Luxury
            </h3>
            <p className="text-neutral-600 leading-relaxed mb-4">
              At <strong>MySalon</strong>, we believe that beauty is more than
              appearance — it’s an experience. Our mission is to bring out your
              natural elegance with the perfect blend of luxury, creativity, and
              care. Founded with passion and precision, MySalon has become a
              trusted destination for clients seeking world-class hair, skin,
              and wellness services.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              With a team of expert stylists, professional aestheticians, and
              certified beauty experts, we ensure each treatment is customized
              to your personality and lifestyle. From premium hair styling to
              rejuvenating facials, our services are crafted to give you a
              truly indulgent experience.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Step into our serene, modern salon and let our professionals
              redefine your beauty journey. MySalon is not just a salon — it’s
              your space to relax, refresh, and rediscover your confidence.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1626379501846-0df4067b8bb9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFib3V0JTIwc2Fsb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000"
              alt="Salon Interior"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-neutral-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-semibold mb-8 text-neutral-900">
            Why Choose MySalon?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expert Professionals",
                desc: "Our experienced team brings skill, creativity, and precision to every service.",
              },
              {
                title: "Luxury Products",
                desc: "We use only top-tier beauty brands to ensure exceptional results.",
              },
              {
                title: "Relaxing Ambience",
                desc: "Designed for comfort and relaxation, your experience is our priority.",
              },
              {
                title: "Personalized Care",
                desc: "We understand your individuality and tailor each service to suit you.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition-shadow"
              >
                <h4 className="text-xl font-semibold text-amber-600 mb-3">
                  {item.title}
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300 pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">MySalon</h3>
            <p className="text-sm leading-relaxed">
              Your destination for beauty and wellness excellence. Experience
              elegance, comfort, and style — all under one roof.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-amber-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-amber-500">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-amber-500">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-amber-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Contact Us</h4>
            <p className="text-sm flex items-center space-x-2 mb-2">
              <MapPin className="w-4 h-4 text-amber-500" />
              <span>123 Beauty Street, New York</span>
            </p>
            <p className="text-sm flex items-center space-x-2 mb-2">
              <Phone className="w-4 h-4 text-amber-500" />
              <span>+1 234-567-8900</span>
            </p>
            <p className="text-sm flex items-center space-x-2 mb-2">
              <Mail className="w-4 h-4 text-amber-500" />
              <span>info@mysalon.com</span>
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-500">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-amber-500">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-amber-500">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-10 pt-6 text-center text-sm">
          © 2025 MySalon. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
