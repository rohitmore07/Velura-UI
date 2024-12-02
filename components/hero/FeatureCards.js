import { Box, Palette, Zap } from 'lucide-react';
import FeatureCard from './FeatureCard';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Zap />,
    title: "Lightning Fast",
    description: "Optimized for performance with zero unnecessary dependencies."
  },
  {
    icon: <Palette />,
    title: "Customizable",
    description: "Easily customize components to match your brand."
  },
  {
    icon: <Box />,
    title: "Production Ready",
    description: "Battle-tested components used by thousands of developers."
  }
];

const FeatureCards = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
  >
    {features.map((feature, index) => (
      <motion.div
        key={feature.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
      >
        <FeatureCard
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      </motion.div>
    ))}
  </motion.div>
);

export default FeatureCards;