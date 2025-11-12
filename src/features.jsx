import React,{useState} from "react";
import { Link } from "react-router-dom";
import {
  Scissors,
  Car,
  Sparkles,
  Star,
  Clock,
  Gift,
  Wifi,
  Heart,
  Shield,
  Menu,
  X,
} from "lucide-react";

export default function Features() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const features = [
    { icon: <Star />, title: "Expert Stylists", desc: "Highly skilled professionals trained with global trends." },
    { icon: <Car />, title: "Free Parking", desc: "Convenient on-site parking for all our valued clients." },
    { icon: <Shield />, title: "Premium Products", desc: "We use only certified and trusted luxury beauty brands." },
    { icon: <Sparkles />, title: "Luxury Ambience", desc: "Relax in our elegant and peaceful environment." },
    { icon: <Clock />, title: "Express Service", desc: "Enjoy high-quality services delivered right on time." },
    { icon: <Gift />, title: "Special Packages", desc: "Exclusive offers and custom beauty plans for every client." },
    { icon: <Wifi />, title: "Free Wi-Fi", desc: "Stay connected while you pamper yourself at MySalon." },
    { icon: <Heart />, title: "Customer Care", desc: "Personalized service designed to meet your every need." },
  ];

    return (
      
    <div className="bg-white text-neutral-800">
              {/* Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-serif text-stone-800 tracking-tight"><Link to="/" >MySalon</Link></h1>
            <p className="text-xs text-stone-500 tracking-widest uppercase">Beauty & Wellness</p>
            </div>
            
           {/* Desktop Navigation */} 
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
                    item.name === "Features"
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
                      item.name === "Features"
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
      <section className="relative bg-[url('https://images.unsplash.com/photo-1706629503603-e47c37722776?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNhbG9uJTIwZmVhdHVyZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000')] bg-cover bg-center h-[55vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h2 className="relative text-white text-4xl sm:text-5xl font-serif font-semibold text-center">
          The MySalon Experience
        </h2>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-3xl font-semibold mb-10 text-center text-neutral-900">
          8 Reasons to Choose Us
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-neutral-200 rounded-xl shadow hover:shadow-lg text-center p-8 transition-all"
            >
              <div className="flex justify-center text-amber-500 mb-4 text-3xl">
                {f.icon}
              </div>
              <h4 className="text-lg font-semibold text-amber-600 mb-2">
                {f.title}
              </h4>
              <p className="text-sm text-neutral-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-50 py-16 text-center">
        <h3 className="text-3xl font-semibold mb-4 text-neutral-900">
          Ready to Experience Luxury?
        </h3>
        <p className="text-neutral-600 mb-6">
          Book your appointment today and let our experts redefine your beauty.
        </p>
        <Link to="/contact"
          className="px-6 py-3 bg-amber-600 text-white rounded-full shadow hover:bg-amber-700 transition-all"
        >
          Book Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-stone-300 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-serif mb-4 text-white">MySalon</h3>
              <p className="text-stone-400">Your destination for beauty and wellness excellence.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-stone-400 hover:text-amber-600 transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-stone-400 hover:text-amber-600 transition-colors">About</Link></li>
                <li><Link to="/services" className="text-stone-400 hover:text-amber-600 transition-colors">Services</Link></li>
                <li><Link to="/contact" className="text-stone-400 hover:text-amber-600 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Connect With Us</h4>
              <p className="text-stone-400 mb-4">Follow us on social media</p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-stone-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-amber-700 transition-colors">
                  <span className="text-white">f</span>
                </div>
                <div className="w-10 h-10 bg-stone-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-amber-700 transition-colors">
                  <span className="text-white">in</span>
                </div>
                <div className="w-10 h-10 bg-stone-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-amber-700 transition-colors">
                  <span className="text-white">tw</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-700 pt-8 text-center text-stone-500">
            <p>© 2024 MySalon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
