import NavigationDemo from './NavigationDemo';
import CodeBlock from '../../CodeBlock';

const Navigation = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-black">Navigation</h2>
    <p className="text-black/80 leading-relaxed">
      Navigation components for creating intuitive user interfaces.
    </p>

    <div className="bg-velura-sand/10 rounded-lg p-6 border border-black/10">
      <h3 className="text-xl font-semibold text-black mb-6">Live Demo</h3>
      <NavigationDemo />
    </div>

    <div className="bg-velura-sand/10 rounded-lg p-6 border border-black/10">
      <h3 className="text-xl font-semibold text-black mb-3">Usage</h3>
      <CodeBlock
        code={`import { Navbar, NavItem } from 'velura-ui';

function Navigation() {
  return (
    <Navbar variant="glass" logo={<Logo />}>
      <NavItem href="/" active>Home</NavItem>
      <NavItem href="/about">About</NavItem>
      <NavItem href="/contact">Contact</NavItem>
    </Navbar>
  );
}`}
        language="jsx"
        title="Navigation Example"
      />
    </div>
  </div>
);

export default Navigation;