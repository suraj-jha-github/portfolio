import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ExperienceCard = ({ experience, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      cardRef.current,
      { 
        opacity: 0, 
        y: 50,
        scale: 0.9
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power2.out"
      }
    );
  }, []);

  return (
    <div 
      ref={cardRef}
      className="bg-black-300 rounded-2xl p-7 w-full h-full group cursor-pointer hover:scale-105 transition-all duration-500 ease-out"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-blue-50 md:text-3xl text-2xl font-bold mb-2">
            {experience.company}
          </h3>
          <p className="text-blue-50 md:text-2xl text-xl opacity-80">
            {experience.position}
          </p>
          <p className="text-pink-100 md:text-lg text-base mt-1">
            {experience.duration}
          </p>
        </div>

        {/* Skills */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="bg-pink-100 text-black px-3 py-1 rounded-full md:text-sm text-xs font-medium hover:bg-pink-200 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className={`flex-1 transition-all duration-500 ease-out ${
          isExpanded ? 'max-h-none' : 'max-h-24 overflow-hidden'
        }`}>
          <div className="space-y-2 md:text-lg text-base text-white-50 opacity-90">
            {experience.description.map((desc, descIndex) => (
              <p key={descIndex} className="leading-relaxed">
                • {desc}
              </p>
            ))}
          </div>
        </div>

        {/* Expand/Collapse Indicator */}
        <div className="mt-4 flex justify-center">
          <div className={`transform transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : 'rotate-0'
          }`}>
            <svg className="w-5 h-5 text-pink-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard; 