import ButtonsDemo from './ButtonsDemo';
import CodeBlock from '../../CodeBlock';

const Buttons = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-black">Buttons</h2>
    <p className="text-black/80 leading-relaxed">
      Beautiful, interactive button components with various styles and animations.
    </p>

    <div className="bg-velura-sand/10 rounded-lg p-6 border border-black/10">
      <h3 className="text-xl font-semibold text-black mb-6">Live Demo</h3>
      <ButtonsDemo />
    </div>

    <div className="bg-velura-sand/10 rounded-lg p-6 border border-black/10">
      <h3 className="text-xl font-semibold text-black mb-3">Usage</h3>
      <CodeBlock
        code={`import { Button } from 'velura-ui';

function App() {
  return (
    <>
      <Button variant="default">Default</Button>
      <Button variant="morphing" icon={<Play />}>Morphing</Button>
      <Button variant="gooey">Gooey</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="soft">Soft</Button>
      <Button variant="metallic">Metallic</Button>
      <Button variant="glass">Glass</Button>
    </>
  );
}`}
        language="jsx"
        title="Button Examples"
      />
    </div>
  </div>
);

export default Buttons;