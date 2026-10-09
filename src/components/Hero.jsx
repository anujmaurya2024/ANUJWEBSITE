import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileImage from '../assets/hero video/anuj.jpeg';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-black" style={{ height: '100dvh', minHeight: '100vh' }}>
      {/* Background Image */}
      <img
        src={profileImage}
        alt="Anuj Maurya"
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
      />

      {/* Content Container */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full">
        
        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Hi, I’m <br /> <span className="text-transparent [-webkit-text-stroke:1.5px_black]">Anuj Maurya</span>
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white text-sm md:text-base font-semibold mb-6 max-w-lg drop-shadow-md leading-relaxed"
          >
            Java Backend Developer <span className="text-red-400">|</span> Spring Boot <span className="text-red-400">|</span> REST APIs <span className="text-red-400">|</span> SQL <span className="text-red-400">|</span> Microservices
            <br />
            <span className="text-gray-300 text-xs md:text-sm font-normal">
              Specializing in secure layered architectures, JWT authentication, and high-performance database-driven backend solutions.
            </span>
          </p>

          {/* Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            {/* Primary Button */}
            <a href="#projects" className="px-4 py-2 md:px-6 md:py-2.5 text-xs md:text-sm rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md">
              View Projects
            </a>

            <a href="#resume" className="px-4 py-2 md:px-6 md:py-2.5 text-xs md:text-sm rounded-full bg-[#ff2a2a] text-white font-bold hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-md">
              View Resume
            </a>

            <a href="#contact" className="px-4 py-2 md:px-6 md:py-2.5 text-xs md:text-sm rounded-full bg-black/40 border border-white text-white font-semibold hover:bg-black/60 transition-all duration-300 backdrop-blur-md">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
