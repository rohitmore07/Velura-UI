import { motion, AnimatePresence } from 'framer-motion';
import { Github } from 'lucide-react';
import NavLink from './NavLink';

const MobileMenu = ({ isOpen }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.2 }}
        className="md:hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/5 backdrop-blur-lg supports-[backdrop-filter]:bg-white/2">
          <NavLink href="#features" className="block px-3 py-2">Features</NavLink>
          <NavLink href="#components" className="block px-3 py-2">Components</NavLink>
          <NavLink href="#docs" className="block px-3 py-2">Documentation</NavLink>
          <NavLink href="https://github.com/rohitmore07/Velura-UI" className="flex items-center gap-2 px-3 py-2">
            <Github size={20} />
            GitHub
          </NavLink>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default MobileMenu;