import { useState } from 'react';
import CodeBlock from '../CodeBlock';

const components = {
  buttons: {
    title: 'Buttons',
    description: 'Flexible button components with various styles and states.',
    code: `<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline">Outline Button</Button>`,
  },
  forms: {
    title: 'Forms',
    description: 'Form components for input, select, and more.',
    code: `<Input placeholder="Enter your name" />
<Select>
  <Option value="1">Option 1</Option>
  <Option value="2">Option 2</Option>
</Select>`,
  },
  navigation: {
    title: 'Navigation',
    description: 'Components for building navigation interfaces.',
    code: `<Navbar>
  <NavItem href="/">Home</NavItem>
  <NavItem href="/about">About</NavItem>
</Navbar>`,
  },
  layout: {
    title: 'Layout',
    description: 'Components for structuring your application.',
    code: `<Container>
  <Grid cols={2}>
    <Card>Content 1</Card>
    <Card>Content 2</Card>
  </Grid>
</Container>`,
  },
};

const Components = () => {
  const [activeComponent, setActiveComponent] = useState('buttons');

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-black">Components</h2>
      
      <div className="flex gap-4 border-b border-black/10">
        {Object.keys(components).map((key) => (
          <button
            key={key}
            onClick={() => setActiveComponent(key)}
            className={`px-4 py-2 text-black transition-colors ${
              activeComponent === key
                ? 'border-b-2 border-velura-blue'
                : 'hover:text-velura-blue'
            }`}
          >
            {components[key].title}
          </button>
        ))}
      </div>

      <div className="bg-velura-sand/10 rounded-lg p-6 border border-black/10">
        <h3 className="text-xl font-semibold text-black mb-3">
          {components[activeComponent].title}
        </h3>
        <p className="text-black/80 mb-4">
          {components[activeComponent].description}
        </p>
        <CodeBlock
          code={components[activeComponent].code}
          language="jsx"
          title="Example"
        />
      </div>
    </div>
  );
};

export default Components;