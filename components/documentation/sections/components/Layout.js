import LayoutDemo from './LayoutDemo';
import CodeBlock from '../../CodeBlock';

const Layout = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-black">Layout</h2>
    <p className="text-black/80 leading-relaxed">
      Layout components for structuring your application's interface.
    </p>

    <div className="bg-velura-sand/10 rounded-lg p-6 border border-black/10">
      <h3 className="text-xl font-semibold text-black mb-6">Live Demo</h3>
      <LayoutDemo />
    </div>

    <div className="bg-velura-sand/10 rounded-lg p-6 border border-black/10">
      <h3 className="text-xl font-semibold text-black mb-3">Usage</h3>
      <CodeBlock
        code={`import { Card } from 'velura-ui';

function Layout() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Card variant="default">
        <h3>Default Card</h3>
        <p>Basic card with default styling</p>
      </Card>
      
      <Card variant="glass">
        <h3>Glass Card</h3>
        <p>Card with glass morphism effect</p>
      </Card>
      
      <Card variant="gradient">
        <h3>Gradient Card</h3>
        <p>Card with gradient background</p>
      </Card>
    </div>
  );
}`}
        language="jsx"
        title="Layout Examples"
      />
    </div>
  </div>
);

export default Layout;