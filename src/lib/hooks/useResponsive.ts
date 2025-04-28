import { useState, useEffect } from 'react';

export const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkScreen = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 767);
      setIsTablet(width > 767 && width <= 1024);
      setIsDesktop(width > 1024);
      setIsPortrait(window.matchMedia('(orientation: portrait)').matches);
      setIsLandscape(window.matchMedia('(orientation: landscape)').matches);
    };

    checkScreen(); // Run on mount

    window.addEventListener('resize', checkScreen);
    window.addEventListener('orientationchange', checkScreen);

    return () => {
      window.removeEventListener('resize', checkScreen);
      window.removeEventListener('orientationchange', checkScreen);
    };
  }, []);

  return {
    isMobile,
    isTablet,
    isDesktop,
    isPortrait,
    isLandscape,
  };
};