/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Dumbbell, 
  Users, 
  Apple, 
  Sparkles, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  Twitter,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const SERVICES = [
  {
    title: "Personal Training",
    description: "One-on-one sessions tailored to your specific goals, fitness level, and schedule.",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Group Classes",
    description: "High-energy Yoga, Zumba, and HIIT sessions led by expert instructors in a motivating environment.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Nutrition & Diet Plans",
    description: "Customized meal plans and nutritional guidance to complement your physical training.",
    icon: Apple,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Spa & Wellness",
    description: "Rejuvenate your body and mind with our premium massage and wellness treatments.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1544161515-4af6b1d46152?q=80&w=800&auto=format&fit=crop",
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-primary selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-brand-dark/90 backdrop-blur-md py-4 shadow-xl" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
              <Dumbbell className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase italic">
              Laguru <span className="text-brand-primary">Fitness</span>
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm font-medium uppercase tracking-widest hover:text-brand-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+2348170356569"
              className="bg-brand-primary px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-orange-600 transition-colors"
            >
              <Phone size={16} />
              Call Now
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-brand-dark border-t border-white/10 p-6 md:hidden flex flex-col gap-6 shadow-2xl"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium uppercase tracking-widest border-b border-white/5 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+2348170356569"
                className="bg-brand-primary w-full py-4 rounded-xl text-center font-bold uppercase tracking-wider flex items-center justify-center gap-3"
              >
                <Phone size={20} />
                Call Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop" 
            alt="Gym Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1 bg-brand-primary/20 border border-brand-primary/30 text-brand-primary rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
            >
              Premium Fitness & Spa in Abuja
            </motion.span>
            <h1 className="text-5xl md:text-8xl font-serif font-bold leading-[0.9] mb-8">
              Transform Your <span className="text-brand-primary italic">Body.</span> <br />
              Elevate Your <span className="text-brand-secondary italic">Fitness.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg leading-relaxed">
              Experience the ultimate fusion of high-intensity training and luxury wellness at Laguru. Your journey to a better you starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+2348170356569"
                className="bg-brand-primary px-10 py-5 rounded-full text-lg font-bold uppercase tracking-wider flex items-center justify-center gap-3 shadow-lg shadow-brand-primary/20"
              >
                <Phone size={20} />
                Call Now
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                className="border border-white/30 backdrop-blur-sm px-10 py-5 rounded-full text-lg font-bold uppercase tracking-wider flex items-center justify-center gap-3 hover:bg-white/10 transition-all"
              >
                Explore Services
                <ChevronRight size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white text-brand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary mb-4">Our Services</h2>
              <h3 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                Tailored Excellence for <br /> Every <span className="italic">Athlete.</span>
              </h3>
            </div>
            <p className="text-gray-500 max-w-sm">
              From high-octane HIIT sessions to tranquil spa retreats, we provide everything you need to reach your peak potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-gray-50 h-[450px] flex flex-col"
              >
                <div className="absolute inset-0 z-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                </div>
                
                <div className="relative z-10 mt-auto p-8 text-white">
                  <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center mb-6 transform -rotate-6 group-hover:rotate-0 transition-transform">
                    <service.icon size={24} />
                  </div>
                  <h4 className="text-2xl font-bold mb-3">{service.title}</h4>
                  <p className="text-sm text-gray-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location/CTA Section */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <Dumbbell className="w-full h-full text-white rotate-12" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">
                Ready to Join the <br />
                <span className="text-brand-primary italic">Laguru Elite?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <MapPin className="text-brand-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Visit Us in Abuja</p>
                    <p className="text-gray-400">Ojimadu Nwaeze House, P.O.W Mafemi Crescent, Utako, Abuja</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Phone className="text-brand-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Call for Membership</p>
                    <p className="text-gray-400">+234 817 035 6569</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-auto">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:+2348170356569"
                className="bg-brand-primary text-white px-12 py-8 rounded-3xl text-2xl font-black uppercase tracking-tighter flex flex-col items-center gap-2 group"
              >
                <span className="text-sm tracking-[0.3em] font-bold opacity-80">Get Started</span>
                <span className="flex items-center gap-3">
                  Join Now <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
                  <Dumbbell className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tighter uppercase italic">
                  Laguru <span className="text-brand-primary">Fitness</span>
                </span>
              </div>
              <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
                Laguru Fitness Club & Spa is Abuja's premier destination for health, wellness, and peak physical performance.
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h5>
              <ul className="space-y-4 text-gray-500">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-brand-primary transition-colors">{link.name}</a>
                  </li>
                ))}
                <li><a href="#" className="hover:text-brand-primary transition-colors">Membership</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold uppercase tracking-widest text-sm mb-6">Contact Info</h5>
              <ul className="space-y-4 text-gray-500">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="shrink-0 text-brand-primary" />
                  <span>Ojimadu Nwaeze House, P.O.W Mafemi Crescent, Utako, Abuja</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0 text-brand-primary" />
                  <span>+234 706 941 7558</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 uppercase tracking-widest">
            <p>© {new Date().getFullYear()} Laguru Fitness Club & Spa. All rights reserved.</p>
            <p>Designed for Excellence in Abuja</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
