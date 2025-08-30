import PageHero from '../components/PageHero';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
const AboutUs = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };
  const sectionVariants = {
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
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  };
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  const services = [
    "Software Consultancy",
    "Customized Software Development",
    "Cross-Platform Development",
    "Cloud Based Development",
    "Research and Development"
  ];
  return (
    <div className="min-h-screen">
      {}
      <PageHero 
        heading="ABOUT US"
        subtitle="Get a head start with emerging Tools and Technologies to Help Evolve your Business Development"
        bodyText="Analytica delivers comprehensive solutions that blend effective design with the latest technologies, including web, mobile, VR, AI, and blockchain."
        videoSource="/videos/About-US.mp4"
      />
      {}
      <motion.section 
        ref={ref}
        className="py-10 bg-white dark:bg-[#141517] transition-colors duration-300"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {}
          <motion.div 
            className="mb-16"
            variants={sectionVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Who we are
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Analytica is a global leader in driving technological advancements and shaping the future. 
              With branches in United Arab Emirates, United States of America, Sweden, Qatar, and Pakistan, 
              we provide tailored solutions that exceed industry expectations. We bridge the gap between 
              technology and industry, delivering seamless and innovative outcomes. Join us on our journey 
              as we continue to lead and empower major industries worldwide.
            </motion.p>
          </motion.div>
          {}
          <motion.div 
            className="mb-16"
            variants={sectionVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Vision
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              To be the leader in providing customized software services and cutting-edge solutions in the 
              realms of artificial intelligence, data analysis, computer vision, blockchain, and AR/VR. 
              With our commitment to research and development excellence, we aim to empower major industries 
              by enabling up-to-date advancements in these specialized domains. Our goal is to establish 
              ourselves as a pioneering force, driving innovation and delivering tailored solutions that 
              surpass industry expectations.
            </motion.p>
          </motion.div>
          {}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {}
            <motion.div 
              variants={sectionVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                What we offer
              </motion.h2>
              <ul className="space-y-3">
                {services.map((service, i) => (
                  <motion.li 
                    key={service}
                    className="flex items-center text-lg text-gray-700 dark:text-gray-300"
                    custom={i}
                    variants={listItemVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span 
                      className="w-2 h-2 bg-[#3E9BA6] dark:bg-white rounded-full mr-4"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    ></motion.span>
                    {service}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            {}
            <motion.div 
              className="flex justify-center lg:justify-end"
              variants={logoVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/Analytica-Logo_V2_aboutus.webp" 
                  alt="Analytica Logo" 
                  className="w-48 h-auto mb-4"
                />
              </motion.div>
            </motion.div>
          </div>
          {}
          <motion.div 
            className="mt-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.p 
              className="text-lg md:text-xl text-gray-500 dark:text-gray-400 italic font-bold tracking-tighter"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              "Fueling the future of technology with excellence and relentless innovation, Analytica redefines what's possible. Join the revolution today!"
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};
export default AboutUs;
