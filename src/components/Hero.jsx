import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown, FiInstagram } from 'react-icons/fi';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Assistant Professor at LPU",
    "Machine Learning Enthusiast",
    "Python Developer",
    "Network Security Specialist"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const socialLinks = [
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/smriti-gautam-94a8061aa/', label: 'LinkedIn' },
    { icon: FiInstagram, href: 'https://www.instagram.com/smritigautam3110/', label: 'Instagram' },
    { icon: FiMail, href: 'mailto:smritigautam3110@gmail.com', label: 'Email' }
  ];

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div
          className="mb-8"
          variants={itemVariants}
        >
          <div className="w-40 h-40 mx-auto relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-full animate-glow-pulse shadow-dark-xl"></div>
            <div className="absolute inset-1 bg-black rounded-full flex items-center justify-center shadow-dark-lg">
              <span className="text-6xl font-bold text-gradient">SG</span>
            </div>
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-4">
          <span className="text-xl text-gray-400">Hello, I'm</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="text-gradient">Smriti Gautam</span>
        </motion.h1>

        {/* Dynamic Role */}
        <motion.div variants={itemVariants} className="mb-8 h-12">
          <motion.h2
            key={currentRole}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl text-gray-300"
          >
            {roles[currentRole]}
          </motion.h2>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Assistant Professor at Lovely Professional University with M.Tech from NIT Hamirpur. 
          Specializing in Machine Learning and Network Security with a passion for teaching and research.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-full shadow-dark-lg hover:shadow-glow-blue transition-all duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiMail size={20} />
            <span>Get In Touch</span>
          </motion.a>
          
          <motion.a
            href="/Smriti_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent border-2 border-gray-700 text-white font-semibold rounded-full hover:border-gray-500 hover:bg-gray-800/50 shadow-dark-lg hover:shadow-glow-green transition-all duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiDownload size={20} />
            <span>Download Resume</span>
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center space-x-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="p-4 bg-gray-800 border border-gray-700 rounded-full text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-700 shadow-dark-lg hover:shadow-glow-blue transition-all duration-300"
              whileHover={{ scale: 1.15, y: -8, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-20"
        >
          <motion.button
            onClick={scrollToNext}
            className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <FiArrowDown size={24} />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
