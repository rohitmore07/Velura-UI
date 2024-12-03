import CodeBlock from '../../CodeBlock';

const Buttons = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-black">Buttons</h2>
    <p className="text-black/80 leading-relaxed">
      Versatile button components with various styles, sizes, and states.
    </p>

    <div className="space-y-8">
      <div className="bg-velura-sand/10 rounded-lg p-6 border border-black/10">
        <h3 className="text-xl font-semibold text-black mb-3">Basic Usage</h3>
        <CodeBlock
          code={`import { Button } from 'velura-ui';

function App() {
  return (
    <Button variant="primary">
      Click me
    </Button>
  );
}`}
          language="jsx"
          title="Basic Button"
        />
      </div>

      <div className="bg-velura-sand/10 rounded-lg p-6 border border-black/10">
        <h3 className="text-xl font-semibold text-black mb-3">Button Variants</h3>
        <CodeBlock
          code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
          language="jsx"
          title="Button Variants"
        />
      </div>

      <div className="bg-velura-sand/10 rounded-lg p-6 border border-black/10">
        <h3 className="text-xl font-semibold text-black mb-3">Button Sizes</h3>
        <CodeBlock
          code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
          language="jsx"
          title="Button Sizes"
        />
      </div>

      <div className="bg-velura-sand/10 rounded-lg p-6 border border-black/10">
        <h3 className="text-xl font-semibold text-black mb-3">Button States</h3>
        <CodeBlock
          code={`<Button disabled>Disabled</Button>
<Button loading>Loading</Button>
<Button icon={<Icon />}>With Icon</Button>`}
          language="jsx"
          title="Button States"
        />
      </div>
    </div>
  </div>
);

export default Buttons;