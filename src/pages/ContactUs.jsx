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
  
  // Form validation state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    recaptcha: false
  });
  
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

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
      flag: "/images/flags/pakistan.webp",
      position: "top-[45%] left-[75%]",
      content: "Lahore, Pakistan",
      sliderContent: "Lahore, Pakistan"
    },
    {
      id: 2,
      name: "Dubai, UAE",
      flag: "/images/flags/united-arab-emirates.webp",
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
      flag: "/images/flags/qatar.webp",
      position: "top-[43%] left-[70%]",
      content: "Doha, Qatar",
      sliderContent: "Doha, Qatar"
    },
    {
      id: 4,
      name: "Eskilstuna, Sweden",
      flag: "/images/flags/sweden.webp",
      position: "top-[25%] left-[52%]",
      content: "Eskilstuna, Sweden",
      sliderContent: "Eskilstuna, Sweden"
    },
    {
      id: 5,
      name: "California, USA",
      flag: "/images/flags/united-states.webp",
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

  // Validation functions
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';
      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) return 'Please enter a valid phone number';
        return '';
      case 'subject':
        if (!value.trim()) return 'Subject is required';
        if (value.trim().length < 5) return 'Subject must be at least 5 characters';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return '';
      case 'recaptcha':
        if (!value) return 'Please verify that you are not a robot';
        return '';
      default:
        return '';
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: fieldValue
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    const error = validateField(name, fieldValue);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
      recaptcha: true
    });

    if (validateForm()) {
      // Simulate form submission
      try {
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
        setSubmittedData({ ...formData });
        setShowSuccessModal(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          recaptcha: false
        });
        setErrors({});
        setTouched({});
      } catch (error) {
        alert('Sorry, there was an error sending your message. Please try again.');
      }
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <PageHero
        heading="CONTACT US"
        subtitle="GET IN TOUCH WITH ANALYTICA"
        bodyText="Ready to transform your business with cutting-edge technology solutions? Let's discuss how we can help you achieve your goals."
        videoSource="/videos/About-US.mp4"
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
              src="/images/maps-image-contact-us-page.webp"
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
         id="contact-form"
         ref={ref2}
         className="py-10 bg-white dark:bg-[#141517] transition-colors duration-300"
         variants={containerVariants}
         initial="hidden"
         animate={isVisible2 ? "visible" : "hidden"}
       >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-start">
            <motion.div 
              className="space-y-5"
              custom={0}
              variants={itemVariants}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white w-full lg:w-3/4"
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
              className="bg-white dark:bg-[#1a1a1a] p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 transition-colors duration-300"
              custom={1}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
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
                      value={formData[field.id]}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-md focus:outline-none focus:ring-2 transition-colors duration-300 text-sm sm:text-base bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${
                        errors[field.id] && touched[field.id]
                          ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                          : 'border-gray-300 dark:border-gray-600 focus:ring-[#3E9BA6] focus:border-transparent'
                      }`}
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                    {errors[field.id] && touched[field.id] && (
                      <motion.p 
                        className="text-red-500 text-xs mt-1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {errors[field.id]}
                      </motion.p>
                    )}
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
                    rows="4"
                    placeholder="Write your message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-md focus:outline-none focus:ring-2 transition-colors duration-300 text-sm sm:text-base bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none ${
                      errors.message && touched.message
                        ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                        : 'border-gray-300 dark:border-gray-600 focus:ring-[#3E9BA6] focus:border-transparent'
                    }`}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  ></motion.textarea>
                  {errors.message && touched.message && (
                    <motion.p 
                      className="text-red-500 text-xs mt-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div 
                  className={`flex items-center justify-between p-4 border rounded-md bg-gray-50 dark:bg-[#2a2a2a] w-full transition-colors duration-300 ${
                    errors.recaptcha && touched.recaptcha
                      ? 'border-red-500'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                  custom={5}
                  variants={formFieldVariants}
                  initial="hidden"
                  animate={isVisible2 ? "visible" : "hidden"}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center space-x-3 flex-shrink-0">
                    <input
                      type="checkbox"
                      id="recaptcha"
                      name="recaptcha"
                      checked={formData.recaptcha}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className="w-4 h-4 text-[#3E9BA6] border-gray-300 dark:border-gray-600 rounded focus:ring-[#3E9BA6] focus:ring-2 bg-white dark:bg-[#1a1a1a] checked:bg-[#3E9BA6] checked:border-[#3E9BA6]"
                    />
                    <label htmlFor="recaptcha" className="text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">
                      I'm not a robot
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 flex-shrink-0">
                    <img 
                      src="/images/OIP.webp" 
                      alt="reCAPTCHA" 
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                  </div>
                </motion.div>
                {errors.recaptcha && touched.recaptcha && (
                  <motion.p 
                    className="text-red-500 text-xs mt-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {errors.recaptcha}
                  </motion.p>
                )}

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
                  disabled={isSubmitting}
                  className={`send-button py-2 px-6 sm:px-11 rounded-full uppercase tracking-wide text-sm sm:text-base w-full sm:w-auto transition-all duration-300 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  custom={7}
                  variants={formFieldVariants}
                  initial="hidden"
                  animate={isVisible2 ? "visible" : "hidden"}
                  whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Send'
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
                 </div>
       </motion.section>

       {showSuccessModal && (
         <motion.div
           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           onClick={() => setShowSuccessModal(false)}
         >
                       <motion.div
              className="bg-white dark:bg-black rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden border border-gray-200 dark:border-gray-800"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-br from-[#172F34] to-[#0f1f23] p-8 text-center relative overflow-hidden">
               <motion.div
                 className="absolute inset-0 bg-white opacity-10"
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 transition={{ delay: 0.3, duration: 0.6 }}
               />
               
               <motion.div
                 className="relative z-10"
                 initial={{ scale: 0, rotate: -180 }}
                 animate={{ scale: 1, rotate: 0 }}
                 transition={{ delay: 0.2, duration: 0.6, type: "spring", damping: 15 }}
               >
                 <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                                       <motion.svg
                      className="w-12 h-12 text-[#172F34]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
                    >
                     <motion.path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth={3}
                       d="M5 13l4 4L19 7"
                       initial={{ pathLength: 0 }}
                       animate={{ pathLength: 1 }}
                       transition={{ delay: 0.7, duration: 0.6, ease: "easeInOut" }}
                     />
                   </motion.svg>
                 </div>
               </motion.div>

               {[...Array(6)].map((_, i) => (
                 <motion.div
                   key={i}
                   className="absolute w-2 h-2 bg-white rounded-full opacity-60"
                   style={{
                     left: `${20 + i * 15}%`,
                     top: `${30 + (i % 2) * 40}%`,
                   }}
                   initial={{ scale: 0, opacity: 0 }}
                   animate={{ scale: 1, opacity: 0.6 }}
                   transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                 />
               ))}
             </div>

             
             <div className="p-6 text-center">
               <motion.h3
                 className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.4, duration: 0.5 }}
               >
                 Message Sent Successfully!
               </motion.h3>
               
               <motion.p
                 className="text-gray-600 dark:text-gray-300 mb-6"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.5, duration: 0.5 }}
               >
                 Thank you for reaching out to us. We'll get back to you soon!
               </motion.p>

               
                               <motion.div
                  className="bg-gray-50 dark:bg-[#111111] rounded-lg p-4 mb-6 text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                                   <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-[#172F34]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Message Details
                  </h4>
                                   <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Name:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{submittedData?.name || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Email:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{submittedData?.email || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Phone:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{submittedData?.phone || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Subject:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{submittedData?.subject || 'N/A'}</span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex justify-between items-start">
                        <span className="text-gray-600 dark:text-gray-400">Message:</span>
                        <span className="font-medium text-gray-900 dark:text-white text-right max-w-[200px] break-words">
                          {submittedData?.message || 'N/A'}
                        </span>
                      </div>
                    </div>
                  </div>
               </motion.div>

               
               <motion.div
                 className="flex space-x-3"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.7, duration: 0.5 }}
               >
                                   <button
                    onClick={() => {
                      setShowSuccessModal(false);
                      setSubmittedData(null);
                    }}
                    className="flex-1 bg-[#172F34] hover:bg-[#0f1f23] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105"
                  >
                    Close
                  </button>
                                   <button
                    onClick={() => {
                      setShowSuccessModal(false);
                      setSubmittedData(null);
                     
                      document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 bg-gray-200 dark:bg-[#111111] hover:bg-gray-300 dark:hover:bg-[#222222] text-gray-900 dark:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105"
                  >
                    Send Another
                  </button>
               </motion.div>
             </div>
           </motion.div>
         </motion.div>
       )}
     </div>
   );
 };

export default ContactUs;
