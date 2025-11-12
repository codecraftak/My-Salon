import React,{useState} from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Menu,
  X,
} from "lucide-react";

export default function Contact() {
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
                    item.name === "Contact"
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
                    item.name === "Contact"
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
      <section className="relative bg-[url('https://plus.unsplash.com/premium_photo-1669658981858-b2ae0d7581a3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbnRhY3QlMjB1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000')] bg-cover bg-center h-[55vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h2 className="relative text-white text-4xl sm:text-5xl font-serif font-semibold text-center">
          Get In Touch
        </h2>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Contact Info */}
        <div>
          <h3 className="text-3xl font-semibold mb-6 text-neutral-900">
            We'd love to hear from you
          </h3>
          <p className="text-neutral-600 mb-8 leading-relaxed">
            Whether you’re ready to book your appointment, need expert beauty
            advice, or just want to say hello, our team is always happy to
            connect with you.
          </p>

          <ul className="space-y-5 text-neutral-700">
            <li className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-amber-500" />
              <span>123 Beauty Street, New York, NY 10001</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-amber-500" />
              <span>+1 234-567-8900</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-amber-500" />
              <span>info@mysalon.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-amber-500" />
              <span>
                Mon–Sat: 10:00 – 19:00 <br /> Sunday: Closed
              </span>
            </li>
          </ul>
        </div>

        {/* Form */}
        <form className="bg-neutral-50 p-8 rounded-2xl shadow-md">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full border border-neutral-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full border border-neutral-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              rows="4"
              className="w-full border border-neutral-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition-all shadow"
          >
            Send Message
          </button>
        </form>
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
              {["Home", "About", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase()}`}
                    className="hover:text-amber-500"
                  >
                    {link}
                  </Link>
                </li>
              ))}
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
              <Link to="#" className="hover:text-amber-500">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link to="#" className="hover:text-amber-500">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link to="#" className="hover:text-amber-500">
                <Twitter className="w-5 h-5" />
              </Link>
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
