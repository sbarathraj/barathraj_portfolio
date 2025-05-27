import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, ExternalLink, Github, Award, TrendingUp, ArrowRight } from 'lucide-react';
import { useSection } from '../context/SectionContext';
import { AnimatedHeading } from '../components/AnimatedText';
import useScrollAnimation from '../hooks/useScrollAnimation';
import ShineButton from '../components/ShineButton';

// Sample coding profile data
const codingProfiles = [
  {
    id: 'github',
    title: 'GitHub',
    username: 'sbarathraj',
    icon: Github,
    stats: [
      { label: 'Repositories', value: '45+' },
      { label: 'Stars', value: '120+' },
      { label: 'Contributions', value: '850+' },
    ],
    link: 'https://github.com/sbarathraj',
    color: 'primary',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 'leetcode',
    title: 'LeetCode',
    username: 'BarathrajS',
    icon: Code,
    stats: [
      { label: 'Problems Solved', value: '250+' },
      { label: 'Contest Rating', value: '1850' },
      { label: 'Global Rank', value: 'Top 5%' },
    ],
    link: 'https://leetcode.com/BarathrajS',
    color: 'secondary',
    gradient: 'from-orange-500 to-yellow-500',
  },
  {
    id: 'hackerrank',
    title: 'HackerRank',
    username: 'BarathrajS',
    icon: Award,
    stats: [
      { label: 'Badges', value: '12' },
      { label: 'Certificates', value: '5' },
      { label: 'Points', value: '3200+' },
    ],
    link: 'https://hackerrank.com',
    color: 'accent',
    gradient: 'from-green-500 to-teal-500',
  },
  {
    id: 'codeforces',
    title: 'Codeforces',
    username: 'BarathrajS',
    icon: TrendingUp,
    stats: [
      { label: 'Max Rating', value: '1750' },
      { label: 'Contests', value: '45+' },
      { label: 'Problems Solved', value: '320+' },
    ],
    link: 'https://codeforces.com',
    color: 'primary',
    gradient: 'from-blue-500 to-indigo-500',
  },
];

const CodingProfilesSection: React.FC = () => {
  const { setActiveSection } = useSection();
  const [sectionRef, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      setActiveSection('coding');
    }
  }, [inView, setActiveSection]);

  return (
    <section
      ref={sectionRef}
      id="coding"
      className="py-24 relative overflow-hidden"
    >
      {/* Enhanced background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10 animate-float" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />

      <div className="container mx-auto px-6">
        <AnimatedHeading
          text="Coding Profiles"
          className="text-3xl md:text-5xl font-bold mb-16 text-center gradient-text animate-gradient"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {codingProfiles.map((profile, index) => (
            <CodingProfileCard key={profile.id} profile={profile} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CodingProfileCardProps {
  profile: {
    id: string;
    title: string;
    username: string;
    icon: React.ElementType;
    stats: { label: string; value: string }[];
    link: string;
    color: string;
    gradient: string;
  };
  index: number;
}

const CodingProfileCard: React.FC<CodingProfileCardProps> = ({ profile, index }) => {
  const { ref, variants, controls } = useScrollAnimation({
    delay: index * 0.1,
  });
  const Icon = profile.icon;

  return (
    <motion.div
      ref={ref}
      variants={variants.fadeInUp}
      initial="hidden"
      animate={controls}
      className={`card-3d glass-effect p-6 border-2 border-${profile.color}/70 shadow-lg rounded-xl hover:shadow-glow transition-all duration-300 group relative overflow-hidden`}
      whileHover={{ scale: 1.07, rotateY: 10, rotateX: 10 }}
      whileTap={{ scale: 0.97, boxShadow: '0 0 0 4px var(--primary)' }}
      style={{ willChange: 'transform, opacity', minWidth: 44, minHeight: 44 }}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${profile.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
      
      <div className="flex items-center mb-6 relative">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${profile.gradient} flex items-center justify-center mr-4 shadow-lg`}>
          <Icon size={28} className="text-white animate-bounce-slow" />
        </div>
        <div>
          <h3 className={`text-xl font-bold bg-gradient-to-r ${profile.gradient} bg-clip-text text-transparent animate-gradient drop-shadow-md`}>
            {profile.title}
          </h3>
          <a
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-200 font-medium underline hover:text-primary dark:hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label={`Visit ${profile.title} profile for @${profile.username}`}
          >
            @{profile.username}
          </a>
        </div>
      </div>
      
      <div className="space-y-4 relative">
        {profile.stats.map((stat, idx) => (
          <motion.div 
            key={idx} 
            className="flex justify-between items-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * idx }}
            viewport={{ once: true }}
          >
            <span className="text-gray-700 dark:text-gray-300 font-medium">{stat.label}</span>
            <span className={`font-bold text-lg bg-gradient-to-r ${profile.gradient} bg-clip-text text-transparent animate-gradient`}>
              {stat.value}
            </span>
          </motion.div>
        ))}
      </div>
      
      <ShineButton
        onClick={() => window.open(profile.link, '_blank', 'noopener,noreferrer')}
        variant="primary"
        ariaLabel={`View ${profile.title} profile for @${profile.username}`}
      >
        <span className="flex items-center gap-2">
          View Profile
          <ArrowRight size={16} />
        </span>
      </ShineButton>
    </motion.div>
  );
};

export default CodingProfilesSection;