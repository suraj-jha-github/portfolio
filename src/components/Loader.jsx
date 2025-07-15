import { useGSAP } from "@gsap/react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import { useState, useEffect } from "react";

const Loader = () => {
  const { progress, total } = useProgress();
  const [isVisible, setIsVisible] = useState(true);
  const [hasStartedHiding, setHasStartedHiding] = useState(false);

  useGSAP(() => {
    // Show content immediately after a short delay, regardless of 3D loading
    if (!hasStartedHiding) {
      setHasStartedHiding(true);
      setTimeout(() => {
        gsap.to(".loader-screen", {
          y: "-100%",
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => setIsVisible(false)
        });
      }, 500); // Reduced from waiting for 100% progress
    }
  }, []);

  // Hide loader completely after animation
  useEffect(() => {
    if (!isVisible) {
      const timer = setTimeout(() => {
        const loader = document.querySelector('.loader-screen');
        if (loader) {
          loader.style.display = 'none';
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="loader-screen bg-black-100 w-full h-dvh fixed top-0 left-0 z-[100]">
      <div className="flex-center w-full h-full">
        <img src="/images/loader.gif" alt="loader" />
      </div>
      <div className="text-white-50 font-bold text-7xl leading-none gradient-title absolute bottom-10 right-10">
        {Math.floor(progress)}%
      </div>
    </div>
  );
};

export default Loader;
