import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Ticket Booking System',
    description: 'Developed a secure RESTful backend for event and ticket booking using Spring Boot, Spring Security, Spring Data JPA, Hibernate, and MySQL. Features JWT authentication, role-based access control, seat allocation, cancellation workflows, and Controller-Service-Repository layered architecture.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'MySQL', 'JWT'],
    github: 'https://github.com/anujmaurya2024',
    live: '#',
  },
  {
    title: 'E-Commerce Backend',
    description: 'Comprehensive REST APIs for product catalog, categories, cart, orders, inventory, and user management. Implemented Spring Security, JWT authentication, pagination, dynamic filtering, database relationships, and strict layered architecture.',
    tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'MySQL', 'JWT'],
    github: 'https://github.com/anujmaurya2024',
    live: '#',
  },
  {
    title: 'ZeroNet Chat',
    description: 'Cross-platform real-time messaging application built with React Native, Node.js, Express.js, and MongoDB. Implemented bidirectional communication via Socket.io for instant synchronization and Cloudinary for multimedia attachments.',
    tech: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/anujmaurya2024',
    live: '#',
  },
  {
    title: 'Phyto Scan',
    description: 'Machine learning platform for potato plant disease diagnosis from user-submitted leaf images. Trained a Convolutional Neural Network (CNN) achieving 98% classification accuracy, served via a centralized FastAPI REST API.',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'React.js', 'React Native'],
    github: 'https://github.com/anujmaurya2024',
    live: '#',
  },
  {
    title: 'HNBGU TPIC Platform',
    description: 'Official frontend web platform designed and engineered for the Technology and Product Incubation Center (TPIC) at Hemvati Nandan Bahuguna Garhwal University.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    github: '#',
    live: 'https://www.tpic.co.in/discover/thrust-areas',
  },
  {
    title: 'JP Morgan Software Engineering Experience',
    description: 'Practical backend engineering program through JPMorgan Chase, implementing financial data feeds, Git workflows, and Java-based microservices.',
    tech: ['Java', 'Spring Boot', 'Data Structures', 'Git'],
    github: 'https://github.com/anujmaurya2024/forage-midas',
    live: '#',
  },
];

const Services = () => {
  return (
    <section id="projects" className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="mb-10 md:mb-14">
          <div className="inline-block border border-[#ff2a2a] rounded-full px-5 py-1.5 text-sm text-[#ff2a2a] font-bold mb-4 shadow-sm bg-[#ff2a2a]/5">
            Featured Projects
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.05] mb-4 tracking-tight">
            Things I've <span className="text-[#ff2a2a]">built</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl font-medium leading-relaxed">
            A portfolio of real-world applications built with AI, modern web technologies, and <span className="text-[#ff2a2a] font-bold">scalable backend architectures</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="rounded-[2rem] border border-black/10 bg-[#0b0b0d] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff2a2a]">Project</span>
                <span className="text-xs text-white/50">{project.tech.slice(0, 3).join(', ')}</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-4">{project.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-white/5 text-xs text-white/70 border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#ff2a2a] underline hover:text-[#ff4444] transition-colors"
                  >
                    View Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white/80 underline hover:text-[#ff2a2a] transition-colors"
                  >
                    Live Site
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
