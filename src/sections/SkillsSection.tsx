import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Layout, Settings, Cpu, PenTool, Github } from 'lucide-react';
import { useSection } from '../context/SectionContext';
import { AnimatedHeading } from '../components/AnimatedText';
import ProgressBar from '../components/ProgressBar';
import useScrollAnimation from '../hooks/useScrollAnimation';

// Professional skill categories and skills
const skillCategories = [
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    icon: Code,
    skills: [
      { name: 'Arrays', level: 95 },
      { name: 'Linked Lists', level: 90 },
      { name: 'Trees', level: 90 },
      { name: 'Graphs', level: 85 },
      { name: 'Dynamic Programming', level: 80 },
      { name: 'Problem Solving', level: 95 },
    ],
  },
  {
    id: 'languages',
    title: 'Languages',
    icon: PenTool,
    skills: [
      { name: 'Java', level: 95 },
      { name: 'SQL', level: 90 },
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    icon: Layout,
    skills: [
      { name: 'Spring Boot', level: 90 },
      { name: 'Hibernate', level: 85 },
      { name: 'Angular', level: 90 },
      { name: 'React', level: 90 },
      { name: 'Bootstrap', level: 85 },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: Database,
    skills: [
      { name: 'MySQL', level: 90 },
      { name: 'MongoDB', level: 85 },
      { name: 'Oracle', level: 80 },
    ],
  },
  {
    id: 'build',
    title: 'Build Tools',
    icon: Settings,
    skills: [
      { name: 'Maven', level: 90 },
      { name: 'Gradle', level: 80 },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    icon: Cpu,
    skills: [
      { name: 'GitHub Actions', level: 80 },
      { name: 'Docker (basic)', level: 70 },
    ],
  },
  {
    id: 'version',
    title: 'Version Control',
    icon: Github,
    skills: [
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 90 },
    ],
  },
  {
    id: 'methodologies',
    title: 'Development Methodologies',
    icon: Settings,
    skills: [
      { name: 'Agile', level: 85 },
      { name: 'Scrum', level: 80 },
    ],
  },
  {
    id: 'architecture',
    title: 'Architectural Patterns',
    icon: Layout,
    skills: [
      { name: 'Microservices', level: 85 },
      { name: 'REST APIs', level: 90 },
    ],
  },
];

const SkillsSection: React.FC = () => {
  const { setActiveSection } = useSection();
  const [sectionRef, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      setActiveSection('skills');
    }
  }, [inView, setActiveSection]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 relative overflow-hidden"
    >
      {/* Animated, colorful background */}
      <div className="animated-bg" />
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-3xl animate-float" />
      <div className="absolute right-10 top-1/2 w-16 h-16 animate-spin-slow" style={{ perspective: '600px' }}>
        <div style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, var(--accent) 40%, var(--secondary) 100%)',
          borderRadius: '8px',
          boxShadow: '0 8px 32px 0 rgba(138,43,226,0.2)',
          transform: 'rotateY(30deg) rotateX(20deg)',
        }} />
      </div>
      <div className="absolute left-10 top-1/3 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute right-1/4 bottom-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-6">
        <AnimatedHeading
          text="My Skills"
          className="text-3xl md:text-5xl font-bold mb-16 text-center gradient-text animate-gradient"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard 
              key={category.id} 
              category={category} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface SkillCategoryCardProps {
  category: {
    id: string;
    title: string;
    icon: React.ElementType;
    skills: { name: string; level: number }[];
  };
  index: number;
}

const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ category, index }) => {
  const { ref, variants, controls } = useScrollAnimation({
    delay: index * 0.1,
  });
  
  const Icon = category.icon;
  const borderColor = index % 3 === 0 ? 'border-primary/70' : index % 3 === 1 ? 'border-secondary/70' : 'border-accent/70';
  const iconColor = index % 3 === 0 ? 'text-primary' : index % 3 === 1 ? 'text-secondary' : 'text-accent';
  const cardBg = 'glass-effect';

  return (
    <motion.div
      ref={ref}
      variants={variants.fadeInUp}
      initial="hidden"
      animate={controls}
      className={`card-3d ${cardBg} p-6 border-2 ${borderColor} shadow-lg rounded-xl hover:shadow-glow transition-all duration-300 group`}
      whileHover={{ scale: 1.07, rotateY: 10, rotateX: 10 }}
      whileTap={{ scale: 0.97, boxShadow: '0 0 0 4px var(--primary)' }}
      style={{ willChange: 'transform, opacity', minWidth: 44, minHeight: 44 }}
    >
      <div className="flex items-center mb-6">
        <div className={`w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4 ${iconColor}`}>
          <Icon size={28} className={`animate-bounce-slow ${iconColor}`} />
        </div>
        <h3 className="text-xl font-bold gradient-text animate-gradient drop-shadow-md">{category.title}</h3>
      </div>
      <div>
        {category.skills.map((skill, skillIndex) => (
          <div key={skill.name} className="mb-2">
            <span className="font-semibold gradient-text animate-gradient text-base drop-shadow-sm">{skill.name}</span>
            <ProgressBar
              label=""
              percentage={skill.level}
              delay={0.2 + skillIndex * 0.1}
              color={index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'accent'}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsSection;