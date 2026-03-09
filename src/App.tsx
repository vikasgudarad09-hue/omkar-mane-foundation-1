/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Main Application Component for Omkar Mane Foundation
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Utensils, Stethoscope, ArrowRight, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, School, ChevronRight, Play } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  category: string;
  description: string;
  youtubeId: string;
}

const videos: Video[] = [
  {
    id: '1',
    title: "From Child Labor to Class Topper: Raju's Journey",
    thumbnail: "https://picsum.photos/seed/indian_children_laughing/1200/800",
    duration: "5:20",
    category: "Vidya",
    description: "Raju was working in a tea stall to support his family. Watch how our Vidya initiative helped him return to school and excel.",
    youtubeId: "LXb3EKWsInQ" // Placeholder ID
  },
  {
    id: '2',
    title: "Mobile Clinic: Healing Remote Villages",
    thumbnail: "https://picsum.photos/seed/medical_help/400/300",
    duration: "3:45",
    category: "Swasthya",
    description: "Our mobile medical units travel to the most inaccessible areas to provide life-saving healthcare.",
    youtubeId: "LXb3EKWsInQ"
  },
  {
    id: '3',
    title: "10,000 Meals Served This Diwali",
    thumbnail: "https://picsum.photos/seed/food_serving/400/300",
    duration: "2:15",
    category: "Annadaan",
    description: "Celebrating the festival of lights by spreading the light of hope and nutrition.",
    youtubeId: "LXb3EKWsInQ"
  },
  {
    id: '4',
    title: "Dignity for the Elderly: A New Home",
    thumbnail: "https://picsum.photos/seed/elderly_indian/400/300",
    duration: "4:10",
    category: "Seva",
    description: "Providing shelter, care, and companionship to abandoned senior citizens. See how your support brings smiles to their faces.",
    youtubeId: "LXb3EKWsInQ"
  }
];

