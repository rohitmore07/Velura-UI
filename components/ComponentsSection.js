import { useState } from 'react';
import { Copy, Check, Play, Settings, User, Home } from 'lucide-react';

const ComponentsSection = () => {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText('npm install velura-ui');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const simulateLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
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
            <div className="relative flex items-center bg-black text-white rounded-lg p-4">
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
          <ComponentPreview 
            title="Buttons" 
            preview={
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-black/90 transition-all">
                  Default
                </button>
                <button className="group px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-[0_0_40px_8px_rgba(168,85,247,0.4)] transition-all">
                  <span className="flex items-center gap-2">
                    <Play size={16} className="group-hover:translate-x-0.5 transition-transform" />
                    Morphing
                  </span>
                </button>
                <button 
                  className="relative px-4 py-2 bg-black text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={simulateLoading}
                  disabled={loading}
                >
                  {loading ? (
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  ) : (
                    'Loading'
                  )}
                </button>
              </div>
            }
          />
          
          <ComponentPreview 
            title="Cards" 
            preview={
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white border border-black/10 rounded-xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <h4 className="font-medium text-black text-sm mb-1">Default</h4>
                  <p className="text-xs text-black/60">Basic card</p>
                </div>
                <div className="backdrop-blur-sm bg-white/40 border border-white/20 rounded-xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <h4 className="font-medium text-black text-sm mb-1">Glass</h4>
                  <p className="text-xs text-black/60">Glass effect</p>
                </div>
              </div>
            }
          />
          
          <ComponentPreview 
            title="Forms" 
            preview={
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-black">Username</label>
                  <input
                    type="text"
                    placeholder="Enter username"
                    className="w-full px-3 py-2 bg-white/50 backdrop-blur-sm border border-black/10 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-velura-blue/20 focus:border-velura-blue"
                  />
                </div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-velura-blue rounded border-black/20 focus:ring-2 focus:ring-velura-blue/20 focus:ring-offset-2"
                  />
                  <span className="text-sm text-black">Remember me</span>
                </label>
              </div>
            }
          />
          
          <ComponentPreview 
            title="Navigation" 
            preview={
              <nav className="w-full bg-white border border-black/10 rounded-lg">
                <div className="px-4">
                  <div className="flex items-center justify-between h-12">
                    <div className="flex-shrink-0">
                      <Home size={20} />
                    </div>
                    <div className="flex space-x-3">
                      <a href="#" className="px-3 py-1 rounded-md text-sm font-medium bg-black text-white">Home</a>
                      <a href="#" className="px-3 py-1 rounded-md text-sm font-medium text-black hover:bg-black/5 transition-colors">About</a>
                    </div>
                  </div>
                </div>
              </nav>
            }
          />
          
          <ComponentPreview 
            title="Modals" 
            preview={
              <div className="relative bg-white/50 backdrop-blur-sm border border-black/10 rounded-xl p-4 shadow-lg">
                <div className="text-sm font-medium text-black mb-2">Modal Title</div>
                <p className="text-xs text-black/60 mb-3">This is a sample modal content.</p>
                <div className="flex justify-end gap-2">
                  <button className="px-3 py-1 text-sm bg-black/5 rounded-lg hover:bg-black/10 transition-colors">Cancel</button>
                  <button className="px-3 py-1 text-sm bg-black text-white rounded-lg hover:bg-black/90 transition-colors">Confirm</button>
                </div>
              </div>
            }
          />
          
          <ComponentPreview 
            title="Tables" 
            preview={
              <div className="overflow-hidden rounded-lg border border-black/10">
                <table className="w-full text-sm">
                  <thead className="bg-black/[0.02] border-b border-black/10">
                    <tr>
                      <th className="px-4 py-2 text-left font-medium text-black">Name</th>
                      <th className="px-4 py-2 text-left font-medium text-black">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-black/5 last:border-0">
                      <td className="px-4 py-2 text-black/80">John Doe</td>
                      <td className="px-4 py-2 text-black/80">Developer</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-black/80">Jane Smith</td>
                      <td className="px-4 py-2 text-black/80">Designer</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

const ComponentPreview = ({ title, preview }) => (
  <div className="bg-white rounded-xl border border-black/10 shadow-sm hover:shadow-md transition-all">
    <div className="p-4 bg-velura-sand/10 border-b border-black/10">
      <h3 className="font-semibold text-black">{title}</h3>
    </div>
    <div className="p-6">
      <div className="bg-velura-sand/10 rounded-lg flex items-center justify-center p-6">
        {preview}
      </div>
    </div>
  </div>
);

export default ComponentsSection;