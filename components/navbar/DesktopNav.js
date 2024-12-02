import { Github } from 'lucide-react';
import NavLink from './NavLink';

const DesktopNav = () => (
  <div className="hidden md:block">
    <div className="ml-10 flex items-center space-x-8">
      <NavLink href="#features">Features</NavLink>
      <NavLink href="#components">Components</NavLink>
      <NavLink href="#docs">Documentation</NavLink>
      <NavLink href="https://github.com/rohitmore07/Velura-UI" className="flex items-center gap-2">
        <Github size={20} />
        GitHub
      </NavLink>
    </div>
  </div>
);

export default DesktopNav;