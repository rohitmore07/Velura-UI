import CodeBlock from '../CodeBlock';

const QuickStart = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-black">Quick Start</h2>
    <p className="text-black/80 leading-relaxed">
      After installation, you can start using Velura UI components in your React application.
    </p>
    
    <CodeBlock
      code={`import { Button } from 'velura-ui';

function App() {
  return (
    <div>
      <Button variant="primary">
        Click me
      </Button>
    </div>
  );
}`}
      language="jsx"
      title="Example Usage"
    />
    
    <div className="bg-velura-sand/10 rounded-lg p-6 border border-black/10">
      <h3 className="text-xl font-semibold text-black mb-3">Configuration</h3>
      <p className="text-black/80 mb-4">
        Add the Velura UI plugin to your tailwind.config.js:
      </p>
      <CodeBlock
        code={`module.exports = {
  content: [
    './src/**/*.{js,jsx}',
    './node_modules/velura-ui/**/*.js',
  ],
  plugins: [
    require('velura-ui/plugin'),
  ],
}`}
        language="javascript"
        title="tailwind.config.js"
      />
    </div>
  </div>
);

export default QuickStart;