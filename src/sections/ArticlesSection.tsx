import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Clock } from 'lucide-react';
import { useSection } from '../context/SectionContext';
import { AnimatedHeading } from '../components/AnimatedText';
import useScrollAnimation from '../hooks/useScrollAnimation';

// Sample article data
const articles = [
  {
    id: 1,
    title: 'Creating Immersive Web Experiences with Three.js',
    excerpt: 'Learn how to integrate 3D graphics into your web projects using Three.js for captivating user experiences.',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg',
    date: 'May 15, 2025',
    readTime: '8 min read',
    link: '#',
    tags: ['3D', 'Web Development', 'JavaScript'],
  },
  {
    id: 2,
    title: 'The Power of Animation in UI Design',
    excerpt: 'Explore how strategic animations can enhance user experience and create more intuitive interfaces.',
    image: 'https://images.pexels.com/photos/34153/pexels-photo.jpg',
    date: 'April 22, 2025',
    readTime: '6 min read',
    link: '#',
    tags: ['UI/UX', 'Animation', 'Design'],
  },
  {
    id: 3,
    title: 'Building Scalable React Applications',
    excerpt: 'Best practices for structuring large React applications to maintain code quality and performance.',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
    date: 'March 10, 2025',
    readTime: '10 min read',
    link: '#',
    tags: ['React', 'Architecture', 'Performance'],
  },
];

const ArticlesSection: React.FC = () => {
  const { setActiveSection } = useSection();
  const [sectionRef, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      setActiveSection('articles');
    }
  }, [inView, setActiveSection]);

  return (
    <section
      ref={sectionRef}
      id="articles"
      className="py-24 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <AnimatedHeading
          text="Featured Articles"
          className="text-3xl md:text-5xl font-bold mb-16 text-center gradient-text"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ArticleCardProps {
  article: {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    readTime: string;
    link: string;
    tags: string[];
  };
  index: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, index }) => {
  const { ref, variants, controls } = useScrollAnimation({
    delay: index * 0.1,
  });

  return (
    <motion.div
      ref={ref}
      variants={variants.fadeInUp}
      initial="hidden"
      animate={controls}
      className="bg-white dark:bg-background-light rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.97, boxShadow: '0 0 0 4px var(--primary)' }}
      style={{ willChange: 'transform, opacity', minWidth: 44, minHeight: 44 }}
    >
      <div className="h-48 overflow-hidden">
        <motion.img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500"
          whileHover={{ scale: 1.05 }}
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{article.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{article.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">{article.date}</span>
          <motion.a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-light transition-colors"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.96 }}
            style={{ minWidth: 44, minHeight: 44 }}
          >
            Read More →
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticlesSection;