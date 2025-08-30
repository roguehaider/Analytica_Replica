import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import isoCertified from '../assets/iso-certified.webp';
import analyticaLogo from '../assets/Analytica-Logo_White_Version_V1.webp';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [ref, isVisible] = useScrollAnimation(0.1);

  const branches = [
    'Dubai, UAE',
    'California, USA',
    'Eskilstuna, Sweden',
    'Lahore, Pakistan',
    'Doha, Qatar'
  ];

  const services = [
    'Services',
    'Industries & Solutions',
    'Workflow',
    'Research & Development',
    'Careers/Internship',
    'Privacy & Policy'
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollButton(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  const scrollButtonVariants = {
    hidden: { opacity: 0, scale: 0, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.footer 
      ref={ref}
      className="text-white relative overflow-hidden bg-[#152024] dark:bg-[#141517] transition-colors duration-300"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <motion.div 
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </motion.div>

      <div className="container-custom py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          <motion.div 
            className="lg:col-span-2"
            custom={0}
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link 
                to="/" 
                className="cursor-pointer"
              >
                <img 
                  src={analyticaLogo} 
                  alt="ANALYTICA" 
                  className="h-8 sm:h-10 w-auto"
                />
              </Link>
            </motion.div>
            <motion.p 
              className="mt-3 text-gray-300 max-w-md text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Innovative solutions designed for success.
            </motion.p>
            
            <motion.div 
              className="mt-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img 
                src={isoCertified} 
                alt="ISO 9001:2015 CERTIFIED" 
                className="h-10 sm:h-12 w-auto"
              />
            </motion.div>
            
            <div className="mt-4">
              <motion.p 
                className="text-gray-300 text-sm mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Follow us
              </motion.p>
              <div className="flex space-x-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                    aria-label={social.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            custom={1}
            variants={itemVariants}
          >
            <motion.h3 
              className="text-base sm:text-lg font-semibold mb-3 text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Branches
            </motion.h3>
            <ul className="space-y-2">
              {branches.map((branch, i) => (
                <motion.li 
                  key={branch}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                >
                  <motion.span 
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 cursor-pointer text-sm sm:text-base"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {branch}
                  </motion.span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            custom={2}
            variants={itemVariants}
          >
            <motion.h3 
              className="text-base sm:text-lg font-semibold mb-3 text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              What we offer
            </motion.h3>
            <ul className="space-y-2">
              {services.map((service, i) => (
                <motion.li 
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={service === 'Services' ? '/services' : '#'}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm sm:text-base"
                    >
                      {service}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            custom={3}
            variants={itemVariants}
          >
            <motion.h3 
              className="text-base sm:text-lg font-semibold mb-3 text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Contact Us
            </motion.h3>
            <div className="space-y-3">
              {[
                {
                  icon: (
                    <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  ),
                  text: "info@analytica-data.com"
                },
                {
                  icon: (
                    <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  ),
                  text: "+971 4 336 6430"
                },
                {
                  icon: (
                    <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  ),
                  text: "SIT Tower, Office #1114,\nDubai Silicon Oasis,\nDubai, UAE"
                }
              ].map((contact, i) => (
                <motion.div 
                  key={i}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  {contact.icon}
                  <span className="text-gray-300 text-xs sm:text-sm break-all whitespace-pre-line">
                    {contact.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <motion.p 
              className="text-gray-400 text-xs sm:text-sm text-center sm:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Copyright © {currentYear} All Rights Reserved{' '}
              <span className="text-cyan-400">ANALYTICA</span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-right">P.O.BOX: 342014</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {showScrollButton && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 expand-button text-white p-2 sm:p-3 rounded-full z-50 bg-[#3E9BA6]"
          variants={scrollButtonVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <svg className="w-8 h-8 sm:w-10 sm:h-10 p-1 fill-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </motion.footer>
  );
};

export default Footer;
