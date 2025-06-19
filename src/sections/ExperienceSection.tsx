import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, ChevronRight, CheckCircle } from 'lucide-react';

const education = {
  degree: 'Bachelor of Technology (B.Tech), Information Technology',
  college: 'Sri Manakula Vinayagar Engineering College, Puducherry',
  cgpa: '7.77',
  graduation: 'May 2023',
  description:
    'At Sri Manakula Vinayagar Engineering College, I gained a strong foundation in software development and computer science principles. I dedicated significant time to mastering both theoretical and applied concepts that are core to building real-world software solutions.',
  keyAreas: [
    'Data Structures and Algorithms',
    'Object-Oriented Programming (OOP)',
    'Database Management Systems (DBMS)',
    'Software Engineering and Architecture',
    'Web Technologies and Application Development',
  ],
  project:
    'My final year project focused on creating scalable web applications, which directly informed the work I do today in backend and full-stack development.',
};

const experiences = [
  {
    company: 'Kuwy Technology Service Pvt Ltd',
    role: 'Software Engineer',
    period: 'June 2024 – Present',
    location: 'Chennai, Tamil Nadu',
    color: 'primary',
    description:
      'At Kuwy, I work as a Software Engineer in a fast-paced fintech environment. I collaborate with cross-functional teams to design, develop, and optimize enterprise applications that support digital vehicle finance processes.',
    contributions: [
      'Designed high-performance backend systems using Java, Spring Boot, and MySQL to handle secure and large-scale transactions.',
      'Developed and maintained RESTful APIs, significantly improving data exchange efficiency and system scalability.',
      'Improved backend reliability through caching strategies, query optimization, and load balancing under high traffic conditions.',
      'Created dynamic and responsive user interfaces with AngularJS and Bootstrap to enhance customer experience.',
      'Integrated dashboards and real-time data visualizations, improving operational transparency and monitoring.',
      'Implemented robust authentication, rate limiting, and encryption strategies for data privacy and security compliance.',
      'Participated in agile development cycles, regularly contributing to code reviews, sprint planning, and cross-team collaboration.',
    ],
  },
  {
    company: 'Kodnest Technologies Pvt Ltd',
    role: 'Full Stack Intern',
    period: 'January 2023 – May 2023',
    location: 'Remote',
    color: 'secondary',
    description:
      'As a Full Stack Intern, I underwent intensive training in backend and frontend technologies and successfully delivered a fully functional e-commerce platform.',
    contributions: [
      'Developed "ShopNest," a full-stack e-commerce application using Java SE/EE, Servlets, JSP, and Oracle DB.',
      'Designed and implemented relational database systems to support robust data flow and storage.',
      'Integrated front-end interfaces with backend logic to ensure seamless user experiences.',
      'Gained proficiency in writing clean, maintainable code and followed industry best practices.',
      'Worked in agile sprints with mentorship support, enhancing collaboration and task ownership.',
    ],
  },
];

const colorMap = {
  primary: 'border-primary/70',
  secondary: 'border-secondary/70',
};

const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-20 experience-section"
    >
      {/* Animated, colorful background */}
      <div className="animated-bg" />
      {/* <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-3xl animate-float" /> */}
      <div className="absolute right-10 top-1/2 w-16 h-16 animate-spin-slow" style={{ perspective: '600px' }}>
        <div style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, var(--accent) 40%, var(--secondary) 100%)',
          borderRadius: '8px',
          boxShadow: '0 8px 32px 0 rgba(162,89,247,0.2)',
          transform: 'rotateY(30deg) rotateX(20deg)',
        }} />
      </div>
      <div className="container mx-auto px-6">
        <div className="mb-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold gradient-text animate-gradient drop-shadow-md">Experience & Education</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-primary via-secondary to-accent rounded-full my-4 animate-gradient" />
          <div className="text-lg text-gray-700 font-medium mb-8">A journey of learning, building, and growing as a developer.</div>
        </div>
        {/* Experience Timeline */}
        <div className="relative flex flex-col gap-8 mb-12">
          <h3 className="text-2xl font-bold mb-4 gradient-text animate-gradient drop-shadow-md">Professional Experience</h3>
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-10 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full opacity-40 z-0 hidden md:block" />
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              className={`relative card-3d glass-effect p-8 border-2 ${colorMap[exp.color as keyof typeof colorMap]} shadow-lg rounded-xl hover:shadow-glow transition-all duration-300 group ${idx === 0 ? 'z-10' : 'z-0'}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              style={{ willChange: 'transform, opacity', minWidth: 44, minHeight: 44 }}
            >
              {/* Stepper dot */}
              <div className={`absolute -left-8 top-8 w-6 h-6 rounded-full border-4 ${exp.color === 'primary' ? 'border-primary' : 'border-secondary'} bg-white z-10 hidden md:block animate-pulse`} />
              <div className="flex items-center mb-2">
                <Briefcase size={28} className={`mr-3 ${exp.color === 'primary' ? 'text-primary' : 'text-secondary'} animate-bounce-slow`} />
                <span className="text-lg font-bold gradient-text animate-gradient drop-shadow-md">{exp.company}</span>
              </div>
              <div className="flex flex-wrap items-center mb-2 gap-2">
                <span className={`px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs`}>{exp.role}</span>
                <span className={`px-3 py-1 rounded-full bg-secondary/10 text-secondary font-bold text-xs`}>{exp.period}</span>
                <span className={`px-3 py-1 rounded-full bg-accent/10 text-accent font-bold text-xs`}>{exp.location}</span>
              </div>
              <div className="mb-2 text-gray-700 text-sm">{exp.description}</div>
              <ul className="pl-5 list-disc text-gray-700 text-sm">
                {exp.contributions.map((item, i) => (
                  <motion.li
                    key={item + i}
                    className="mb-1 flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <CheckCircle size={16} className={exp.color === 'primary' ? 'text-primary mr-1' : 'text-secondary mr-1'} />{item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        {/* Education Card */}
        <motion.div
          className="card-3d glass-effect p-6 border-2 border-primary/70 shadow-lg rounded-xl hover:shadow-glow transition-all duration-300 group"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          style={{ willChange: 'transform, opacity', minWidth: 44, minHeight: 44 }}
        >
          <h3 className="text-2xl font-bold mb-4 gradient-text animate-gradient drop-shadow-md">Education</h3>
          <div className="flex items-center mb-2">
            <GraduationCap size={32} className="text-primary animate-bounce-slow mr-3" />
            <span className="text-lg font-bold gradient-text animate-gradient drop-shadow-md">{education.degree}</span>
          </div>
          <div className="text-base font-semibold mb-1 gradient-text animate-gradient drop-shadow-md">{education.college}</div>
          <div className="mb-1 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs">CGPA: {education.cgpa}</span>
            <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary font-bold text-xs">Graduation: {education.graduation}</span>
          </div>
          <div className="mb-2 text-gray-700 text-sm">{education.description}</div>
          <div className="mb-1 text-gray-700 text-sm font-semibold">Key Areas of Study:</div>
          <ul className="mb-2 pl-5 list-disc text-gray-700 text-sm">
            {education.keyAreas.map((area, idx) => (
              <li key={idx} className="mb-1 flex items-center"><ChevronRight size={16} className="text-primary mr-1" />{area}</li>
            ))}
          </ul>
          <div className="text-gray-700 text-sm italic">{education.project}</div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;