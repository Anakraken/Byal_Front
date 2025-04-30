import { useEffect, useState } from "react";

const getIsMobilePortrait = () => {
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;
  return window.innerWidth <= 767 && isPortrait;
};

export function useResponsive() {
  const [isMobilePortrait, setIsMobilePortrait] = useState(getIsMobilePortrait());

  useEffect(() => {
    const handleResize = () => {
      setIsMobilePortrait(getIsMobilePortrait());
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return { isMobilePortrait };
}