import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Contact Us', to: '/contact' },
  ];
  const moreItems = [
    { name: 'Industries', to: '/industries' },
    { name: 'A-To-Z Software Development', to: '/software-development' },
    { name: 'Research & Development', to: '/research' },
    { name: 'Partners', to: '/partners' },
    { name: 'Careers/Internship', to: '/careers' },
  ];
  const allMenuItems = [...navItems, ...moreItems];
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  };

  return (
    <>
      <motion.nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#152024] dark:bg-[#141517]' : 'bg-transparent'
        }`}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {}
            <motion.div 
              className="flex-shrink-0"
              variants={logoVariants}
              initial="hidden"
              animate="visible"
            >
              <Link to="/" className="flex items-center hover:scale-105 transition-transform duration-200">
                <img 
                  src="/Analytica-Logo_White_Version_V1.webp" 
                  alt="Analytica" 
                  className="h-8 w-auto"
                />
              </Link>
            </motion.div>
            {}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex items-baseline space-x-8 min-w-max">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    custom={i}
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={item.to}
                      className={`px-3 py-2 text-base font-medium cursor-pointer transition-all duration-200 hover:text-lg ${
                        isActive(item.to) 
                          ? 'text-[#3E9BA6]' 
                          : 'text-white hover:text-[#3E9BA6]'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
            {}
            <div className="hidden md:flex items-center space-x-4">
              <motion.div
                variants={navItemVariants}
                custom={4}
                initial="hidden"
                animate="visible"
              >
                <ThemeToggle />
              </motion.div>
              {!isOpen ? (
                <motion.button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center text-white hover:text-[#3E9BA6] transition-colors duration-200"
                  variants={navItemVariants}
                  custom={5}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <span className="text-base font-medium">More</span>
                </motion.button>
              ) : (
                <div className="w-[100px]"></div>
              )}
            </div>
            {}
            <div className="md:hidden flex items-center space-x-2">
              <motion.div
                variants={navItemVariants}
                custom={4}
                initial="hidden"
                animate="visible"
              >
                <ThemeToggle />
              </motion.div>
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-[#3E9BA6] focus:outline-none focus:text-[#3E9BA6]"
                variants={navItemVariants}
                custom={5}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>
      {}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          />
          {}
          <div 
            className="absolute right-0 top-0 h-full w-[450px] bg-gray-900 dark:bg-[#141517] bg-opacity-90 shadow-2xl"
          >
            {}
            <div className="flex items-center justify-end p-6">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {}
            <div className="flex-1 overflow-y-auto py-4">
              <div>
                {allMenuItems.map((item, i) => (
                  <div key={item.name}>
                    <Link
                      to={item.to}
                      className={`block px-6 py-3 text-white hover:bg-[#3E9BA6] hover:bg-opacity-50 hover:pl-8 transition-all duration-300 ease-in-out text-[25px] font-semibold ${
                        isActive(item.to) ? 'bg-[#3E9BA6] bg-opacity-50 text-[#3E9BA6]' : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Navbar;
