import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiEye, FiFilter, FiX } from 'react-icons/fi';
import { FaPython } from 'react-icons/fa';
import { SiScikitlearn, SiKeras, SiTensorflow } from 'react-icons/si';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

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

  const projects = [
    {
      id: 1,
      title: 'Network Intrusion Detection System',
      category: 'Machine Learning',
      description: 'A machine learning system using NSL KDD Dataset to detect network anomalies and intrusions.',
      longDescription: 'Developed a comprehensive Network Intrusion Detection System for computer networks using the NSL KDD Dataset. The system detects network anomalies by implementing multiple machine learning algorithms including KNN, Logistic Regression, and Decision Tree to achieve high accuracy in identifying potential security threats.',
      image: '/project1.png',
      technologies: [
        { name: 'Python', icon: FaPython, color: '#3776AB' },
        { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' }
      ],
      github: '#',
      features: [
        'NSL KDD Dataset Analysis',
        'KNN Algorithm Implementation',
        'Logistic Regression Model',
        'Decision Tree Classifier',
        'Anomaly Detection',
        'High Accuracy Classification',
        'Real-time Network Monitoring',
        'Threat Identification'
      ]
    },
    {
      id: 2,
      title: 'Generative Machine Learning for Intrusion Detection',
      category: 'Machine Learning',
      description: 'Advanced intrusion detection system using generative machine learning techniques for enhanced security.',
      longDescription: 'Developed an advanced intrusion detection system leveraging generative machine learning techniques. This project focuses on applying cutting-edge generative AI models to identify and predict network intrusions with improved accuracy and adaptability to new threat patterns.',
      image: '/project2.png',
      technologies: [
        { name: 'Python', icon: FaPython, color: '#3776AB' },
        { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
        { name: 'Keras', icon: SiKeras, color: '#D00000' }
      ],
      github: '#',
      features: [
        'Generative AI Models',
        'Advanced Pattern Recognition',
        'Deep Learning Implementation',
        'Adaptive Threat Detection',
        'Neural Network Architecture',
        'Model Training & Optimization',
        'Security Enhancement',
        'Predictive Analysis'
      ]
    }
  ];

  const categories = ['All', 'Machine Learning', 'Network Security'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Innovative machine learning projects focused on network security and intrusion detection
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div 
            className="flex justify-center mb-12"
            variants={itemVariants}
          >
            <div className="flex flex-wrap justify-center gap-4 bg-black/30 p-2 rounded-xl border border-gray-700">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                    filter === category
                      ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  <FiFilter size={16} />
                  <span>{category}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-black/50 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 shadow-dark-lg hover:shadow-glow-blue transition-all duration-300 group"
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -12, scale: 1.03, rotate: 1 }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-green-500/20 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FiCode size={80} className="text-white/10" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <span className="px-3 py-1 bg-blue-500/80 text-white text-xs rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center space-x-2 px-3 py-1 bg-gray-800 rounded-full text-xs"
                        >
                          <tech.icon style={{ color: tech.color }} />
                          <span className="text-gray-300">{tech.name}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <motion.button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiEye size={16} />
                        <span>View Details</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Project Modal */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  className="bg-gray-900 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
                  initial={{ scale: 0.9, y: 50 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 50 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modal Header */}
                  <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex justify-between items-start z-10">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                        {selectedProject.category}
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 hover:bg-gray-800 rounded-full transition-colors"
                    >
                      <FiX size={24} className="text-gray-400" />
                    </button>
                  </div>

                  {/* Modal Content */}
                  <div className="p-6">
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>

                    <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-gray-400">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center space-x-2 px-4 py-2 bg-gray-800 rounded-lg"
                        >
                          <tech.icon size={20} style={{ color: tech.color }} />
                          <span className="text-gray-300">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
