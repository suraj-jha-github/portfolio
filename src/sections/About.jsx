import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import TitleHeader from "../components/TitleHeader";
import GradientSpheres from "../components/GradientSpheres";
import ExperienceCard from "../components/ExperienceCard";
import { bentoSocialLinks, experience } from "../constants";
import { Alien } from "../components/models/Alien";

const About = () => {
  return (
    <section id="about" className="flex-center relative md:p-0 px-5">
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-1"
        sphere2Class="about-gradient-sphere about-sphere-2"
      />

      <div className="container w-full h-full md:my-40 my-20 relative z-10">
        <TitleHeader
          title="About Me"
          number="01"
          text="Passionate Creator, Lifelong Learner"
        />
        <div className="md:mt-20 mt-10">
          <div className="grid grid-cols-12 md:grid-rows-12 gap-5">
            <div className="md:col-span-7 col-span-12 row-span-5">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div>
                  <img
                    src="/images/flower.svg"
                    alt="flower"
                    className="md:w-32 w-16 flower"
                  />
                </div>
                <div className="mt-5">
                  <h1 className="text-blue-50 md:text-5xl text-3xl">
                    Suraj Jha
                  </h1>
                  <p className="md:text-2xl mt-2">
                  I'm a MERN stack developer with 3.5 years of experience, specializing in frontend development.
Proficient in React.js, JavaScript, HTML, and CSS with a keen eye for responsive UI/UX design.
I focus on building clean, interactive, and performance-optimized user interfaces.
Collaborating closely with designers and backend teams is one of my core strengths.
I'm passionate about creating seamless user experiences that bring products to life.


                  </p>
                  <div className="mt-4 text-pink-100 text-sm">
                    <p>🎭 Code Create Repeat 🎭</p>
                    <p>🌙 Night Owl Coder 🌙</p>
                    <p>💻Build Break Fix 💻</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 col-span-12 row-span-5">
              <div className="bg-[#C8D751] hover:cursor-grab rounded-2xl w-full md:h-full h-60 relative overflow-hidden">
                {/* Interactive text overlay */}
                <div className="absolute top-4 left-4 z-10 text-black font-bold text-lg animate-bounce">
                  👽 Play with me!
                </div>
                <div className="absolute top-12 left-4 z-10 text-black text-sm animate-pulse">
                  🖱️Double Click & drag
                </div>
                <div className="absolute bottom-4 right-4 z-10 text-black text-sm animate-pulse">
                  🎮 Move me around!
                </div>
                
                <div className="w-full h-full">
                  <Canvas>
                    <ambientLight />
                    <OrbitControls enableZoom={false} />
                    <Alien
                      scale={2}
                      position={[0, -5.5, 0]}
                      rotation={[0, -0.5, 0]}
                    />
                  </Canvas>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium">
                    💻 Web Design & Dev
                  </h1>
                  <p className="md:text-2xl max-w-96">
                    Cleanly Designed, Conversion-focused, and build for easy
                    updates.
                  </p>
                  <div className="mt-2 text-pink-100 text-sm">
                    <p>⚡ Lightning fast ⚡</p>
                    <p>🎯 User-focused 🎯</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium">
                    🎨 UX UI Design
                  </h1>
                  <p className="md:text-2xl max-w-96">
                    Seamless web or mobile app design to wow your users.
                  </p>
                  <div className="mt-2 text-pink-100 text-sm">
                    <p>✨ Pixel perfect ✨</p>
                    <p>🎭 Frontend Soul. Backend Brain 🧠</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 col-span-12 row-span-4">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col justify-between h-full">
                  <h1 className="gradient-title md:text-4xl text-2xl font-bold animate-pulse">
                    🚀 BE YOURSELF!
                  </h1>
                  <h1 className="gradient-title md:text-4xl text-2xl font-bold animate-bounce">
                    ✨ BE DIFFERENT!
                  </h1>
                  <h1 className="gradient-title md:text-4xl text-2xl font-bold animate-pulse">
                    💡 BUILD DIFFERENT!
                  </h1>
                  <div className="mt-4 text-pink-100 text-sm">
                    <p>🎯 Think outside the box</p>
                    <p>🌟 Break the rules (sometimes)</p>
                    <p>🎨 Create magic with code</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Second Column - Call and WhatsApp */}
            <div className="md:col-span-4 col-span-12 row-span-4">
              <div className="flex flex-col gap-5 h-full">
                {/* Call Button */}
                <a 
                  href="tel:+918282988696"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block flex-1"
                >
                  <div className="bg-black-300 rounded-2xl p-7 w-full h-full group cursor-pointer">
                    <div className="flex justify-between items-center h-full">
                      <div className="flex items-center gap-5">
                        <svg className="md:w-8 w-6 h-8 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19c-.54 0-.99.45-.99.99 0 9.36 7.6 16.96 16.96 16.96.54 0 .99-.45.99-.99v-3.5c0-.54-.45-.99-.99-.99z"/>
                        </svg>
                        <h1 className="gradient-title md:text-3xl text-xl font-medium">
                          Call
                        </h1>
                      </div>
                      <div className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
                        <img
                          src="/images/arrowupright.svg"
                          alt="arrow-up"
                          className="md:scale-100 scale-50"
                        />
                      </div>
                    </div>
                  </div>
                </a>
                
                {/* WhatsApp Button */}
                <a 
                  href="https://wa.me/918282988696"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block flex-1"
                >
                  <div className="bg-black-300 rounded-2xl p-7 w-full h-full group cursor-pointer">
                    <div className="flex justify-between items-center h-full">
                      <div className="flex items-center gap-5">
                        <img src="/images/whatsapp.svg" alt="whatsapp" />
                        <h1 className="gradient-title md:text-3xl text-xl font-medium">
                          WhatsApp
                        </h1>
                      </div>
                      <div className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
                        <img
                          src="/images/arrowupright.svg"
                          alt="arrow-up"
                          className="md:scale-100 scale-50"
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Third Column - Gmail and LinkedIn */}
            <div className="md:col-span-4 col-span-12 row-span-4">
              <div className="flex flex-col gap-5 h-full">
                {/* Gmail Button */}
                <a 
                  href="mailto:mejhasuraj@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block flex-1"
                >
                  <div className="bg-black-300 rounded-2xl p-7 w-full h-full group cursor-pointer">
                    <div className="flex justify-between items-center h-full">
                      <div className="flex items-center gap-5">
                        <svg className="md:w-8 w-6 h-8 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                        <h1 className="gradient-title md:text-3xl text-xl font-medium">
                          Gmail
                        </h1>
                      </div>
                      <div className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
                        <img
                          src="/images/arrowupright.svg"
                          alt="arrow-up"
                          className="md:scale-100 scale-50"
                        />
                      </div>
                    </div>
                  </div>
                </a>
                
                {/* LinkedIn Button */}
                <a 
                  href="https://www.linkedin.com/in/suraj-jha-b48993201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block flex-1"
                >
                  <div className="bg-black-300 rounded-2xl p-7 w-full h-full group cursor-pointer">
                    <div className="flex justify-between items-center h-full">
                      <div className="flex items-center gap-5">
                        <img src="/images/linkedin.svg" alt="linkedin" />
                        <h1 className="gradient-title md:text-3xl text-xl font-medium">
                          LinkedIn
                        </h1>
                      </div>
                      <div className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
                        <img
                          src="/images/arrowupright.svg"
                          alt="arrow-up"
                          className="md:scale-100 scale-50"
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="md:mt-20 mt-10">
          <div className="w-full px-2 md:px-4 lg:px-8 md:p-0 mb-10">
            <TitleHeader
              title="My Experience"
              number="02"
              text="Professional journey and achievements"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experience.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
