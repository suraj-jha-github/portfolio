import { useState } from "react";
import { navItems } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  useGSAP(() => {
    const tl = gsap.timeline();

    if (isOpen) {
      tl.to(".side-bar-bg", {
        x: 0,
        opacity: 1,
        ease: "power2.inOut",
      });
      tl.to(
        ".side-bar-item",
        {
          opacity: 1,
          stagger: 0.05,
          ease: "power2.inOut",
        },
        "<"
      );
    } else {
      tl.to(".side-bar-bg", {
        x: "100%",
        opacity: 0,
        ease: "power2.inOut",
      });
      tl.to(".side-bar-item", {
        opacity: 0,
      });
    }
  }, [isOpen]);

  return (
    <div className="md:hidden block">
      <div className="fixed z-[100] top-7 right-5" onClick={toggleSideBar}>
        <img src="images/menu-icon.png" alt="menu" />
      </div>
      <div className="fixed z-[100] -translate-x-[100%] w-full h-dvh side-bar-bg">
        <div className="flex justify-end m-5" onClick={toggleSideBar}>
          <img src="images/x.png" alt="close" />
        </div>
        <div className="mt-20 px-10">
          <div className="flex flex-col items-center gap-10">
            {/* Download CV Button at the top */}
            <div className="side-bar-item opacity-0 w-full flex justify-center">
              <a
                href="/cv.pdf"
                download
                className="mb-6 px-6 py-3 rounded-full bg-pink-100 text-black font-semibold shadow-md hover:bg-pink-200 transition-colors duration-300 text-xl w-full text-center"
              >
                Download CV
              </a>
            </div>
            {navItems.map((item, index) => (
              <div
                key={index}
                className="side-bar-item opacity-0 cursor-pointer hover:underline transition-all duration-700"
              >
                <a
                  className="gradient-title text-2xl font-bold"
                  href={item.href}
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
