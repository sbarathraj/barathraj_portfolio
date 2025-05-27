import React, { useEffect, useState } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cloud, GitBranch, Brain, Settings } from 'lucide-react';
import { useSection } from '../context/SectionContext';
import { AnimatedHeading } from '../components/AnimatedText';
import useScrollAnimation from '../hooks/useScrollAnimation';
import TechIcon from '../components/TechIcon';

// Animation variants for floating icons
const floatingIconVariants: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Animation variants for jumping icons
const jumpingIconVariants: Variants = {
  initial: { y: 0, scale: 1 },
  animate: {
    y: [-4, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeOut"
    }
  }
};

// Skill categories with their respective skills
const skillCategories = [
  {
    id: 'core',
    title: 'Core Competencies',
    icon: Code,
    color: 'primary',
    skills: [
      { name: 'Java', percentage: 92 },
      { name: 'JavaScript', percentage: 88 },
      { name: 'SQL', percentage: 90 },
      { name: 'Data Structures & Algorithms', percentage: 85 },
      { name: 'Spring Boot & Hibernate', percentage: 88 },
      { name: 'Angular', percentage: 85 },
      { name: 'REST APIs', percentage: 90 },
    ],
  },
  {
    id: 'database',
    title: 'Database & Backend',
    icon: Database,
    color: 'secondary',
    skills: [
      { name: 'MySQL', percentage: 90 },
      { name: 'MongoDB', percentage: 85 },
      { name: 'PostgreSQL', percentage: 82 },
      { name: 'Redis', percentage: 78 },
      { name: 'Maven', percentage: 88 },
      { name: 'Gradle', percentage: 82 },
      { name: 'Microservices Architecture', percentage: 85 },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    icon: Cloud,
    color: 'accent',
    skills: [
      { name: 'AWS (EC2, S3, RDS)', percentage: 82 },
      { name: 'Microsoft Azure', percentage: 80 },
      { name: 'GitHub Actions', percentage: 85 },
      { name: 'Docker', percentage: 75 },
      { name: 'Kubernetes', percentage: 72 },
      { name: 'Jenkins', percentage: 78 },
      { name: 'CI/CD', percentage: 80 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Version Control',
    icon: GitBranch,
    color: 'primary',
    skills: [
      { name: 'Git & GitHub', percentage: 92 },
      { name: 'Postman & Swagger', percentage: 88 },
      { name: 'VS Code', percentage: 90 },
      { name: 'Figma', percentage: 75 },
      { name: 'Netlify & Vercel', percentage: 85 },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Emerging Tech',
    icon: Brain,
    color: 'secondary',
    skills: [
      { name: 'OpenAI API Integration', percentage: 85 },
      { name: 'ChatGPT Prompt Engineering', percentage: 88 },
      { name: 'ML Model Integration', percentage: 78 },
      { name: 'AI Application Development', percentage: 80 },
    ],
  },
  {
    id: 'practices',
    title: 'Development Practices',
    icon: Settings,
    color: 'accent',
    skills: [
      { name: 'Agile Methodologies', percentage: 88 },
      { name: 'Test-Driven Development', percentage: 85 },
      { name: 'Responsive Web Design', percentage: 90 },
      { name: 'Cross-Browser Compatibility', percentage: 85 },
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
      {/* Enhanced animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl"
        variants={floatingIconVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/10 rounded-full blur-3xl"
        variants={floatingIconVariants}
        initial="initial"
        animate="animate"
        style={{ animationDelay: '2s' }}
      />
      <motion.div
        className="absolute left-1/2 top-1/3 w-24 h-24 bg-accent/20 rounded-full blur-2xl"
        variants={floatingIconVariants}
        initial="initial"
        animate="animate"
        style={{ animationDelay: '4s' }}
      />

      {/* 3D floating elements */}
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
        <AnimatedHeading
          text="Technical Skills"
          className="text-3xl md:text-5xl font-bold mb-16 text-center gradient-text animate-gradient"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface SkillCategoryProps {
  category: {
    id: string;
    title: string;
    icon: React.ElementType;
    color: string;
    skills: Array<{ name: string; percentage: number }>;
  };
  index: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, index }) => {
  const { ref, variants, controls } = useScrollAnimation({
    delay: index * 0.1,
  });
  const Icon = category.icon;

  return (
    <motion.div
      ref={ref}
      variants={variants.fadeInUp}
      initial="hidden"
      animate={controls}
      className="card-3d glass-effect p-6 border-2 border-primary/20 shadow-lg rounded-xl hover:shadow-glow transition-all duration-300"
      whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="flex items-center gap-4 mb-6">
        <motion.div
          className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${category.color}/20 border-2 border-${category.color}/70`}
          variants={jumpingIconVariants}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Icon size={24} className={`text-${category.color}`} />
        </motion.div>
        <h3 className="text-xl font-bold gradient-text animate-gradient">{category.title}</h3>
      </div>

      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            delay={index * 0.2 + skillIndex * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
};

interface SkillBarProps {
  skill: {
    name: string;
    percentage: number;
  };
  delay: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <motion.div
            variants={jumpingIconVariants}
            initial="initial"
            animate="animate"
            style={{ animationDelay: `${delay * 0.1}s` }}
          >
            <TechIcon name={skill.name} size={18} />
          </motion.div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {skill.name}
          </span>
        </div>
        <span className="text-sm font-semibold text-primary">
          {isVisible ? (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: delay + 0.5 }}
            >
              {skill.percentage}%
            </motion.span>
          ) : '0%'}
        </span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full relative"
          initial={{ width: '0%' }}
          animate={isVisible ? { width: `${skill.percentage}%` } : {}}
          transition={{
            duration: 1.5,
            delay: delay + 0.2,
            ease: 'easeOut',
          }}
        >
          <motion.div
            className="absolute inset-0 bg-white/20"
            animate={{
              x: ['0%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillsSection;