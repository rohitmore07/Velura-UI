import { useState } from 'react';
import { Home } from 'lucide-react';

const NavigationDemo = () => {
  const [variant, setVariant] = useState('default');

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-black">Navbar Variants</h3>
        <div className="flex gap-4 mb-8">
          {['default', 'glass', 'floating', 'minimal'].map((v) => (
            <button
              key={v}
              onClick={() => setVariant(v)}
              className={`px-4 py-2 rounded-lg ${
                variant === v ? 'bg-black text-white' : 'bg-black/5'
              }`}
            >
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </button>
          ))}
        </div>

        <div className="border border-black/10 rounded-xl p-8 bg-velura-sand/5">
          <nav className={`w-full ${
            variant === 'glass' ? 'backdrop-blur-md bg-white/50' :
            variant === 'floating' ? 'bg-white shadow-lg' :
            variant === 'minimal' ? 'bg-transparent' :
            'bg-white border-b border-black/10'
          } rounded-lg transition-all duration-300`}>
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <div className="flex-shrink-0">
                  <Home size={24} />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <a href="#" className="px-3 py-2 rounded-md text-sm font-medium bg-black text-white">Home</a>
                    <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-black/5 transition-colors">About</a>
                    <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-black/5 transition-colors">Services</a>
                    <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-black/5 transition-colors">Contact</a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavigationDemo;