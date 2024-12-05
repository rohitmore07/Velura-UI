import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroContent = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center relative z-10 max-w-4xl mx-auto"
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
        Build beautiful React apps with
        <span className="bg-gradient-to-r from-black to-[#AB886D] bg-clip-text text-transparent"> Velura UI</span>
      </h1>
    </motion.div>
    <motion.p 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="text-xl md:text-xl text-black/80 mb-6 max-w-2xl mx-auto leading-relaxed"
    >
      A modern React component library with beautiful, responsive components built with Tailwind CSS. Perfect for your next project.
    </motion.p>
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-col sm:flex-row gap-4 justify-center"
    >
      <a href="/docs"><button className="group inline-flex items-center px-6 py-3 bg-[#493628] text-white rounded-lg hover:bg-velura-blue transition-all duration-300 transform hover:scale-105">
        <span className="mr-2">Get Started</span>
        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
      </button></a>
      <a href="/components"><button className="inline-flex items-center px-6 py-3 bg-white text-[#493628] rounded-lg border border-[#493628] hover:border-black/30 hover:bg-velura-sand/20 transition-all duration-300 transform hover:scale-105">
        View Components
      </button></a>
    </motion.div>
  </motion.div>
);

export default HeroContent;