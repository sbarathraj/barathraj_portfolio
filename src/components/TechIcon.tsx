import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Binary,
  GitBranch,
  Server,
  Cloud,
  Monitor,
  Box,
  Cpu,
  Brain,
  Settings,
  TestTube,
  LayoutGrid,
  Network,
  FileCode,
  Blocks,
  Braces,
  Terminal,
  Globe,
  Layers
} from 'lucide-react';

// Map of technology names to their respective icons and colors
const techIconMap: Record<string, { icon: React.ElementType; color: string }> = {
  'Java': { icon: FileCode, color: 'text-[#007396]' },
  'JavaScript': { icon: Braces, color: 'text-[#F7DF1E]' },
  'SQL': { icon: Database, color: 'text-[#00758F]' },
  'Data Structures & Algorithms': { icon: Binary, color: 'text-primary' },
  'Spring Boot': { icon: Server, color: 'text-[#6DB33F]' },
  'Hibernate': { icon: Database, color: 'text-[#bcae79]' },
  'Angular': { icon: Code2, color: 'text-[#DD0031]' },
  'REST APIs': { icon: Network, color: 'text-[#61DAFB]' },
  'MySQL': { icon: Database, color: 'text-[#00758F]' },
  'MongoDB': { icon: Database, color: 'text-[#47A248]' },
  'Maven': { icon: Box, color: 'text-[#C71A36]' },
  'Gradle': { icon: Box, color: 'text-[#02303A]' },
  'Microservices': { icon: Blocks, color: 'text-[#FF6B6B]' },
  'AWS': { icon: Cloud, color: 'text-[#FF9900]' },
  'Azure': { icon: Cloud, color: 'text-[#0078D4]' },
  'GitHub Actions': { icon: GitBranch, color: 'text-[#2088FF]' },
  'Docker': { icon: Box, color: 'text-[#2496ED]' },
  'CI/CD': { icon: Settings, color: 'text-[#40B5A4]' },
  'Git': { icon: GitBranch, color: 'text-[#F05032]' },
  'GitHub': { icon: GitBranch, color: 'text-[#181717]' },
  'Postman': { icon: Globe, color: 'text-[#FF6C37]' },
  'Swagger': { icon: Code2, color: 'text-[#85EA2D]' },
  'VS Code': { icon: Code2, color: 'text-[#007ACC]' },
  'Figma': { icon: Layers, color: 'text-[#F24E1E]' },
  'Netlify': { icon: Cloud, color: 'text-[#00C7B7]' },
  'Vercel': { icon: Cloud, color: 'text-[#000000]' },
  'OpenAI': { icon: Brain, color: 'text-[#412991]' },
  'ChatGPT': { icon: Brain, color: 'text-[#00A67E]' },
  'ML': { icon: Brain, color: 'text-[#FF6B6B]' },
  'AI': { icon: Cpu, color: 'text-[#00A67E]' },
  'Agile': { icon: Settings, color: 'text-[#0052CC]' },
  'TDD': { icon: TestTube, color: 'text-[#FF4F64]' },
  'Responsive Design': { icon: LayoutGrid, color: 'text-[#38B2AC]' },
  'Cross-Browser': { icon: Monitor, color: 'text-[#FF4F64]' },
};

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

const TechIcon: React.FC<TechIconProps> = ({ name, size = 20, className = '' }) => {
  // Find the exact match first
  let iconInfo = techIconMap[name];
  
  // If no exact match, try to find a partial match
  if (!iconInfo) {
    const key = Object.keys(techIconMap).find(k => 
      name.toLowerCase().includes(k.toLowerCase()) || 
      k.toLowerCase().includes(name.toLowerCase())
    );
    iconInfo = key ? techIconMap[key] : { icon: Code2, color: 'text-primary' };
  }

  const Icon = iconInfo.icon;

  return (
    <motion.div
      className={`inline-flex items-center justify-center ${iconInfo.color} ${className}`}
      whileHover={{ scale: 1.2, rotate: 360 }}
      transition={{ duration: 0.3 }}
    >
      <Icon size={size} />
    </motion.div>
  );
};

export default TechIcon; 