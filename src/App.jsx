import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, Award, Users, Sparkles, Gift, Wifi, Zap, Car, Calendar } from 'lucide-react';
import Gallery from './gallery.jsx';
import { Link } from 'react-router-dom';

const MySalonWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const features = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Expert Team",
      description: "100% certified professionals trained under the highest standards of beauty & styling."
    },
    {
      icon: <Car className="w-12 h-12" />,
      title: "Free Parking",
      description: "Private, secured garage parking with discreet access to the studio."
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Fully Accessible",
      description: "Complete accessibility throughout the studio on all floors."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Free Express Delivery",
      description: "Ordered products and vouchers delivered within one business day."
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Luxurious Ambiance",
      description: "High-quality and tasteful furnishings make your visit a luxurious experience."
    },
    {
      icon: <Gift className="w-12 h-12" />,
      title: "Individual Gift Vouchers",
      description: "Unique and personalized gift vouchers for your loved ones."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "E-Car Charging Station",
      description: "Enjoy your relaxing time while your car charges at our station."
    },
    {
      icon: <Wifi className="w-12 h-12" />,
      title: "Free Wi-Fi",
      description: "Complimentary high-speed internet access throughout the salon."
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Convenient Hours",
      description: "Mon 12:00-18:00, Tue-Fri 09:00-18:00, Thu 09:00-20:00"
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Premium Products",
      description: "Exclusive brands for exceptional results and lasting beauty."
    }
  ];

  const services = [
    {
      category: "Facial Treatments",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop",
      items: [
        { name: "Deep Cleansing Facial", price: "₹899" },
        { name: "Anti-Aging Treatment", price: "₹1299" },
        { name: "Hydrating Facial", price: "₹999" },
        { name: "Acne Treatment", price: "₹1099" },
        { name: "Brightening Facial", price: "₹1199" }
      ]
    },
    {
      category: "Hair Services",
          image:
            "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop",
          items: [
            { name: "Hair Cutting & Styling", price: "₹699" },
            { name: "Hair Coloring", price: "₹1399" },
            { name: "Highlights & Balayage", price: "₹1699" },
            { name: "Hair Treatment", price: "₹999" },
            { name: "Keratin Treatment", price: "₹2499" },
          ],
        },
        {
          category: "Makeup Services",
          image:
            "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=400&fit=crop",
          items: [
            { name: "Bridal Makeup", price: "₹4999" },
            { name: "Party Makeup", price: "₹1999" },
            { name: "Natural Makeup", price: "₹1499" },
            { name: "Professional Makeup", price: "₹2599" },
            { name: "Makeup Lessons", price: "₹1499" },
          ],
        },
        {
          category: "Nail Care",
          image:
            "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop",
          items: [
            { name: "Manicure", price: "₹499" },
            { name: "Pedicure", price: "₹599" },
            { name: "Gel Nails", price: "₹899" },
            { name: "Nail Art", price: "₹699" },
            { name: "Nail Extensions", price: "₹1199" },
          ],
        },
        {
          category: "Body Treatments",
          image:
            "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop",
          items: [
            { name: "Body Massage", price: "₹1299" },
            { name: "Body Scrub", price: "₹999" },
            { name: "Waxing", price: "₹799" },
            { name: "Threading", price: "₹199" },
            { name: "Body Wraps", price: "₹1399" },
          ],
        },
        {
          category: "Special Treatments",
          image:
            "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=600&h=400&fit=crop",
          items: [
            { name: "Microdermabrasion", price: "₹1799" },
            { name: "Chemical Peel", price: "₹1599" },
            { name: "Laser Hair Removal", price: "₹2999" },
            { name: "Eyelash Extensions", price: "₹2199" },
            { name: "Eyebrow Microblading", price: "₹2499" },
          ],
        }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We'll contact you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-serif text-stone-800 tracking-tight">MySalon</h1>
              <p className="text-xs text-stone-500 tracking-widest uppercase">Beauty & Wellness</p>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-stone-700 hover:text-amber-700 transition-colors font-medium">Home</a>
              <a href="#about" className="text-stone-700 hover:text-amber-700 transition-colors font-medium">About</a>
              <a href="#services" className="text-stone-700 hover:text-amber-700 transition-colors font-medium">Services</a>
              <a onClick={() => window.location.href = "/gallery"} className="cursor-pointer text-stone-700 hover:text-amber-700 transition-colors font-medium">Gallery</a>
              <a href="#features" className="text-stone-700 hover:text-amber-700 transition-colors font-medium">Features</a>
              <a href="#contact" className="text-stone-700 hover:text-amber-700 transition-colors font-medium">Contact</a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-stone-800">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-200">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="block py-2 text-stone-700 hover:text-amber-700">Home</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-2 text-stone-700 hover:text-amber-700">About</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block py-2 text-stone-700 hover:text-amber-700">Services</a>
              <a onClick={() => window.location.href = "/gallery"} className="cursor-pointer text-stone-700 hover:text-amber-700 transition-colors font-medium">Gallery</a>
              <a href="#features" onClick={() => setIsMenuOpen(false)} className="block py-2 text-stone-700 hover:text-amber-700">Features</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-2 text-stone-700 hover:text-amber-700">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 h-[60vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-stone-50 to-neutral-100"></div>
        <img 
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&h=1080&fit=crop&q=80" 
          alt="Salon Interior" 
          className="absolute inset-0 w-full h-[60vh] object-cover opacity-50"
        />
        <div className="relative text-center px-4 py-32 max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="w-16 h-px bg-amber-600 mx-auto mb-6"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-stone-800 mb-8 leading-tight">
            World's Best<br />Beauty Salon
          </h2>
          <p className="text-xl md:text-2xl text-white font-light mb-4">
            Professional Excellence,
          </p>
          <p className="text-xl md:text-2xl text-white font-light mb-12">
            First-Class Results
          </p>
          <div className="w-16 h-px bg-amber-600 mx-auto"></div>
        </div>
      </section>

      {/* Exclusive Brands Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-16 h-px bg-amber-600 mx-auto mb-8"></div>
            <h3 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
              Exclusive Brands for Exceptional Results
            </h3>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              We use only the finest premium products from leading beauty brands to ensure outstanding results for every treatment.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&h=600&fit=crop&q=80" 
              alt="Premium Beauty Products" 
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent rounded-lg flex items-end">
              <div className="p-12 w-full">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
                  <div className="text-2xl font-serif">Forest Essentials</div>
                  <div className="text-2xl font-serif">MAC Cosmetics</div>
                  <div className="text-2xl font-serif">L'Oreal Paris</div>
                  <div className="text-2xl font-serif">SUGAR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-amber-50/30 to-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-16 h-px bg-amber-600 mx-auto mb-8"></div>
            <h3 className="text-4xl md:text-5xl font-serif text-stone-800 mb-12">
              The MySalon Experience
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800&h=600&fit=crop&q=80" 
                alt="Luxury Salon Interior" 
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-stone-700 leading-relaxed">
                Welcome to MySalon, where beauty meets excellence. Our salon is dedicated to providing you with the most luxurious and professional beauty experience.
              </p>
              <p className="text-lg text-stone-700 leading-relaxed">
                With years of expertise and a passion for perfection, our team of certified professionals uses cutting-edge techniques and premium products to bring out your natural beauty.
              </p>
              <p className="text-lg text-stone-700 leading-relaxed">
                From the moment you step into our elegant space, you'll experience unparalleled service, attention to detail, and a commitment to making you look and feel absolutely stunning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-16 h-px bg-amber-600 mx-auto mb-8"></div>
            <h3 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
              Our Services
            </h3>
            <p className="text-lg text-stone-600">Comprehensive beauty treatments tailored to your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-stone-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.category}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent"></div>
                  <h4 className="absolute bottom-4 left-4 text-2xl font-serif text-white">
                    {service.category}
                  </h4>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="text-stone-600 flex items-start justify-between text-sm">
                        <div className="flex items-start">
                          <span className="text-amber-600 mr-2 mt-1">•</span>
                          <span>{item.name}</span>
                        </div>
                        <span className="text-amber-700 font-medium">{item.price}</span>
                      </li>
                    ))}

                  </ul>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-b from-stone-50 to-amber-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-16 h-px bg-amber-600 mx-auto mb-8"></div>
            <h3 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
              The 10 Special Features
            </h3>
            <p className="text-lg text-stone-600">Amenities that complete your experience</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white border border-stone-200 rounded-lg p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="text-amber-700 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h4 className="text-base font-semibold text-stone-800 mb-3">
                  {feature.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-16 h-px bg-amber-600 mx-auto mb-8"></div>
            <h3 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
              Get In Touch
            </h3>
            <p className="text-lg text-stone-600">We'd love to hear from you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="text-amber-700 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-stone-800 mb-2">Address</h4>
                  <p className="text-stone-600">123 Beauty Street, Salon District<br />New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="text-amber-700 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-stone-800 mb-2">Phone</h4>
                  <p className="text-stone-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="text-amber-700 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-stone-800 mb-2">Email</h4>
                  <p className="text-stone-600">info@mysalon.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="text-amber-700 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-stone-800 mb-2">Opening Hours</h4>
                  <p className="text-stone-600">
                    Monday: 12:00 - 18:00<br />
                    Tuesday - Friday: 09:00 - 18:00<br />
                    Thursday: 09:00 - 20:00<br />
                    Saturday: 10:00 - 16:00<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-lg p-8">
              <div className="space-y-4">
                <div>
                  <label className="block text-stone-800 font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded border border-stone-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition-all bg-white" 
                    placeholder="Your name" 
                  />
                </div>
                <div>
                  <label className="block text-stone-800 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded border border-stone-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition-all bg-white" 
                    placeholder="your@email.com" 
                  />
                </div>
                <div>
                  <label className="block text-stone-800 font-medium mb-2">Message</label>
                  <textarea 
                    rows="4" 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded border border-stone-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition-all bg-white" 
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button 
                  onClick={handleSubmit}
                  className="w-full bg-amber-700 text-white py-3 rounded font-semibold hover:bg-amber-800 transition-all shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
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
                <li><a href="#home" className="text-stone-400 hover:text-amber-600 transition-colors">Home</a></li>
                <li><a href="#about" className="text-stone-400 hover:text-amber-600 transition-colors">About</a></li>
                <li><a href="#services" className="text-stone-400 hover:text-amber-600 transition-colors">Services</a></li>
                <li><a href="#contact" className="text-stone-400 hover:text-amber-600 transition-colors">Contact</a></li>
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
};

export default MySalonWebsite;