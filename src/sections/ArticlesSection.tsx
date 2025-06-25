import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Clock, X } from 'lucide-react';
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
    fullContent: `Three.js is a powerful JavaScript library for rendering 3D graphics in the browser. In this article, you'll learn how to set up a basic Three.js scene, add objects, lights, and create interactive experiences that engage users. We'll cover best practices for performance and design, and provide code samples to get you started quickly.\n\nKey topics:\n- Setting up Three.js\n- Adding 3D objects and lights\n- Animating scenes\n- Optimizing for performance\n- Real-world use cases and demos.`
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
    fullContent: `Animation is more than just eye candy—it's a tool for communication. This article explores how motion guides users, provides feedback, and makes interfaces feel alive. We'll look at micro-interactions, loading animations, and transitions that make apps delightful and usable.\n\nKey topics:\n- Micro-interactions\n- Loading and progress animations\n- Transition effects\n- Accessibility and performance` 
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
    fullContent: `Scaling React apps requires careful planning. In this article, we discuss folder structure, state management, code splitting, and performance optimization. Learn how to keep your codebase maintainable as your project grows.\n\nKey topics:\n- Folder and file organization\n- State management strategies\n- Code splitting and lazy loading\n- Performance profiling and optimization` 
  },
];

const ArticlesSection: React.FC = () => {
  const { setActiveSection } = useSection();
  const [sectionRef, inView] = useInView({ threshold: 0.2 });
  const [selectedArticle, setSelectedArticle] = useState<null | typeof articles[0]>(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedArticle) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [selectedArticle]);

  // Close modal on Escape key
  useEffect(() => {
    if (!selectedArticle) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedArticle(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedArticle]);

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
            <ArticleCard key={article.id} article={article} index={index} onReadMore={() => setSelectedArticle(article)} />
          ))}
        </div>
      </div>

      {/* Modal for full article */}
      {selectedArticle && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={e => {
            // Only close if clicking the overlay, not the modal itself
            if (e.target === e.currentTarget) setSelectedArticle(null);
          }}
        >
          <motion.div
            className="bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 p-4 md:p-8 relative z-[101] flex flex-col max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.95, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 40 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="sticky top-2 right-2 self-end p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-[102]"
              onClick={() => setSelectedArticle(null)}
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-56 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-bold mb-2 gradient-text">{selectedArticle.title}</h2>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-sm text-gray-500">{selectedArticle.date}</span>
              <span className="text-sm text-gray-500">{selectedArticle.readTime}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedArticle.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">{tag}</span>
              ))}
            </div>
            <p className="text-gray-700 whitespace-pre-line mb-2">{selectedArticle.fullContent}</p>
            <a
              href={selectedArticle.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:text-primary-light font-semibold mt-2"
            >
              Read Original <ArrowRight size={16} />
            </a>
          </motion.div>
        </motion.div>
      )}
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
    fullContent: string;
  };
  index: number;
  onReadMore: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, index, onReadMore }) => {
  const { ref, variants, controls } = useScrollAnimation({
    delay: index * 0.1,
  });

  return (
    <motion.div
      ref={ref}
      variants={variants.fadeInUp}
      initial="hidden"
      animate={controls}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
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
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
        <p className="text-gray-600 mb-4">{article.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{article.date}</span>
          <motion.button
            onClick={onReadMore}
            className="text-primary hover:text-primary-light transition-colors font-semibold"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.96 }}
            style={{ minWidth: 44, minHeight: 44 }}
          >
            Read More →
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticlesSection;