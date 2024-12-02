import { cn } from '../../utils/cn';

const NavLink = ({ href, children, className }) => (
  <a 
    href={href} 
    className={cn(
      "text-black hover:text-velura-blue transition-colors font-medium",
      className
    )}
  >
    {children}
  </a>
);

export default NavLink;