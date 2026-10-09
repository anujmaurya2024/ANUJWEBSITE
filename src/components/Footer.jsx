import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">

      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-3">
          {['Java Backend Developer', 'Spring Boot & Microservices', 'REST APIs & SQL Architect'].map((role) => (
            <div key={role} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a] shrink-0"></span>
              <span className="text-white text-[11px] md:text-sm font-bold tracking-wide">{role}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-1 md:items-center">
          <p>Building secure, scalable enterprise backend architectures</p>
          <div className="flex items-center gap-4 mt-1">
            <a href="#projects" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">Projects</a>
            <span>·</span>
            <a href="#resume" className="underline hover:text-[#ff2a2a] transition-colors underline-offset-4 decoration-1 font-bold">Resume</a>
          </div>
        </div>

        <div className="flex flex-col gap-1 md:items-end">
          <p>Srinagar, Uttarakhand 246174</p>
          <p>{year}</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[9vw] md:text-[8vw] leading-none font-sans font-bold tracking-tighter lowercase select-none text-[#f4f4f4] w-full text-center">
          Anuj Maurya
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <a href="#resume" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">Resume (PDF)</a>
            <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">Contact</a>
            <a href="https://github.com/anujmaurya2024" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">GitHub</a>
          </div>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            © {year} Anuj Maurya | Java Backend Developer
          </p>
        </div>

        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:anjalimaurya028@gmail.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">
            anjalimaurya028@gmail.com
          </a>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
