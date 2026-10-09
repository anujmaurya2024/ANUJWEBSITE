import React from 'react';
import profileImage from '../assets/about/anujjjj.jpg';

const skills = [
  'Java', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Hibernate',
  'Spring Security', 'JWT', 'REST APIs', 'SQL', 'MySQL', 'PostgreSQL',
  'MongoDB', 'Docker', 'Git', 'Maven', 'Postman', 'React.js', 'Python',
  'Data Structures & Algorithms', 'Microservices'
];

const experience = [
  {
    org: 'Hemvati Nandan Bahuguna Garhwal University',
    role: 'Student Co-ordinator & Tech Head (TPIC)',
    period: 'Current',
    points: [
      'Leading tech strategy and backend architecture for the TPIC platform.',
      'Organized campus technical workshops and startup initiatives across the university.',
    ],
  },
  {
    org: 'CODE 1 HACKATHON — IIT Delhi',
    role: 'Finalist (3rd Place)',
    period: 'March 2026',
    points: [
      'Engineered and pitched high-performance backend solution under intensive hackathon conditions.',
    ],
  },
  {
    org: 'Anveshan 2025 Research Competition — GB Pant University',
    role: 'Finalist (1st Place)',
    period: 'Nov 2025',
    points: [
      'Awarded first place for innovative technical depth and software architecture.',
    ],
  },
  {
    org: 'National Entrepreneurship Challenge (NEC) — IIT Bombay',
    role: 'Finalist (5th Place)',
    period: 'May 2025',
    points: [
      'Ranked top 5 nationwide among university teams for technical execution.',
    ],
  },
];

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">

        {/* Left Side: ID Badge */}
        <div className="flex flex-col items-center w-full md:w-[300px] shrink-0 mt-12 md:mt-0">
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>

            <div className="bg-gray-900 w-full max-w-[260px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 flex flex-col items-start">
                <img 
                  src={profileImage} 
                  alt="Anuj Maurya" 
                  className="w-full h-1/2 object-cover bg-gray-700"
                  onError={(e) => e.target.style.display = 'none'}
                />
                <div className="w-full flex-1 flex flex-col items-center justify-center gap-1.5 px-3 py-3">
                  <div className="text-center">
                    <p className="text-white font-black text-xs leading-tight">Anuj</p>
                    <p className="text-white font-black text-xs leading-tight">Maurya</p>
                  </div>
                  <span className="text-[#ff2a2a] text-[9px] font-bold uppercase tracking-wider text-center">Java Backend Developer</span>
                  <div className="w-full h-px bg-white/10 my-0.5"></div>
                  <span className="text-gray-400 text-[10px] text-center">B.Tech — Information Technology</span>
                  <span className="text-gray-400 text-[10px] text-center">Hemvati Nandan Bahuguna Garhwal University</span>
                  <span className="text-gray-500 text-[10px]">Expected: June 2028</span>
                  <div className="mt-1 px-3 py-1 bg-[#ff2a2a]/20 border border-[#ff2a2a]/40 rounded-full">
                    <span className="text-[#ff6060] text-[9px] font-bold">Open to Opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">

          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Professional Summary</h2>
          <p className="text-base md:text-lg font-medium mb-8 leading-relaxed max-w-3xl text-red-50">
            I'm <span className="text-black text-xl font-black mx-1 tracking-wide uppercase">Anuj Maurya</span>, a B.Tech Information Technology student and Java Backend Developer with strong foundations in Core Java, Object-Oriented Programming, Data Structures & Algorithms, and SQL. Hands-on experience building secure RESTful APIs and backend applications using Spring Boot, Spring MVC, Spring Data JPA, Hibernate, Spring Security, and JWT. Experienced with MySQL, MongoDB, Git, GitHub, Maven, Postman, Docker, and React.js.
          </p>

          {/* Experience */}
          <div className="mb-8">
            <h3 className="text-black font-black text-base mb-3 uppercase tracking-widest">Experience</h3>
            <div className="flex flex-col gap-3">
              {experience.map((exp, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={String(i * 100 + 200)}
                  className="bg-black/20 rounded-xl px-4 py-3 hover:bg-black/30 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <div>
                      <span className="font-black text-white text-sm">{exp.org}</span>
                      <span className="text-red-200 text-xs ml-2">— {exp.role}</span>
                    </div>
                    <span className="text-red-300 text-xs font-bold whitespace-nowrap">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="text-red-100 text-xs leading-relaxed">{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-black font-black text-base mb-3 uppercase tracking-widest">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  data-aos="zoom-in"
                  data-aos-delay={String(i * 30 + 400)}
                  className="px-3 py-1 bg-black/30 text-white text-xs font-bold rounded-full border border-white/20 hover:bg-black/50 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
