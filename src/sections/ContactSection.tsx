import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { useSection } from '../context/SectionContext';
import { AnimatedHeading } from '../components/AnimatedText';
import ShineButton from '../components/ShineButton';
import useScrollAnimation from '../hooks/useScrollAnimation';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("4xjOt5tRNPz7jBmuq");

const ContactSection: React.FC = () => {
  const { setActiveSection } = useSection();
  const [sectionRef, inView] = useInView({ threshold: 0.2 });
  const { ref: formRef, variants, controls } = useScrollAnimation();
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (inView) {
      setActiveSection('contact');
    }
  }, [inView, setActiveSection]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Prepare the template parameters
        const templateParams = {
          from_name: formState.name,
          from_email: formState.email,
          subject: formState.subject || 'Portfolio Contact Form',
          message: formState.message,
          to_email: 'jcibarathraj@gmail.com',
        };

        // Send the email using EmailJS
        await emailjs.send(
          'service_kajxumb',
          'template_hdbdnhs',
          templateParams
        );

        // Reset form and show success message
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        // Reset submission status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } catch (error) {
        console.error('Error sending email:', error);
        setSubmitError('Failed to send message. Please try again later.');
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 relative overflow-hidden"
    >
      {/* Animated, colorful background */}
      <div className="animated-bg" />
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute left-1/2 top-1/3 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
      {/* 3D cube using CSS */}
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
          text="Get In Touch"
          className="text-3xl md:text-5xl font-bold mb-16 text-center gradient-text animate-gradient"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            className="order-2 lg:order-1 card-3d glass-effect p-8 border-2 border-primary/20 shadow-lg rounded-xl hover:shadow-glow transition-all duration-300 flex flex-col gap-6"
            whileHover={{ scale: 1.05, rotateY: 8, rotateX: 8 }}
            whileTap={{ scale: 0.97, boxShadow: '0 0 0 4px var(--primary)' }}
            style={{ willChange: 'transform, opacity', minWidth: 44, minHeight: 44 }}
          >
            <ContactInfo />
          </motion.div>

          {/* Contact form */}
          <motion.div
            ref={formRef}
            variants={variants.slideInRight}
            initial="hidden"
            animate={controls}
            className="order-1 lg:order-2 card-3d glass-effect p-8 border-2 border-primary/20 shadow-lg rounded-xl hover:shadow-glow transition-all duration-300"
            whileHover={{ scale: 1.05, rotateY: 8, rotateX: 8 }}
            whileTap={{ scale: 0.97, boxShadow: '0 0 0 4px var(--primary)' }}
            style={{ willChange: 'transform, opacity', minWidth: 44, minHeight: 44 }}
          >
            {isSubmitted ? (
              <SuccessMessage />
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-semibold mb-6 gradient-text animate-gradient">Send a Message</h3>
                {submitError && (
                  <div className="mb-4 p-3 bg-error/10 border border-error rounded-lg">
                    <p className="text-error text-sm">{submitError}</p>
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 text-gray-800 border ${
                        errors.name ? 'border-error' : 'border-primary/30'
                      } rounded-lg focus:outline-none focus:border-primary backdrop-blur-sm`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-error">{errors.name}</p>
                    )}
                  </div>
                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 text-gray-800 border ${
                        errors.email ? 'border-error' : 'border-primary/30'
                      } rounded-lg focus:outline-none focus:border-primary backdrop-blur-sm`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-error">{errors.email}</p>
                    )}
                  </div>
                </div>
                {/* Subject field */}
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 text-gray-800 border border-primary/30 rounded-lg focus:outline-none focus:border-primary backdrop-blur-sm"
                  />
                </div>
                {/* Message field */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-2 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 text-gray-800 border ${
                      errors.message ? 'border-error' : 'border-primary/30'
                    } rounded-lg focus:outline-none focus:border-primary resize-none backdrop-blur-sm`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-error">{errors.message}</p>
                  )}
                </div>
                {/* Submit button */}
                <div className="mt-4">
                  <ShineButton
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    className="w-full"
                    ariaLabel="Send Message"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting && (
                        <Loader2 className="animate-spin" size={18} />
                      )}
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>
                  </ShineButton>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo: React.FC = () => {
  const { ref, variants, controls } = useScrollAnimation();
  
  const contactItems = [
    {
      icon: Mail,
      title: 'Email',
      content: 'jcibarathraj@gmail.com',
      link: 'mailto:jcibarathraj@gmail.com',
      color: 'primary',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 7867009044',
      link: 'tel:+917867009044',
      color: 'secondary',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Chennai, Tamil Nadu, India',
      link: 'https://maps.google.com/?q=Chennai,Tamil+Nadu,India',
      color: 'accent',
    },
  ];

  const colorMap = {
    primary: 'text-primary bg-primary/20 border-primary/70',
    secondary: 'text-secondary bg-secondary/20 border-secondary/70',
    accent: 'text-accent bg-accent/20 border-accent/70',
  };

  return (
    <motion.div
      ref={ref}
      variants={variants.fadeInUp}
      initial="hidden"
      animate={controls}
      className="h-full flex flex-col"
    >
      <div className="glass-effect rounded-xl p-8 border-2 border-primary/70 mb-8 shadow-lg">
        <h3 className="text-2xl font-bold mb-6 gradient-text animate-gradient drop-shadow-md">Contact Information</h3>
        <div className="space-y-6">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const colorClass = colorMap[item.color as keyof typeof colorMap];
            return (
              <motion.a
                key={item.title}
                href={item.link}
                target={item.title === 'Location' ? '_blank' : undefined}
                rel={item.title === 'Location' ? 'noopener noreferrer' : undefined}
                className={`flex items-start group`}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 border-2 ${colorClass} animate-bounce-slow group-hover:scale-110 transition-transform`}>
                  <Icon size={24} />
                </div>
                <div>
                  <h4 className={`text-lg font-bold gradient-text animate-gradient drop-shadow-md`}>{item.title}</h4>
                  <p className="text-gray-700 font-medium">{item.content}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
      <div className="glass-effect rounded-xl p-8 border-2 border-secondary/70 flex-grow shadow-lg">
        <h3 className="text-2xl font-bold mb-6 gradient-text animate-gradient drop-shadow-md">Let's Connect</h3>
        <p className="text-gray-700 mb-6 font-medium">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
        </p>
        <p className="text-gray-700 font-medium">
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>
    </motion.div>
  );
};

const SuccessMessage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-success/30 h-full flex flex-col justify-center items-center text-center"
    >
      <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-success"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
      <p className="text-gray-600 mb-6">
        Thank you for reaching out. I'll get back to you as soon as possible.
      </p>
      <p className="text-success text-sm">Your message has been delivered successfully.</p>
    </motion.div>
  );
};

export default ContactSection;