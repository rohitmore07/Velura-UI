import { Code2, Paintbrush, Puzzle, Shield, Smartphone, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Code2 className="text-velura-slate" size={24} />,
      title: 'TypeScript Ready',
      description: 'Built with TypeScript for better development experience and type safety.'
    },
    {
      icon: <Paintbrush className="text-velura-slate" size={24} />,
      title: 'Tailwind CSS',
      description: 'Styled with Tailwind CSS for rapid UI development and customization.'
    },
    {
      icon: <Shield className="text-velura-slate" size={24} />,
      title: 'Secure by Default',
      description: 'Security best practices built-in to protect your applications.'
    },
    {
      icon: <Smartphone className="text-velura-slate" size={24} />,
      title: 'Responsive Design',
      description: 'Components that look great on any device, from mobile to desktop.'
    },
    {
      icon: <Puzzle className="text-velura-slate" size={24} />,
      title: 'Modular Architecture',
      description: 'Import only what you need, keeping your bundle size small.'
    },
    {
      icon: <Zap className="text-velura-slate" size={24} />,
      title: 'Fast Development',
      description: 'Quick setup and intuitive APIs for rapid development.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-velura-slate mb-4">
            Everything you need to build modern UIs
          </h2>
          <p className="text-xl text-velura-slate/80 max-w-2xl mx-auto">
            Velura UI provides all the tools you need to create beautiful, responsive applications with React and Tailwind CSS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl border border-velura-slate/10 hover:border-velura-slate/20 transition-colors bg-white shadow-sm hover:shadow-md">
              <div className="w-12 h-12 bg-velura-sand/20 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-velura-slate">{feature.title}</h3>
              <p className="text-velura-slate/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;