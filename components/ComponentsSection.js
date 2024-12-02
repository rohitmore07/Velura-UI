import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const ComponentsSection = () => {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText('npm install velura-ui');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="components" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Beautiful Components
          </h2>
          <p className="text-xl text-black/80 max-w-2xl mx-auto mb-8">
            Get started with Velura UI by installing the package from npm
          </p>
          <div className="flex justify-center mb-12">
            <div className="relative flex items-center bg-[#493628] text-white rounded-lg p-4">
              <code className="font-mono">npm install velura-ui</code>
              <button
                onClick={copyCommand}
                className="ml-4 p-2 hover:bg-velura-blue/20 rounded-md transition-colors"
                aria-label="Copy command"
              >
                {copied ? <Check size={20} /> : <Copy size={20} />}
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ComponentPreview title="Buttons" />
          <ComponentPreview title="Cards" />
          <ComponentPreview title="Forms" />
          <ComponentPreview title="Navigation" />
          <ComponentPreview title="Modals" />
          <ComponentPreview title="Tables" />
        </div>
      </div>
    </section>
  );
};

const ComponentPreview = ({ title }) => (
  <div className="bg-white rounded-xl border border-black/10 shadow-sm hover:shadow-md transition-all">
    <div className="p-4 bg-velura-sand/10 border-b border-black/10">
      <h3 className="font-semibold text-black">{title}</h3>
    </div>
    <div className="p-6">
      <div className="h-32 bg-velura-sand/10 rounded-lg flex items-center justify-center">
        <span className="text-black/60">Preview</span>
      </div>
    </div>
  </div>
);

export default ComponentsSection;