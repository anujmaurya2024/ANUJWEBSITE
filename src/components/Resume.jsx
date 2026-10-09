import React, { useRef } from 'react';

const Resume = () => {
  const resumeRef = useRef(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="bg-[#0f0f11] py-20 px-4 sm:px-6 lg:px-8 w-full relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header & Controls */}
        <div data-aos="fade-up" className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-block border border-red-500/40 rounded-full px-4 py-1 text-xs text-red-400 font-bold mb-3 bg-red-500/10 uppercase tracking-widest">
              Official Resume
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Curriculum <span className="text-[#ff2a2a]">Vitae</span>
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Engineered according to the verified single-page technical resume specification.
            </p>
          </div>

          <div className="flex items-center gap-3 print:hidden">
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 rounded-full bg-[#ff2a2a] text-white text-xs sm:text-sm font-bold flex items-center gap-2 hover:bg-red-600 transition-all duration-300 shadow-[0_0_20px_rgba(255,42,42,0.4)] cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print / Save PDF
            </button>
            <a
              href="https://github.com/anujmaurya2024"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-semibold hover:bg-white/20 transition-all duration-300"
            >
              GitHub Profile
            </a>
          </div>
        </div>

        {/* Paper Container - styled like an authentic physical A4 document */}
        <div 
          ref={resumeRef}
          data-aos="zoom-in"
          className="resume-paper bg-white text-black rounded-lg shadow-[0_25px_70px_rgba(0,0,0,0.6)] p-6 sm:p-10 md:p-12 mx-auto font-serif text-[13px] leading-snug border border-gray-300 max-w-[850px] print:shadow-none print:border-none print:p-0 print:m-0 print:max-w-full"
        >
          {/* HEADER */}
          <header className="text-center border-b border-black pb-2.5 mb-3.5">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-wider text-black font-serif uppercase mb-1">
              ANUJ MAURYA
            </h1>
            <p className="text-[13px] sm:text-[14px] text-gray-800 font-sans font-medium mb-1">
              Java Backend Developer <span className="text-gray-400 font-light">|</span> Spring Boot <span className="text-gray-400 font-light">|</span> REST APIs <span className="text-gray-400 font-light">|</span> SQL <span className="text-gray-400 font-light">|</span> Microservices
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11.5px] sm:text-[12px] text-gray-700 font-sans">
              <span>Srinagar, Uttarakhand 246174</span>
              <span className="text-gray-400">|</span>
              <a href="mailto:anjalimaurya028@gmail.com" className="hover:underline flex items-center gap-1 text-black font-medium">
                <span>✉️</span> Email Id
              </a>
              <span className="text-gray-400">|</span>
              <a href="tel:9305178105" className="hover:underline flex items-center gap-1 text-black font-medium">
                <span>📱</span> 9305178105
              </a>
              <span className="text-gray-400">|</span>
              <a href="https://github.com/anujmaurya2024" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1 text-blue-700 font-semibold">
                <span>🔗</span> GitHub
              </a>
              <span className="text-gray-400">|</span>
              <a href="#home" className="hover:underline text-blue-700 font-semibold">
                Portfolio
              </a>
            </div>
          </header>

          {/* SECTION 1: PROFESSIONAL SUMMARY */}
          <section className="mb-3.5">
            <h2 className="text-[12.5px] font-bold text-blue-700 uppercase tracking-wider font-sans border-b border-black pb-0.5 mb-1.5">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-[11.5px] sm:text-[12px] text-justify leading-relaxed text-black font-serif">
              B.Tech Information Technology student and Java Backend Developer with strong foundations in Core Java, Object-Oriented Programming, Data Structures & Algorithms, and SQL. Hands-on experience building secure RESTful APIs and backend applications using Spring Boot, Spring MVC, Spring Data JPA, Hibernate, Spring Security, and JWT. Experienced with MySQL, MongoDB, Git, GitHub, Maven, Postman, Docker, and React.js. Strong understanding of database-driven application development, authentication, authorization, and layered architecture.
            </p>
          </section>

          {/* SECTION 2: TECHNICAL SKILLS */}
          <section className="mb-3.5">
            <h2 className="text-[12.5px] font-bold text-blue-700 uppercase tracking-wider font-sans border-b border-black pb-0.5 mb-1.5">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-0.5 text-[11px] sm:text-[11.5px] font-sans leading-tight text-gray-900">
              <p>
                <strong className="text-blue-800 font-semibold">Programming Languages:</strong> Java, Python, JavaScript, C++, SQL.
              </p>
              <p>
                <strong className="text-blue-800 font-semibold">Core Java:</strong> Core Java, OOP, Collections, Exception Handling, Multithreading.
              </p>
              <p>
                <strong className="text-blue-800 font-semibold">Backend:</strong> Spring, Spring Boot, Spring MVC, Spring Data JPA, Hibernate, Spring Security, JWT, REST APIs, JDBC.
              </p>
              <p>
                <strong className="text-blue-800 font-semibold">Frontend:</strong> React.js, HTML, CSS, JavaScript.
              </p>
              <p>
                <strong className="text-blue-800 font-semibold">Databases:</strong> MySQL, PostgreSQL, MongoDB, Oracle XE.
              </p>
              <p>
                <strong className="text-blue-800 font-semibold">Data Structures & Algorithms:</strong> Arrays, Strings, Linked Lists, Stack, Queue, Trees, Graphs, Searching, Sorting, Dynamic Programming.
              </p>
              <p>
                <strong className="text-blue-800 font-semibold">Tools:</strong> Git, GitHub, Maven, Postman, IntelliJ IDEA, VS Code, Docker.
              </p>
              <p>
                <strong className="text-blue-800 font-semibold">Machine Learning:</strong> Python, Scikit-learn, TensorFlow, Pandas, NumPy.
              </p>
            </div>
          </section>

          {/* SECTION 3: EDUCATION */}
          <section className="mb-3.5">
            <h2 className="text-[12.5px] font-bold text-blue-700 uppercase tracking-wider font-sans border-b border-black pb-0.5 mb-1.5">
              EDUCATION
            </h2>
            <div className="space-y-2 text-[11.5px] font-sans">
              <div>
                <div className="flex justify-between items-baseline font-bold text-black">
                  <span>Hemvati Nandan Bahuguna Garhwal University (A Central University)</span>
                  <span className="text-[11px] font-medium whitespace-nowrap text-gray-700">| Expected Graduation: June 2028 |</span>
                </div>
                <div className="text-gray-800 text-[11px]">
                  — Srinagar, Uttarakhand Bachelor of Technology in Information Technology
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-bold text-black">
                  <span>Harihar Public School — Jaunpur, Uttar Pradesh</span>
                  <span className="text-[11px] font-medium whitespace-nowrap text-gray-700">|2022–2023 |</span>
                </div>
                <div className="text-gray-800 text-[11px]">
                  12th CBSE
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: PROJECTS / EXPERIENCE */}
          <section className="mb-3.5">
            <h2 className="text-[12.5px] font-bold text-blue-700 uppercase tracking-wider font-sans border-b border-black pb-0.5 mb-1.5">
              PROJECTS/EXPERIENCE
            </h2>
            <div className="space-y-2.5">
              
              {/* Project 1 */}
              <div>
                <div className="flex justify-between items-baseline mb-0.5">
                  <div className="text-[11.5px] sm:text-[12px] font-sans">
                    <span className="font-bold text-blue-600">Ticket Booking System</span>
                    <span className="text-blue-400 text-[10.5px] ml-1.5 font-normal">
                      | Java | Spring Boot | Spring Security | Spring Data JPA | Hibernate | MySQL | JWT
                    </span>
                  </div>
                  <a 
                    href="https://github.com/anujmaurya2024" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[11px] text-gray-600 underline font-medium hover:text-black ml-2"
                  >
                    GitHub
                  </a>
                </div>
                <ul className="list-disc ml-5 text-[11px] leading-tight text-gray-900 space-y-0.5 font-serif">
                  <li>Developed a secure RESTful backend for event and ticket booking using Spring Boot, Spring Security, Spring Data JPA, Hibernate, and MySQL.</li>
                  <li>Implemented JWT-based authentication and role-based authorization for secure user access.</li>
                  <li>Built booking, cancellation, seat management, event management, and user-management workflows.</li>
                  <li>Designed relational database models and implemented persistent data access using Spring Data JPA and Hibernate.</li>
                  <li>Applied Controller-Service-Repository layered architecture for maintainable backend development.</li>
                  <li>Developed and tested REST APIs using Postman.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex justify-between items-baseline mb-0.5">
                  <div className="text-[11.5px] sm:text-[12px] font-sans">
                    <span className="font-bold text-blue-600 uppercase">E-Commerce Backend</span>
                    <span className="text-blue-400 text-[10.5px] ml-1.5 font-normal">
                      | Java | Spring Boot | Spring Data JPA | Hibernate | MySQL | JWT
                    </span>
                  </div>
                  <a 
                    href="https://github.com/anujmaurya2024" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[11px] text-gray-600 underline font-medium hover:text-black ml-2"
                  >
                    GitHub
                  </a>
                </div>
                <ul className="list-disc ml-5 text-[11px] leading-tight text-gray-900 space-y-0.5 font-serif">
                  <li>Developed REST APIs for products, categories, cart, orders, inventory, and user management.</li>
                  <li>Implemented Spring Security and JWT-based authentication and authorization.</li>
                  <li>Implemented pagination, filtering, database relationships, and CRUD operations using Spring Data JPA.</li>
                  <li>Applied Controller-Service-Repository architecture to separate API, business logic, and database layers.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div>
                <div className="flex justify-between items-baseline mb-0.5">
                  <div className="text-[11.5px] sm:text-[12px] font-sans">
                    <span className="font-bold text-blue-600 uppercase">ZeroNet Chat</span>
                    <span className="text-blue-400 text-[10.5px] ml-1.5 font-normal">
                      | React Native, Node.js, Express.js, MongoDB, Socket.io
                    </span>
                  </div>
                  <a 
                    href="https://github.com/anujmaurya2024" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[11px] text-gray-600 underline font-medium hover:text-black ml-2"
                  >
                    GitHub
                  </a>
                </div>
                <ul className="list-disc ml-5 text-[11px] leading-tight text-gray-900 space-y-0.5 font-serif">
                  <li>Developed a cross-platform real-time messaging application using React Native, Node.js, Express.js, and MongoDB.</li>
                  <li>Implemented real-time bidirectional communication using Socket.io for instant message synchronization.</li>
                  <li>Integrated MongoDB for persistent chat storage and Cloudinary for multimedia file sharing.</li>
                </ul>
              </div>

              {/* Project 4 */}
              <div>
                <div className="flex justify-between items-baseline mb-0.5">
                  <div className="text-[11.5px] sm:text-[12px] font-sans">
                    <span className="font-bold text-blue-600 uppercase">Phyto Scan</span>
                    <span className="text-blue-400 text-[10.5px] ml-1.5 font-normal">
                      | Python, TensorFlow, Fast API, React.js, React Native
                    </span>
                  </div>
                  <a 
                    href="https://github.com/anujmaurya2024" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[11px] text-gray-600 underline font-medium hover:text-black ml-2"
                  >
                    GitHub
                  </a>
                </div>
                <ul className="list-disc ml-5 text-[11px] leading-tight text-gray-900 space-y-0.5 font-serif">
                  <li>Developed an ML-powered platform for potato plant disease diagnosis from user-submitted images.</li>
                  <li>Trained a Convolutional Neural Network (CNN) achieving 98% classification accuracy.</li>
                  <li>Developed a centralized FastAPI REST API to serve ML predictions to web and mobile clients.</li>
                </ul>
              </div>

            </div>
          </section>

          {/* SECTION 5: ACHIEVEMENTS */}
          <section className="mb-4">
            <h2 className="text-[12.5px] font-bold text-blue-700 uppercase tracking-wider font-sans border-b border-black pb-0.5 mb-1.5">
              ACHIEVEMENTS
            </h2>
            <ul className="list-disc ml-5 text-[11px] sm:text-[11.5px] space-y-1 font-sans text-gray-900">
              <li className="flex justify-between items-baseline">
                <span>
                  <strong>National Entrepreneurship Challenge (NEC), IIT Bombay</strong> — Finalist, 5th Place
                </span>
                <span className="text-gray-700 font-medium whitespace-nowrap">|May 2025</span>
              </li>
              <li className="flex justify-between items-baseline">
                <span>
                  <strong>Anveshan 2025 Research Competition, GB Pant University, Pant Nagar</strong> — Finalist, 1st Place
                </span>
                <span className="text-gray-700 font-medium whitespace-nowrap">|Nov 2025</span>
              </li>
              <li className="flex justify-between items-baseline">
                <span>
                  <strong>CODE 1 HACKATHON, IIT Delhi</strong> — Finalist, 3rd Place
                </span>
                <span className="text-gray-700 font-medium whitespace-nowrap">|March 2026</span>
              </li>
            </ul>
          </section>

          {/* DECLARATION */}
          <footer className="border-t border-black pt-2 flex justify-between items-end text-[10.5px] sm:text-[11px] font-sans text-gray-900">
            <div>
              <p className="font-semibold">Declaration:</p>
              <p className="italic">I hereby declare that the above information is correct to the best of my knowledge.</p>
            </div>
            <div className="text-right">
              <p className="font-bold">Anuj Maurya</p>
              <p className="text-gray-700">Date: JUNE 16, 2026</p>
            </div>
          </footer>

        </div>
      </div>
    </section>
  );
};

export default Resume;
