import { useState, useEffect } from 'react';
import analyticaLogo from '../assets/Analytica-Logo_White_Version_V1.webp';

const Loader = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          
          // Ensure minimum 3 seconds of loading time
          const elapsedTime = Date.now() - startTime;
          const minLoadingTime = 3000; // 3 seconds
          const remainingTime = Math.max(0, minLoadingTime - elapsedTime);
          
          setTimeout(() => {
            setIsVisible(false);
            onLoadingComplete();
          }, remainingTime);
          
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadingComplete, startTime]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center flex flex-col items-center">
        <div className="mb-8">
          <img 
            src={analyticaLogo} 
            alt="ANALYTICA" 
            className="h-16 w-auto mx-auto animate-pulse"
          />
        </div>

        <div className="relative mb-6">
          <div className="text-white text-2xl font-bold tracking-wider">
            LOADING
          </div>
          
          <div 
            className="absolute inset-0 bg-black transition-all duration-1000 ease-out"
            style={{
              clipPath: `polygon(0 0, ${loadingProgress}% 0, ${loadingProgress}% 100%, 0 100%)`,
              filter: 'blur(2px)'
            }}
          >
            <div className="text-white text-2xl font-bold tracking-wider opacity-50">
              LOADING
            </div>
          </div>
        </div>

        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mb-4">
          <div 
            className="h-full bg-[#3E9BA6] transition-all duration-100 ease-out"
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>

        <div className="text-gray-400 text-sm">
          {loadingProgress}%
        </div>
      </div>
    </div>
  );
};

export default Loader;
