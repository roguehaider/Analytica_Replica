import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
const PageHero = ({ 
  heading, 
  subtitle, 
  bodyText, 
  videoSource, 
  showScrollIndicator = true 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
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
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  const scrollIndicatorVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1,
        ease: "easeOut"
      }
    }
  };
  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </motion.div>
      {}
      <div className="relative z-10 text-left px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {}
            <motion.h1 
              className="text-2xl md:text-4xl lg:text-5xl xl:text-7xl font-bold uppercase mb-4 bg-gradient-to-r from-white via-[#3E9BA6] to-white bg-clip-text text-transparent animate-gradient-x"
              variants={headingVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {heading}
            </motion.h1>
            {}
            {subtitle && (
              <motion.p 
                className="text-sm md:text-base lg:text-lg text-white italic mb-4 max-w-4xl leading-relaxed w-2/3"
                variants={textVariants}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {subtitle}
              </motion.p>
            )}
            {}
            {bodyText && (
              <motion.p 
                className="text-xs md:text-sm lg:text-base text-white max-w-5xl leading-relaxed w-2/3"
                variants={textVariants}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {bodyText}
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>
      {}
      {showScrollIndicator && (
        <motion.div 
          className="absolute bottom-8 left-0 right-0 z-10 flex justify-center"
          variants={scrollIndicatorVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="flex flex-col items-center text-white"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span 
              className="text-sm font-medium mb-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll to explore
            </motion.span>
            <motion.div 
              className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-1 h-3 bg-white rounded-full mt-2"
                animate={{ 
                  y: [0, 12, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};
export default PageHero;
