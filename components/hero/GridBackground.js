import { motion } from 'framer-motion';

const GridBackground = () => (
  <>
    <div className="absolute inset-0 bg-white bg-grid-black/[0.07]">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
      />
    </div>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="absolute inset-0"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-velura-slate/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-velura-blue/5 rounded-full filter blur-3xl" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-velura-slate/5 rounded-full filter blur-3xl" />
    </motion.div>
  </>
);

export default GridBackground;