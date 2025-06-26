import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Twitter, Youtube, Heart, Mail, Phone, MapPin } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/sbarathraj', label: 'GitHub', color: 'text-gray-800 hover:text-primary' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sbarathraj', label: 'LinkedIn', color: 'text-blue-600 hover:text-blue-500' },
  { icon: Instagram, href: 'https://www.instagram.com/barathraj_here/', label: 'Instagram', color: 'text-pink-600 hover:text-pink-500' },
  { icon: Twitter, href: 'https://x.com/BarathNft', label: 'Twitter', color: 'text-sky-500 hover:text-sky-400' },
  { icon: Youtube, href: 'https://www.youtube.com/@barathrajs7498', label: 'YouTube', color: 'text-red-600 hover:text-red-500' },
];

const contactInfo = [
  { icon: Mail, text: 'jcibarathraj@gmail.com', color: 'text-primary' },
  { icon: Phone, text: '+91 7867009044', color: 'text-secondary' },
  { icon: MapPin, text: 'Chennai, Tamil Nadu, India', color: 'text-accent' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b to-primary/5 py-16 mt-12 relative overflow-hidden">
      {/* Enhanced gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-accent/10 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--accent)_0%,_transparent_70%)] opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="card-3d glass-effect p-6 rounded-xl"
            whileTap={{ scale: 0.97, boxShadow: '0 0 0 4px var(--primary)' }}
            style={{ willChange: 'transform, opacity', minWidth: 44, minHeight: 44 }}
          >
            <motion.h3 
              className="text-3xl font-bold gradient-text mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Barathraj S
            </motion.h3>
            <motion.p 
              className="text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Creating digital experiences with passion and precision. Let's build something amazing together.
            </motion.p>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.text}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <item.icon className={`${item.color} animate-jump`} size={20} />
                  <span className="text-gray-600">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="card-3d glass-effect p-6 rounded-xl"
            whileTap={{ scale: 0.97, boxShadow: '0 0 0 4px var(--primary)' }}
            style={{ willChange: 'transform, opacity', minWidth: 44, minHeight: 44 }}
          >
            <motion.h4 
              className="text-2xl font-semibold mb-6 gradient-text"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Quick Links
            </motion.h4>
            <motion.ul 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-600 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-primary to-accent mr-0 group-hover:mr-2 transition-all duration-300" />
                    {item}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="card-3d glass-effect p-6 rounded-xl"
            whileTap={{ scale: 0.97, boxShadow: '0 0 0 4px var(--primary)' }}
            style={{ willChange: 'transform, opacity', minWidth: 44, minHeight: 44 }}
          >
            <motion.h4 
              className="text-2xl font-semibold mb-6 gradient-text"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Connect
            </motion.h4>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {socialLinks.map(({ icon: Icon, href, label, color }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9, boxShadow: '0 0 0 4px var(--primary)' }}
                  className={`${color} transition-colors duration-300 p-2 rounded-full bg-white/10 backdrop-blur-sm`}
                  aria-label={label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  style={{ minWidth: 44, minHeight: 44, willChange: 'transform, opacity' }}
                >
                  <Icon size={24} className="animate-jump" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-primary/20 mt-12 pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="flex items-center justify-center text-gray-600"
            whileHover={{ scale: 1.05 }}
          >
            Made with <Heart className="text-accent mx-1 animate-pulse" size={16} /> by Barathraj S in {new Date().getFullYear()}
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;