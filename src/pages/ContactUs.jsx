import PageHero from '../components/PageHero';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState, useEffect, useRef } from 'react';

const ContactUs = () => {
  const [ref1, isVisible1] = useScrollAnimation(0.1);
  const [ref2, isVisible2] = useScrollAnimation(0.1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

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

  const mapLocationVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.2,
        ease: "easeOut"
      }
    })
  };

  const formFieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  };

  const locations = [
    {
      id: 1,
      name: "Lahore, Pakistan",
      flag: "/src/assets/images/flags/pakistan.webp",
      position: "top-[45%] left-[75%]",
      content: "Lahore, Pakistan",
      sliderContent: "Lahore, Pakistan"
    },
    {
      id: 2,
      name: "Dubai, UAE",
      flag: "/src/assets/images/flags/united-arab-emirates.webp",
      position: "top-[42%] left-[68%]",
      content: (
        <>
          <span className="text-sm font-medium text-gray-900 dark:text-white">SIT Tower - Office # 1114</span>
          <div className="text-xs text-gray-600 dark:text-gray-300">Silicon Oasis, Dubai, UAE</div>
        </>
      ),
      sliderContent: (
        <>
          <span className="text-sm font-medium text-gray-900 dark:text-white">SIT Tower - Office # 1114</span>
          <div className="text-xs text-gray-600 dark:text-gray-300">Silicon Oasis, Dubai, UAE</div>
        </>
      )
    },
    {
      id: 3,
      name: "Doha, Qatar",
      flag: "/src/assets/images/flags/qatar.webp",
      position: "top-[43%] left-[70%]",
      content: "Doha, Qatar",
      sliderContent: "Doha, Qatar"
    },
    {
      id: 4,
      name: "Eskilstuna, Sweden",
      flag: "/src/assets/images/flags/sweden.webp",
      position: "top-[25%] left-[52%]",
      content: "Eskilstuna, Sweden",
      sliderContent: "Eskilstuna, Sweden"
    },
    {
      id: 5,
      name: "California, USA",
      flag: "/src/assets/images/flags/united-states.webp",
      position: "top-[35%] left-[15%]",
      content: "California, USA",
      sliderContent: "California, USA"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % locations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + locations.length) % locations.length);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % locations.length);
      }, 3000); // Change slide every 3 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, locations.length]);

  const handleSlideChange = (newSlide) => {
    setCurrentSlide(newSlide);
    // Reset auto-play timer when manually changing slides
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % locations.length);
      }, 3000);
    }
  };

  const contactInfo = [
    { title: "Support", content: "info@analytica-data.com" },
    { title: "Address", content: "SIT Tower - Office# 1114 Silicon Oasis, Dubai UAE" },
    { title: "Phone", content: "+971 4 336 6430" }
  ];

  const services = [
    "General Inquiries",
    "Collaboration Opportunities",
    "Customized Solutions",
    "Feedback"
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        heading="CONTACT US"
        subtitle="GET IN TOUCH WITH ANALYTICA"
        bodyText="Ready to transform your business with cutting-edge technology solutions? Let's discuss how we can help you achieve your goals."
        videoSource="/src/assets/About-US.mp4"
      />

      <motion.section 
        ref={ref1}
        className="py-20 bg-white dark:bg-[#141517] transition-colors duration-300"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible1 ? "visible" : "hidden"}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            custom={0}
            variants={itemVariants}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We'd Love to hear from you.
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Analytica has offices in multiple locations.
            </motion.p>
          </motion.div>

          <motion.div 
            className="relative max-w-6xl mx-auto hidden md:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.img
              src="/src/assets/images/maps-image-contact-us-page.webp"
              alt="World Map"
              className="w-full h-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            
            {locations.map((location, i) => (
              <motion.div 
                key={location.id}
                className={`absolute ${location.position} transform -translate-x-1/2 -translate-y-1/2 group`}
                custom={i}
                variants={mapLocationVariants}
                initial="hidden"
                animate={isVisible1 ? "visible" : "hidden"}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 cursor-pointer"></div>
                <motion.div 
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white dark:bg-[#1a1a1a] bg-opacity-95 dark:bg-opacity-95 px-4 py-3 rounded-lg shadow-md border border-gray-200 dark:border-gray-600 min-w-[200px]">
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className="w-6 h-6 rounded-full overflow-hidden"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <img src={location.flag} alt={`${location.name} Flag`} className="w-full h-full object-cover" />
                      </motion.div>
                      <div>
                        {location.content}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="md:hidden max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onHoverStart={() => setIsAutoPlaying(false)}
            onHoverEnd={() => setIsAutoPlaying(true)}
          >
            <div className="relative bg-white dark:bg-[#1a1a1a] p-6">
              <button
                onClick={() => {
                  prevSlide();
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 5000); 
                }}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#3E9BA6] rounded-full flex items-center justify-center text-white hover:bg-[#2d7a82] transition-colors duration-300 z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={() => {
                  nextSlide();
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#3E9BA6] rounded-full flex items-center justify-center text-white hover:bg-[#2d7a82] transition-colors duration-300 z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center py-8 px-4"
              >
                <motion.div 
                  className="w-16 h-16 rounded-full overflow-hidden mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <img 
                    src={locations[currentSlide].flag} 
                    alt={`${locations[currentSlide].name} Flag`} 
                    className="w-full h-full object-cover" 
                  />
                </motion.div>
                <div className="text-center">
                  {locations[currentSlide].sliderContent}
                </div>
              </motion.div>

              <div className="flex justify-center space-x-2 mt-4">
                {locations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      handleSlideChange(index);
                      setIsAutoPlaying(false);
                      setTimeout(() => setIsAutoPlaying(true), 5000);
                    }}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentSlide 
                        ? 'bg-[#3E9BA6]' 
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="mt-16 grid md:grid-cols-3 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible1 ? "visible" : "hidden"}
          >
            {contactInfo.map((info, i) => (
              <motion.div 
                key={info.title}
                custom={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{info.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{info.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        ref={ref2}
        className="py-10 bg-white dark:bg-[#141517] transition-colors duration-300"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible2 ? "visible" : "hidden"}
      >
        <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <motion.div 
              className="space-y-5"
              custom={0}
              variants={itemVariants}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white w-3/6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Want To Discuss A Project?
              </motion.h2>
              <motion.p 
                className="text-md text-gray-600 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                At Analytica, we can help you successfully bring your solutions to life, through custom software development, service design or artificial intelligence. Let's start a conversation today.
              </motion.p>
              
              <div className="space-y-4">
                <motion.h3 
                  className="text-xl text-gray-900 dark:text-white"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  We're here to assist you in various ways:
                </motion.h3>
                <ul>
                  {services.map((service, i) => (
                    <motion.li 
                      key={service}
                      className="flex items-center text-gray-600 dark:text-gray-300 text-lg"
                      custom={i}
                      variants={itemVariants}
                      initial="hidden"
                      animate={isVisible2 ? "visible" : "hidden"}
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.span 
                        className="w-2 h-2 bg-black dark:bg-white rounded-full mr-3"
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.2 }}
                      ></motion.span>
                      {service}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <motion.p 
                className="text-gray-600 dark:text-gray-300 leading-relaxed text-md"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                We value your feedback and strive to continuously improve our services. Your input helps us enhance our user experience and provide better support. Thank you for choosing Analytica. We look forward to assisting you!
              </motion.p>
            </motion.div>

            <motion.div 
              className="bg-white dark:bg-[#1a1a1a] p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 transition-colors duration-300"
              custom={1}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <form className="space-y-6">
                {[
                  { id: "name", label: "Name*", type: "text" },
                  { id: "email", label: "Email*", type: "email" },
                  { id: "phone", label: "Phone*", type: "tel" },
                  { id: "subject", label: "Subject*", type: "text" }
                ].map((field, i) => (
                  <motion.div 
                    key={field.id}
                    custom={i}
                    variants={formFieldVariants}
                    initial="hidden"
                    animate={isVisible2 ? "visible" : "hidden"}
                  >
                    <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {field.label}
                    </label>
                    <motion.input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3E9BA6] focus:border-transparent bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                ))}

                <motion.div
                  custom={4}
                  variants={formFieldVariants}
                  initial="hidden"
                  animate={isVisible2 ? "visible" : "hidden"}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message*
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Write your message"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3E9BA6] focus:border-transparent bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none transition-colors duration-300"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  ></motion.textarea>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-3 p-4 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-[#2a2a2a] w-1/3 transition-colors duration-300"
                  custom={5}
                  variants={formFieldVariants}
                  initial="hidden"
                  animate={isVisible2 ? "visible" : "hidden"}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="checkbox"
                    id="recaptcha"
                    className="w-4 h-4 text-[#3E9BA6] border-gray-300 dark:border-gray-600 rounded focus:ring-[#3E9BA6] focus:ring-2 bg-white dark:bg-[#1a1a1a] checked:bg-[#3E9BA6] checked:border-[#3E9BA6]"
                  />
                  <label htmlFor="recaptcha" className="text-sm text-gray-700 dark:text-gray-300">
                    I'm not a robot
                  </label>
                  <div className="flex items-center space-x-2 ml-auto">
                    <img 
                      src="/src/assets/images/OIP.webp" 
                      alt="reCAPTCHA" 
                      className="w-10 h-10"
                    />
                  </div>
                </motion.div>

                <motion.p 
                  className="text-xs text-gray-500 dark:text-gray-400"
                  custom={6}
                  variants={formFieldVariants}
                  initial="hidden"
                  animate={isVisible2 ? "visible" : "hidden"}
                >
                  This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </motion.p>

                <motion.button
                  type="submit"
                  className="send-button py-2 px-11 rounded-full uppercase tracking-wide"
                  custom={7}
                  variants={formFieldVariants}
                  initial="hidden"
                  animate={isVisible2 ? "visible" : "hidden"}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactUs;
