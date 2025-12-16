import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare, FiCheck } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'smritigautam3110@gmail.com',
      href: 'mailto:smritigautam3110@gmail.com',
      clickable: true
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+91 8209661195',
      href: 'tel:+918209661195',
      clickable: true
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Kota, Rajasthan, India',
      href: '#',
      clickable: false
    }
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/smriti-gautam-94a8061aa/', label: 'LinkedIn' }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formSubmitURL = 'https://formsubmit.co/smritigautam3110@gmail.com';
      
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('name', formData.name);
      formDataToSubmit.append('email', formData.email);
      formDataToSubmit.append('subject', formData.subject);
      formDataToSubmit.append('message', formData.message);
      formDataToSubmit.append('_captcha', 'false');
      formDataToSubmit.append('_template', 'table');

      const response = await fetch(formSubmitURL, {
        method: 'POST',
        body: formDataToSubmit,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      setIsSubmitting(false);
      alert('Failed to send message. Please try again or contact me directly at smritigautam3110@gmail.com');
    }
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Let's discuss how we can work together!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div className="space-y-8" variants={itemVariants}>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Let's Talk
                </h3>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  I'm currently available for research collaborations, project opportunities, and 
                  internships in Machine Learning and Network Security. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="flex items-start space-x-4 p-4 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-gray-600 shadow-dark-lg hover:shadow-glow-blue transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="p-3 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full">
                      <info.icon className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                      {info.clickable ? (
                        <a
                          href={info.href}
                          className="text-gray-400 hover:text-blue-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-400">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-6">
                <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-800 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-4 top-4 text-gray-500" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 ${
                    isSubmitted
                      ? 'bg-green-500 hover:bg-green-600'
                      : 'bg-gradient-to-r from-blue-500 to-green-500 hover:shadow-lg hover:shadow-blue-500/50'
                  } text-white disabled:opacity-50 disabled:cursor-not-allowed`}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <FiCheck size={20} />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <FiSend size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
