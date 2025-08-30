import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { servicesData } from '../data/servicesData';

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('All Services');
  const [ref, isVisible] = useScrollAnimation(0.1);

  const categories = [
    'All Services',
    'Customized Software Services',
    'Artificial Intelligence',
    'Data Science',
    'Computer Vision',
    'Blockchain',
    'AR/VR',
    'ERP Solutions',
    'Digital Marketing',
    'Technical Training'
  ];

  const currentServices = servicesData[activeCategory] || servicesData['All Services'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: i * 0.05,
        ease: "easeOut"
      }
    })
  };

  const serviceCardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      ref={ref}
      className="embrace-innovation-section py-20 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <motion.div 
        className="flex flex-wrap justify-center gap-2 lg:gap-3 mb-16 px-4 lg:px-0"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {categories.map((category, i) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-md font-semibold transition-all duration-300 whitespace-nowrap text-xs sm:text-sm lg:text-base flex-shrink-0 ${
              activeCategory === category
                ? 'bg-[#3E9BA6] text-white'
                : 'border border-[#2C5156] text-white hover:bg-[#2C5156] hover:text-white'
            }`}
            custom={i}
            variants={categoryVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      <div className="space-y-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 justify-items-center">
              {currentServices.map((service, i) => (
                <motion.div 
                  key={service.id} 
                  className="service-card text-center max-w-lg"
                  custom={i}
                  variants={serviceCardVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="mb-6 flex justify-center"
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-icon w-[200px] h-[200px] object-contain"
                    />
                  </motion.div>

                  <motion.h3 
                    className="service-title text-xl font-bold mb-4"
                    whileHover={{ color: "#06b6d4" }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.h3>

                  <p className="service-description mb-2 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <motion.section 
        className="py-20"
        variants={ctaVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            INTERESTED IN ANALYTICA SERVICES?
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-white mb-8 uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            FEEL FREE TO REACH OUT!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to="/contact">
              <motion.button 
                className="services-button px-12 py-4 text-white font-bold uppercase tracking-wider"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CONTACT US
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </motion.section>
  );
};

export default ServicesSection;