const VideoModal = ({ video, onClose }: { video: Video, onClose: () => void }) => (
  <AnimatePresence>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/90 backdrop-blur-md" 
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white rounded-3xl overflow-hidden w-full max-w-3xl shadow-2xl border-4 border-yellow-400 relative" 
        onClick={e => e.stopPropagation()}
      >
        <div className="relative aspect-video bg-black">
          <iframe 
            width="100%" 
            height="100%" 
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`} 
            title={video.title}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">{video.category}</span>
              <h3 className="text-2xl font-bold text-stone-900 font-serif leading-tight">{video.title}</h3>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full transition-colors group">
              <X className="w-6 h-6 text-stone-400 group-hover:text-stone-900" />
            </button>
          </div>
          <p className="text-stone-600 text-base leading-relaxed">{video.description}</p>
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeVideo, setActiveVideo] = useState<Video | null>(null);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  const heroImages = [
    "https://picsum.photos/seed/happy_indian_child/1920/1080",
    "https://picsum.photos/seed/smiling_elderly_indian/1920/1080",
    "https://picsum.photos/seed/joyful_indian_woman/1920/1080",
    "https://picsum.photos/seed/cheerful_indian_boy/1920/1080",
    "https://picsum.photos/seed/indian_village_school/1920/1080",
    "https://picsum.photos/seed/indian_food_distribution/1920/1080"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white font-sans text-stone-800">
      {activeVideo && <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />}

      {/* Floating Donate Button */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring" }}
        className="fixed bottom-8 right-8 z-[60] md:hidden"
      >
        <button className="bg-yellow-400 text-stone-900 font-bold px-6 py-4 rounded-full shadow-2xl flex items-center gap-2 border-2 border-white">
          Donate Now
        </button>
      </motion.div>
      
      {/* Top Bar - Tax Benefit & Quick Contact */}
      <div className="bg-stone-900 text-stone-300 text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> +91 98765 43210</span>
            <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> contact@sanatanseva.org</span>
          </div>

        </div>
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="sticky top-0 z-50 bg-white shadow-sm border-b border-stone-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 flex items-center gap-3 cursor-pointer"
            >
              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center text-stone-900 shadow-sm transform -rotate-3">
                <span className="font-serif font-bold text-xl">ॐ</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl text-stone-900 leading-none tracking-tight">Omkar Mane Foundation</span>
                <span className="text-xs text-stone-500 font-medium tracking-wide uppercase">Serving Dharma & Humanity</span>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['About Us', 'Our Work', 'Stories', 'Get Involved'].map((item, i) => (
                <motion.a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="text-stone-700 hover:text-yellow-600 font-semibold transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-stone-700 hover:text-yellow-600 p-2">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-100 absolute w-full shadow-xl z-50">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#about" className="block px-3 py-3 text-stone-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-md font-semibold" onClick={toggleMenu}>About Us</a>
              <a href="#seva" className="block px-3 py-3 text-stone-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-md font-semibold" onClick={toggleMenu}>Our Work</a>
              <a href="#stories" className="block px-3 py-3 text-stone-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-md font-semibold" onClick={toggleMenu}>Stories</a>
              <a href="#events" className="block px-3 py-3 text-stone-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-md font-semibold" onClick={toggleMenu}>Get Involved</a>

            </div>
          </div>
        )}
      </motion.nav>

      {/* Hero Section with Donation Widget */}
      <section className="relative bg-white h-[100dvh] flex items-center overflow-hidden">
        {/* Full Background Images - Automatic Slider */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={currentHeroIndex}
              src={heroImages[currentHeroIndex]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover"
              alt="Hero Background"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
        </div>
        
        {/* White Overlay for Text Readability (Reduced Opacity) */}
        <div className="absolute inset-0 bg-white/30 z-1 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center justify-center text-center">
            
            {/* Hero Text */}
            <div className="max-w-4xl pt-10 lg:pt-0">
              <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 text-stone-900 drop-shadow-sm"
              >
                Let's ensure a <motion.span 
                  animate={{ rotate: [-2, 2, -2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="font-hand text-yellow-500 transform -rotate-2 inline-block"
                >dignified life</motion.span> for every Indian
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <motion.button 
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-stone-900 text-white hover:bg-stone-800 px-8 py-3.5 rounded-full font-bold transition-all shadow-lg flex items-center gap-2"
                >
                  Explore Our Work <ChevronRight className="w-4 h-4" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white border-2 border-stone-200 text-stone-700 hover:border-yellow-400 hover:text-yellow-600 px-8 py-3.5 rounded-full font-bold transition-all flex items-center gap-2"
                >
                  <Play className="w-4 h-4 fill-current" /> Watch Video
                </motion.button>
              </motion.div>
            </div>

          </div>
        </div>
        {/* Smooth Fade Transition to Next Section */}
        <div className="absolute bottom-0 left-0 w-full h-64 md:h-96 z-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-400 via-yellow-400/60 to-transparent"></div>
        </div>
      </section>

      {/* Trending Marquee */}
      <div className="bg-stone-900 py-4 overflow-hidden whitespace-nowrap border-y border-stone-800 relative z-30">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="inline-block"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-stone-400 font-bold text-sm uppercase tracking-widest mx-8 inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              Trending Now: 10,000+ Meals Served in Mumbai
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              New Mobile Clinic in Pune
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              Vidya Scholarship 2024 Open
            </span>
          ))}
        </motion.div>
      </div>

      {/* What We Do (Pillars) - Vibrant Yellow Background */}
      <section id="seva" className="py-24 bg-yellow-400 relative overflow-hidden">

        {/* Torn Paper Effect - Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 transform rotate-180">
          <svg className="relative block w-[calc(100%+1.3px)] h-12 md:h-20 text-white fill-current" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-stone-900 mb-6">Our Areas of Impact</h2>
            <p className="text-stone-900/80 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
              We focus on the holistic development of society through three core pillars.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.3 } }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card 1 - Annadaan (Rose) */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 60, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", damping: 15 } }
              }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border-b-8 border-rose-500"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src="https://picsum.photos/seed/food_distribution/800/600" 
                  alt="Annadaan" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-md">
                  <Utensils className="w-6 h-6 text-rose-500" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-stone-900 font-serif mb-4 group-hover:text-rose-500 transition-colors">Annadaan</h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Combating hunger by providing nutritious daily meals to underprivileged families, sadhus, and hospital patients.
                </p>
                <a href="#" className="inline-flex items-center text-rose-600 font-bold hover:text-rose-700 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>

            {/* Card 2 - Vidya (Cyan) */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 60, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", damping: 15 } }
              }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border-b-8 border-cyan-500"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src="https://picsum.photos/seed/education_india/800/600" 
                  alt="Vidya" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-md">
                  <School className="w-6 h-6 text-cyan-500" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-stone-900 font-serif mb-4 group-hover:text-cyan-500 transition-colors">Vidya</h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Ensuring every individual has access to quality education, skill development, and digital learning tools.
                </p>
                <a href="#" className="inline-flex items-center text-cyan-600 font-bold hover:text-cyan-700 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>

            {/* Card 3 - Swasthya (Purple) */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 60, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", damping: 15 } }
              }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border-b-8 border-purple-500"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src="https://picsum.photos/seed/medical_camp/800/600" 
                  alt="Swasthya" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-md">
                  <Stethoscope className="w-6 h-6 text-purple-500" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-stone-900 font-serif mb-4 group-hover:text-purple-500 transition-colors">Swasthya</h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Delivering healthcare to the doorstep of rural India through mobile clinics and eye camps.
                </p>
                <a href="#" className="inline-flex items-center text-purple-600 font-bold hover:text-purple-700 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Videos Section - "Witness the Change" */}
      <section id="stories" className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-50 rounded-full blur-3xl -z-10 opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-50 rounded-full blur-3xl -z-10 opacity-60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-4 border border-yellow-200">
              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
              Impact in Motion
            </div>
            <h2 className="font-hand text-5xl md:text-7xl font-bold text-stone-900 mb-6 transform -rotate-2">Witness the Change</h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
              Real stories of hope, resilience, and transformation from the ground. See how your contribution is rewriting destinies.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Main Featured Video */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="lg:col-span-2 group cursor-pointer relative" 
              onClick={() => setActiveVideo(videos[0])}
            >
              <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-500 hover:scale-[1.01]">
                <img 
                  src={videos[0].thumbnail}
                  alt={videos[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl relative">
                      <Play className="w-8 h-8 text-white ml-1 fill-current" />
                      <div className="absolute -inset-4 border-2 border-white/30 rounded-full animate-ping"></div>
                    </div>
                  </div>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <span className="bg-yellow-400 text-stone-900 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-md mb-4 inline-block shadow-sm">Featured Story</span>
                  <h3 className="text-white font-serif text-3xl md:text-4xl font-bold mb-3 leading-tight">{videos[0].title}</h3>
                  <p className="text-stone-200 line-clamp-2 text-lg font-medium max-w-2xl">
                    {videos[0].description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Side Video List */}
            <div className="flex flex-col gap-6 h-full justify-between">
              <div className="space-y-6">
                {videos.slice(1).map((video) => (
                  <div 
                    key={video.id}
                    className="flex gap-4 group cursor-pointer bg-white p-3 rounded-2xl hover:bg-stone-50 hover:shadow-lg transition-all border border-stone-100 hover:border-yellow-200 transform hover:-translate-x-1"
                    onClick={() => setActiveVideo(video)}
                  >
                    <div className="relative w-36 h-28 flex-shrink-0 rounded-xl overflow-hidden shadow-sm">
                      <img 
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                        <div className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-md">
                          <Play className="w-4 h-4 text-red-600 ml-0.5 fill-current" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center py-1">
                      <span className="text-xs font-bold text-yellow-600 uppercase tracking-wide mb-1">{video.category}</span>
                      <h4 className="font-bold text-stone-900 leading-tight mb-2 group-hover:text-yellow-600 transition-colors line-clamp-2 text-lg">{video.title}</h4>
                      <span className="text-xs text-stone-500 font-medium flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-stone-300"></div> {video.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-4 pt-4 border-t border-stone-100">
                <button className="flex-1 py-4 border-2 border-stone-200 rounded-xl text-stone-600 font-bold hover:border-yellow-400 hover:text-yellow-600 transition-all flex items-center justify-center gap-2 group">
                  View All Stories <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Contact Us Section */}
      <section id="get-involved" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-6">Join Our Mission</h2>
              <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                Whether you want to volunteer, donate, or partner with us, your support can change lives. Reach out to us today and be a part of the transformation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-stone-900 shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Email Us</h4>
                    <p className="text-stone-600">contact@omkarmanefoundation.org</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-stone-900 shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Call Us</h4>
                    <p className="text-stone-600">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-stone-900 shadow-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Visit Us</h4>
                    <p className="text-stone-600">108 Seva Marg, New Delhi, India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-stone-100"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Full Name</label>
                    <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Email Address</label>
                    <input type="email" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Subject</label>
                  <select className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 transition-all">
                    <option>General Inquiry</option>
                    <option>Donation Support</option>
                    <option>Volunteer Opportunities</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 transition-all" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full bg-stone-900 text-white font-bold py-4 rounded-xl hover:bg-stone-800 transition-all shadow-lg">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-b from-stone-950 to-stone-900 text-stone-400 pt-20 pb-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-stone-800 rounded-lg flex items-center justify-center text-white">
                  <span className="font-serif font-bold text-xl">ॐ</span>
                </div>
                <span className="font-serif font-bold text-2xl text-stone-100">Omkar Mane Foundation</span>
              </div>
              <p className="mb-8 text-sm leading-relaxed text-stone-500">
                A non-profit organization dedicated to restoring dignity and hope through the timeless values of Seva, Sanskar, and Samarpan.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all"><Youtube className="w-5 h-5" /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Discover</h3>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> About Us</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Our Impact</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Financials</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Careers</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Get in Touch</h3>
              <ul className="space-y-5 text-sm">
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <span>108 Seva Marg, Spiritual District,<br/>New Delhi, India 110001</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <span>contact@omkarmanefoundation.org</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Stay Updated</h3>
              <p className="text-sm mb-4 text-stone-500">Join our community of changemakers.</p>
              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-stone-900 border border-stone-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 transition-all placeholder-stone-600"
                />
                <button type="submit" className="w-full bg-orange-700 hover:bg-orange-800 text-white font-bold py-3 rounded-lg transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-600">
            <p>&copy; {new Date().getFullYear()} Omkar Mane Foundation. Registered Non-Profit.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-stone-400">Privacy Policy</a>
              <a href="#" className="hover:text-stone-400">Terms of Use</a>
              <a href="#" className="hover:text-stone-400">Sitemap</a>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

