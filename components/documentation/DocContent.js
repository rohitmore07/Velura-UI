import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const DocContent = () => {
  const [copied, setCopied] = useState(false);

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex-1 max-w-3xl">
      <section id="introduction" className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-black">Introduction</h2>
        <p className="text-black/80 mb-4">
          Velura UI is a modern React component library built with TypeScript and Tailwind CSS.
          It provides a set of beautiful, accessible, and customizable components to help you build
          better web applications faster.
        </p>
      </section>

      <section id="installation" className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-black">Installation</h2>
        <p className="text-black/80 mb-4">
          Get started with Velura UI by installing it via npm:
        </p>
        <div className="relative mb-4">
          <div className="bg-black text-white rounded-lg p-4 font-mono">
            npm install velura-ui
          </div>
          <button
            onClick={() => copyCode('npm install velura-ui')}
            className="absolute right-2 top-2 p-2 text-white/80 hover:text-white"
          >
            {copied ? <Check size={20} /> : <Copy size={20} />}
          </button>
        </div>
      </section>

      <section id="quick-start" className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-black">Quick Start</h2>
        <p className="text-black/80 mb-4">
          After installation, you can import and use components like this:
        </p>
        <div className="relative mb-4">
          <pre className="bg-black text-white rounded-lg p-4 font-mono">
{`import { Button } from 'velura-ui';

function App() {
  return (
    <Button variant="primary">
      Click me
    </Button>
  );
}`}
          </pre>
          <button
            onClick={() => copyCode(`import { Button } from 'velura-ui';\n\nfunction App() {\n  return (\n    <Button variant="primary">\n      Click me\n    </Button>\n  );\n}`)}
            className="absolute right-2 top-2 p-2 text-white/80 hover:text-white"
          >
            {copied ? <Check size={20} /> : <Copy size={20} />}
          </button>
        </div>
      </section>
    </div>
  );
};

export default DocContent;