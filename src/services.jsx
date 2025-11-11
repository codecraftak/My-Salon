import React from "react";
import { Link } from "react-router-dom";
import {
  Scissors,
  Sparkles,
  Droplet,
  Heart,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  MapPin,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Scissors className="w-8 h-8 text-orange-500" />,
      title: "Hair Styling",
      desc: "Trendy cuts, blowouts, and transformations tailored to your personality.",
      price: "₹1,200 - ₹3,000",
      img: "https://media.istockphoto.com/id/1783214748/photo/processional-hair-dresser-styling-hair-of-young-woman-in-beauty-salon.webp?a=1&b=1&s=612x612&w=0&k=20&c=EgObyxMYi6VIglucmd6zbjtU_gpq1VFQE7-BElC2HVQ=",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-orange-500" />,
      title: "Facial Treatments",
      desc: "Rejuvenate your skin with our luxury facials and advanced skincare.",
      price: "₹1,000 - ₹2,500",
      img: "https://images.unsplash.com/photo-1731514771613-991a02407132?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Fsb24lMjBmYWNpYWwlMjB0cmVhdG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
    },
    {
      icon: <Droplet className="w-8 h-8 text-orange-500" />,
      title: "Hair Spa",
      desc: "Nourish and repair your hair with deep-conditioning spa treatments.",
      price: "₹800 - ₹1,800",
      img: "https://plus.unsplash.com/premium_photo-1661672325251-683e6f7dea00?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2Fsb24lMjBoYWlyJTIwc3BhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000",
    },
    {
      icon: <Heart className="w-8 h-8 text-orange-500" />,
      title: "Bridal Makeup",
      desc: "Look radiant on your big day with personalized bridal beauty packages.",
      price: "₹5,000 - ₹12,000",
      img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1000",
    },
  ];

  return (
    <div className="bg-white text-neutral-800">
      

      {/* Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-serif text-neutral-800">
            MySalon
          </h1>
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
                              item.name === "Services"
                                ? "text-orange-600"
                                : "text-neutral-700 hover:text-orange-600"
                            } transition-colors`}
                          >
                            {item.name}
                          </Link>
                        )
                      )}
                    </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNhbG9uJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000')] bg-cover bg-center h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h2 className="relative text-white text-4xl sm:text-5xl font-serif font-semibold text-center">
          Our Premium Services
        </h2>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-3xl font-semibold mb-10 text-center text-neutral-900">
          Pamper Yourself with the Best
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white shadow hover:shadow-lg rounded-2xl overflow-hidden transition-shadow"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 text-center">
                <div className="flex justify-center mb-3">{service.icon}</div>
                <h4 className="text-lg font-semibold text-orange-600 mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed mb-3">
                  {service.desc}
                </p>
                <p className="text-sm font-medium text-neutral-800">
                  <span className="text-orange-500">{service.price}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-neutral-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-semibold mb-6 text-neutral-900">
            Our Expertise
          </h3>
          <p className="max-w-3xl mx-auto text-neutral-600 leading-relaxed mb-10">
            With years of experience and top-rated professionals, MySalon
            ensures every client enjoys unmatched quality and comfort. Our team
            continually trains in the latest beauty trends, technology, and
            styling methods to give you the best possible care.
          </p>

          <button className="px-6 py-3 bg-orange-600 text-white rounded-full shadow hover:bg-orange-700 transition-all">
            Book Appointment
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300 pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">MySalon</h3>
            <p className="text-sm leading-relaxed">
              Elevate your look with our luxury salon services and expert
              stylists — where beauty meets perfection.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-orange-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-orange-500">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-orange-500">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-orange-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Contact Us</h4>
            <p className="text-sm flex items-center space-x-2 mb-2">
              <MapPin className="w-4 h-4 text-orange-500" />
              <span>123 Beauty Street, New York</span>
            </p>
            <p className="text-sm flex items-center space-x-2 mb-2">
              <Phone className="w-4 h-4 text-orange-500" />
              <span>+1 234-567-8900</span>
            </p>
            <p className="text-sm flex items-center space-x-2 mb-2">
              <Mail className="w-4 h-4 text-orange-500" />
              <span>info@mysalon.com</span>
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-orange-500">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-orange-500">
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
