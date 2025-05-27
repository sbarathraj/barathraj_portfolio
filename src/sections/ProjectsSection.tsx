import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { useSection } from '../context/SectionContext';
import { AnimatedHeading } from '../components/AnimatedText';
import useScrollAnimation from '../hooks/useScrollAnimation';
import ShineButton from '../components/ShineButton';

// Sample project data
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured online shopping platform with product catalog, cart, and checkout functionality.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website with smooth animations and interactive elements.',
    image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg',
    tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Three.js'],
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A productivity application for managing tasks, projects, and deadlines with a clean interface.',
    image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg',
    tags: ['React', 'Redux', 'Firebase', 'Material UI'],
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'An interactive weather application with real-time data visualization and forecasting.',
    image: 'https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg',
    tags: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
    demoUrl: '#',
    repoUrl: '#',
  },
];

const ProjectsSection: React.FC = () => {
  const { setActiveSection } = useSection();
  const [sectionRef, inView] = useInView({ threshold: 0.2 });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    if (inView) {
      setActiveSection('projects');
    }
  }, [inView, setActiveSection]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 relative overflow-hidden"
    >
      {/* Animated, colorful background */}
      <div className="animated-bg" />
      <div className="absolute top-20 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      {/* 3D cube using CSS */}
      <div className="absolute right-10 top-1/3 w-16 h-16 animate-spin-slow" style={{ perspective: '600px' }}>
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
        <AnimatedHeading
          text="Featured Projects"
          className="text-3xl md:text-5xl font-bold mb-16 text-center gradient-text animate-gradient"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isSelected={selectedProject === project.id}
              onSelect={() => setSelectedProject(project.id === selectedProject ? null : project.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    demoUrl: string;
    repoUrl: string;
  };
  index: number;
  isSelected: boolean;
  onSelect: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, isSelected, onSelect }) => {
  const { ref, variants, controls } = useScrollAnimation({
    delay: index * 0.1,
  });

  return (
    <motion.div
      ref={ref}
      variants={variants.fadeInUp}
      initial="hidden"
      animate={controls}
      className="card-3d glass-effect p-0 border-2 border-primary/20 shadow-lg rounded-xl hover:shadow-glow transition-all duration-300 group"
      whileHover={{ scale: 1.05, rotateY: 8, rotateX: 8 }}
      whileTap={{ scale: 0.97, boxShadow: '0 0 0 4px var(--primary)' }}
      style={{ willChange: 'transform, opacity', minWidth: 44, minHeight: 44 }}
      onClick={onSelect}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl z-10" />
      {/* Project image with 3D effect */}
      <div className="h-60 overflow-hidden relative rounded-t-xl">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          whileHover={{ scale: 1.1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />
      </div>
      {/* Project content with glass effect */}
      <div className="p-6 relative z-20">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors duration-300 gradient-text animate-gradient">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        {/* Tags with hover effect */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Action buttons with professional styles */}
        <div className="flex space-x-3 mt-2">
          <ShineButton
            onClick={() => window.open(project.demoUrl, '_blank')}
            variant="primary"
            ariaLabel="View Live Demo"
            className="text-sm"
          >
            <span className="flex items-center gap-1">
              <ExternalLink size={14} />
              Live Demo
            </span>
          </ShineButton>
          <ShineButton
            onClick={() => window.open(project.repoUrl, '_blank')}
            variant="outline"
            ariaLabel="View Source Code"
            className="text-sm"
          >
            <span className="flex items-center gap-1">
              <Github size={14} />
              Code
            </span>
          </ShineButton>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

export default ProjectsSection;