import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const techSlides = [
    "SOFTWARE DEVELOPMENT",
    "AUGMENTED & VIRTUAL REALITY",
    "DATA ANALYSIS",
    "BUSINESS DEVELOPMENT",
    "ARTIFICIAL INTELLIGENCE",
    "CLOUD COMPUTING"
  ];

  // Safety check to ensure we have valid slides
  const validSlides = techSlides.filter(slide => slide && slide.trim().length > 0);
  const totalSlides = validSlides.length || 1;

  useEffect(() => {
    // Ensure currentSlide is within valid bounds
    if (currentSlide >= totalSlides) {
      setCurrentSlide(0);
    }
  }, [currentSlide, totalSlides]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = (prev + 1) % totalSlides;
        return nextSlide >= 0 ? nextSlide : 0;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

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

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  };

  const paginationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8,
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
          <source src="/videos/Analytica.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </motion.div>

      <div className="relative z-10 text-center px-4">
        <div className="max-w-full mx-auto">
          <div className="relative mb-12 overflow-hidden">
            <div className="grid grid-cols-5 items-center gap-8 relative">
              <motion.div 
                key={`prev-${currentSlide}`}
                className="col-span-1 text-right opacity-60 text-gray-300 text-base md:text-lg lg:text-xl font-medium uppercase tracking-wide"
                initial={{ opacity: 0, x: -50, filter: "blur(2px)" }}
                animate={{ opacity: 0.6, x: 0, filter: "blur(2px)" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                {techSlides[(currentSlide - 1 + techSlides.length) % techSlides.length]}
              </motion.div>
              
              <motion.div 
                key={`current-${currentSlide}`}
                className="col-span-3 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-white uppercase tracking-wider leading-tight">
                  {techSlides[currentSlide] === "AUGMENTED & VIRTUAL REALITY" ? (
                    <>
                      <motion.div 
                        className="mb-2"
                        custom={0}
                        variants={wordVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        AUGMENTED &
                      </motion.div>
                      <motion.div 
                        className="mb-2"
                        custom={1}
                        variants={wordVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        VIRTUAL REALITY
                      </motion.div>
                    </>
                  ) : (
                    techSlides[currentSlide].split(' ').map((word, index) => (
                      <motion.div 
                        key={index} 
                        className="mb-2"
                        custom={index}
                        variants={wordVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        {word}
                      </motion.div>
                    ))
                  )}
                </h1>
              </motion.div>
              
              <motion.div 
                key={`next-${currentSlide}`}
                className="col-span-1 text-left opacity-60 text-gray-300 text-base md:text-lg lg:text-xl font-medium uppercase tracking-wide"
                initial={{ opacity: 0, x: 50, filter: "blur(2px)" }}
                animate={{ opacity: 0.6, x: 0, filter: "blur(2px)" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                {techSlides[(currentSlide + 1) % techSlides.length]}
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-0 right-0 z-10 flex justify-center"
        variants={paginationVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center space-x-4 text-white">
          <motion.span 
            className="text-lg font-mono font-bold"
            key={`current-${currentSlide}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {String(Math.max(1, Math.min(currentSlide + 1, totalSlides))).padStart(2, '0')}
          </motion.span>
          <motion.div 
            className="w-16 h-0.5 bg-white opacity-60"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          ></motion.div>
          <motion.span 
            className="text-lg font-mono font-bold"
            key={`total-${totalSlides}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {String(totalSlides).padStart(2, '0')}
          </motion.span>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
