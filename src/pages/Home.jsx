import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
const Home = () => {
  const [ref1, isVisible1] = useScrollAnimation(0.1);
  const [ref2, isVisible2] = useScrollAnimation(0.1);
  const [ref3, isVisible3] = useScrollAnimation(0.1);
  const services = [
    {
      id: 1,
      title: "AI-Powered Solutions",
      description: "Empowering Businesses with Intelligent Technologies",
      image: "/src/assets/images/home-01.webp"
    },
    {
      id: 2,
      title: "Industry Experts",
      description: "Deep Insights and Solutions Across Industries.",
      image: "/src/assets/images/home-03.webp"
    },
    {
      id: 3,
      title: "Customized Solutions",
      description: "Tailored Software for your Unique Needs",
      image: "/src/assets/images/home-04.webp"
    },
    {
      id: 4,
      title: "AR/VR",
      description: "Immersive Experiences Redefining Reality",
      image: "/src/assets/images/home-02.webp"
    },
    {
      id: 5,
      title: "Computer Vision",
      description: "Enhancing Insights through Visual Intelligence",
      image: "/src/assets/images/home-05.webp"
    }
  ];
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
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  };
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
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
  return (
    <div>
      <Hero />
      {}
      <motion.section 
        ref={ref1}
        className="py-10 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#141517] transition-colors duration-300"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible1 ? "visible" : "hidden"}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-800 dark:text-white uppercase tracking-wider leading-tight mb-2"
            variants={textVariants}
          >
            INNOVATIVE SOLUTIONS DESIGNED FOR SUCCESS
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light leading-relaxed"
            variants={textVariants}
          >
            Software Solutions, Artificial Intelligence,<br />
            Blockchain and Data Analysis
          </motion.p>
        </div>
      </motion.section>
      {}
      <motion.section 
        ref={ref2}
        className="embrace-innovation-section py-20 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible2 ? "visible" : "hidden"}
      >
        <div className="max-w-7xl mx-auto">
          {}
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible2 ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-1x1 md:text-3xl lg:text-4xl uppercase tracking-wider mb-4"
              variants={textVariants}
            >
              <span className="innovation-title">EMBRACE</span>{' '}
              <span className="innovation-highlight">INNOVATION</span>
            </motion.h2>
            <motion.div
              variants={textVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/services">
                <button className="services-button px-[70px] py-[15px] font-semibold rounded-full">
                  All Services
                </button>
              </Link>
            </motion.div>
          </motion.div>
          {}
          <div className="space-y-16">
            {}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-12 justify-items-center">
              {services.slice(0, 3).map((service, i) => (
                <motion.div 
                  key={service.id} 
                  className="service-card text-center max-w-xs"
                  custom={i}
                  variants={serviceCardVariants}
                  initial="hidden"
                  animate={isVisible2 ? "visible" : "hidden"}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  {}
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
                  {}
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
                  {}
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link to="/services" className="learn-more-link font-medium">
                      Learn More
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            {}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-x-12 justify-items-center max-w-4xl mx-auto">
              {services.slice(3, 5).map((service, i) => (
                <motion.div 
                  key={service.id} 
                  className="service-card text-center max-w-xs"
                  custom={i + 3}
                  variants={serviceCardVariants}
                  initial="hidden"
                  animate={isVisible2 ? "visible" : "hidden"}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  {}
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
                  {}
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
                  {}
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link to="/services" className="learn-more-link font-medium">
                      Learn More
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      {}
      <motion.section 
        ref={ref3}
        className="py-10 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#141517] transition-colors duration-300"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible3 ? "visible" : "hidden"}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl text-gray-800 dark:text-white uppercase tracking-wider mb-10"
            variants={textVariants}
          >
            EXPAND YOUR HORIZON WITH US
          </motion.h2>
          <motion.div
            variants={textVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/about">
              <button className="expand-button px-6 sm:px-[45px] py-3 sm:py-[18px] rounded-full uppercase text-sm sm:text-base">
                FIND MORE ABOUT ANALYTICA
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};
export default Home;
