import { AnimatedHeading, AnimatedParagraph } from '../components/AnimatedText';

const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="py-20 education-section"
    >
      <div className="container mx-auto px-4">
        <AnimatedHeading
          text="Education"
          className="text-3xl md:text-4xl font-bold mb-6 gradient-text"
          once={true}
          delay={0.1}
        />
        <AnimatedParagraph
          text="B.Tech in Information Technology, Sri Manakula Vinayagar Engineering College, Puducherry (CGPA: 7.77)"
          className="text-lg text-gray-700 mb-4"
          once={true}
          delay={0.2}
        />
        <AnimatedParagraph
          text="Graduated: 2023"
          className="text-md text-gray-600"
          once={true}
          delay={0.3}
        />
      </div>
    </section>
  );
};

export default EducationSection; 