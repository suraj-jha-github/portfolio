import { useState, useRef } from "react";
import { slides } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const carouselRef = useRef(null);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prevSlide) => (prevSlide + 1) % (slides.length - 1));
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + (slides.length - 1)) % (slides.length - 1)
    );
  };

  // Mouse handlers for drag functionality
  const handleMouseDown = (e) => {
    if (isAnimating) return;
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || isAnimating) return;
    setCurrentX(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    const dragDistance = currentX - startX;
    const threshold = 100; // Minimum distance to trigger slide
    
    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    
    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => setIsAnimating(false)
    });

    tl.to(".slider-item", {
      x: `-${currentSlide * 63}vw`,
      duration: 0.8,
      ease: "power2.out",
    });
  }, [currentSlide]);

  return (
    <div className="relative">
      <div className="w-full relative lg:h-[60vh] md:h-[40vh] h-[60vh]">
        <div className="carousel-gradient-left-box md:w-52 w-16 h-full absolute bottom-0 left-0 z-20"></div>
        <div className="carousel-gradient-right-box md:w-52 w-16 h-full absolute bottom-0 right-0 z-20"></div>
        <div 
          ref={carouselRef}
          className="absolute w-full -left-[43vw] top-0 cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="flex w-full lg:h-[60vh] md:h-[40vh] h-[60vh] items-center gap-[3vw]">
            {slides.map((slide, index) => (
              <div
                className="slider-item w-[60vw] h-full flex-none relative cursor-pointer hover:scale-105 transition-all duration-500 ease-out select-none"
                key={index}
                onClick={() => !isDragging && slide.link && window.open(slide.link, '_blank')}
              >
                <img
                  src={slide.img}
                  alt="slide"
                  className="w-full h-full object-cover object-center hidden md:block transition-transform duration-300 hover:scale-105 pointer-events-none"
                />
                <img
                  src={slide.mobileImg}
                  alt="slide"
                  className="w-full h-full object-cover object-center md:hidden transition-transform duration-300 hover:scale-105 pointer-events-none"
                />
                <div className="absolute w-full h-20 bottom-0 left-0 bg-black-300 bg-opacity-90 px-5">
                  <div className="w-full h-full flex justify-between items-center">
                    <div className="flex-center gap-2">
                      <p className="md:text-2xl text-white-50 opacity-80">
                        {index + 1}.
                      </p>
                      <p className="md:text-2xl text-white-50 opacity-80">
                        {slide.title}
                      </p>
                    </div>
                    <div className="flex-center gap-5">
                      <p className="text-2xl hidden md:block text-white-50 opacity-80">
                        Preview Project
                      </p>
                      <img
                        src="/images/arrowupright.svg"
                        alt="arrow"
                        className="md:size-10 size-7 transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 text-white-50 flex justify-end gap-5 md:-translate-x-32 -translate-x-5">
        <div
          onClick={prevSlide}
          className={`rounded-full cursor-pointer bg-blue-50 hover:bg-pink-100 active:scale-90 transition-all duration-300 ease-out w-12 h-12 flex-center ${
            isAnimating ? 'opacity-50 pointer-events-none' : 'hover:scale-110'
          }`}
        >
          <img src="/images/CaretLeft.svg" alt="left" className="w-5 h-5 transition-transform duration-300" />
        </div>
        <div
          onClick={nextSlide}
          className={`rounded-full cursor-pointer bg-blue-50 hover:bg-pink-100 active:scale-90 transition-all duration-300 ease-out w-12 h-12 flex-center ${
            isAnimating ? 'opacity-50 pointer-events-none' : 'hover:scale-110'
          }`}
        >
          <img src="/images/CaretRight.svg" alt="Right" className="w-5 h-5 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
