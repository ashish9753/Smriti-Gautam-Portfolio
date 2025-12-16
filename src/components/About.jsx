import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiUsers, FiAward, FiHeart } from 'react-icons/fi';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

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

  const stats = [
    { icon: FiCode, label: 'Projects Built', value: '2+' },
    { icon: FiUsers, label: 'Position', value: 'Asst. Prof' },
    { icon: FiAward, label: 'Achievements', value: '5+' },
    { icon: FiHeart, label: 'Certifications', value: '4+' }
  ];

  const skills = [
    'Machine Learning',
    'Network Security',
    'Problem Solving',
    'Python Development',
    'Data Analysis',
    'Computer Networks'
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50">
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
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold mb-6 text-white">
                Assistant Professor & ML Enthusiast
              </h3>
              
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  I am currently serving as an Assistant Professor at Lovely Professional University, where I teach 
                  and mentor students in Computer Science. I completed my Master of Technology in Computer Science and 
                  Engineering from National Institute of Technology Hamirpur with a CGPA of 9.1, specializing in 
                  Machine Learning, Operating Systems, and Computer Networks.
                </p>
                
                <p>
                  I completed my Bachelor of Technology in Computer Science and Engineering from Rajasthan 
                  Technical University (Aug 2018 - Jul 2022) with a CGPA of 8.09, building a strong foundation 
                  in programming, algorithms, and software development.
                </p>
                
                <p>
                  My technical expertise spans across Python, C/C++, SQL, and HTML. I'm passionate about applying 
                  machine learning techniques to solve real-world problems, with hands-on experience in network 
                  intrusion detection systems and generative AI applications. I've completed certifications in 
                  HTML5, Applications of Algorithm to Security, and Advanced Topics in Information Technology.
                </p>
              </div>

              {/* Core Strengths */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4 text-white">Core Strengths</h4>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                      <span className="text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Content - Stats */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="bg-black/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 shadow-dark-lg hover:shadow-glow-blue transition-all duration-300 text-center group"
                    whileHover={{ scale: 1.08, y: -8, rotate: 2 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full group-hover:from-blue-500/30 group-hover:to-green-500/30 transition-all duration-300">
                        <stat.icon className="text-2xl text-blue-400" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Education Highlight */}
              <motion.div
                className="bg-gradient-to-r from-blue-500/10 to-green-500/10 p-6 rounded-xl border border-gray-700 shadow-dark-lg hover:shadow-glow-green transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="space-y-4">
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-1">M.Tech CSE</h5>
                    <p className="text-sm text-gray-400">NIT Hamirpur | CGPA: 9.1</p>
                    <p className="text-xs text-gray-500">Aug 2023 - Jul 2025</p>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <h5 className="text-lg font-semibold text-white mb-1">B.Tech CSE</h5>
                    <p className="text-sm text-gray-400">Rajasthan Technical University | CGPA: 8.09</p>
                    <p className="text-xs text-gray-500">Aug 2018 - Jul 2022</p>
                  </div>
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div
                className="bg-black/50 p-6 rounded-xl border border-gray-700 shadow-dark-lg hover:shadow-glow-blue transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <h5 className="text-lg font-semibold text-white mb-3">Key Achievements</h5>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• GATE 2023 Qualified</li>
                  <li>• Introduction to HTML5 (University of Michigan)</li>
                  <li>• Applications of Algorithm to Security (NITK)</li>
                  <li>• Advanced Topics in IT & CS (NITK)</li>
                  <li>• National Engineering Olympiad 3.0</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
