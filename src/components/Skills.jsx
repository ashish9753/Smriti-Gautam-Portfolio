import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaPython, 
  FaHtml5, 
  FaDatabase,
  FaBrain
} from 'react-icons/fa';
import { 
  SiCplusplus,
  SiMysql,
  SiScikitlearn,
  SiTensorflow,
  SiKeras,
  SiNumpy,
  SiPandas
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
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

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: FaPython, color: '#3776AB', level: 90 },
        { name: 'C/C++', icon: SiCplusplus, color: '#00599C', level: 85 },
        { name: 'SQL', icon: SiMysql, color: '#4479A1', level: 80 },
        { name: 'HTML', icon: FaHtml5, color: '#E34F26', level: 85 },
      ]
    },
    {
      title: 'Machine Learning',
      skills: [
        { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E', level: 85 },
        { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00', level: 75 },
        { name: 'Keras', icon: SiKeras, color: '#D00000', level: 80 },
      ]
    },
    {
      title: 'Data Science',
      skills: [
        { name: 'NumPy', icon: SiNumpy, color: '#013243', level: 85 },
        { name: 'Pandas', icon: SiPandas, color: '#150458', level: 85 },
        { name: 'Database', icon: FaDatabase, color: '#336791', level: 80 },
      ]
    },
    {
      title: 'Core Concepts',
      skills: [
        { name: 'Operating System', icon: FaBrain, color: '#3b82f6', level: 85 },
        { name: 'Machine Learning', icon: FaBrain, color: '#10b981', level: 88 },
        { name: 'Computer Networks', icon: FaBrain, color: '#8b5cf6', level: 82 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
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
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Technologies and concepts I work with to build intelligent solutions
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 shadow-dark-lg hover:shadow-glow-blue transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02, rotate: 1 }}
              >
                <h3 className="text-xl font-bold mb-6 text-white text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 
                      }}
                    >
                      {/* Skill Header */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <skill.icon 
                            className="text-xl group-hover:scale-110 transition-transform duration-200" 
                            style={{ color: skill.color }}
                          />
                          <span className="text-gray-300 font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ 
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                          }}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                            ease: 'easeOut'
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Section */}
          <motion.div
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Additional Competencies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Database Management System',
                'Compiler',
                'Operating System',
                'Machine Learning',
                'Network Intrusion Detection',
                'Generative AI',
                'KNN Algorithm',
                'Logistic Regression',
                'Decision Tree'
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="px-6 py-3 bg-gray-900/50 border border-gray-700 rounded-full text-gray-300 hover:border-gray-600 hover:bg-gray-800 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
