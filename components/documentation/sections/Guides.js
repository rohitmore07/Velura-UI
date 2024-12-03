import { useState } from 'react';
import CodeBlock from '../CodeBlock';

const guides = {
  theming: {
    title: 'Theming',
    content: (
      <>
        <p className="text-black/80 mb-4">
          Customize the look and feel of Velura UI components using Tailwind CSS classes and CSS variables.
        </p>
        <CodeBlock
          code={`// Configure theme colors
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
      }
    }
  }
}`}
          language="javascript"
          title="tailwind.config.js"
        />
      </>
    ),
  },
  customization: {
    title: 'Customization',
    content: (
      <>
        <p className="text-black/80 mb-4">
          Learn how to customize components using variants and custom styles.
        </p>
        <CodeBlock
          code={`// Create custom variants
const Button = ({ variant, ...props }) => {
  const styles = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    custom: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white',
  };
  
  return <button className={styles[variant]} {...props} />;
}`}
          language="jsx"
          title="Custom Variants"
        />
      </>
    ),
  },
  'best-practices': {
    title: 'Best Practices',
    content: (
      <>
        <p className="text-black/80 mb-4">
          Follow these guidelines to maintain consistency and performance in your application.
        </p>
        <ul className="space-y-2 text-black/80 list-disc pl-6">
          <li>Use semantic HTML elements</li>
          <li>Maintain consistent spacing</li>
          <li>Follow accessibility guidelines</li>
          <li>Optimize for performance</li>
          <li>Keep components focused and reusable</li>
        </ul>
      </>
    ),
  },
};

const Guides = () => {
  const [activeGuide, setActiveGuide] = useState('theming');

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-black">Guides</h2>
      
      <div className="flex gap-4 border-b border-black/10">
        {Object.keys(guides).map((key) => (
          <button
            key={key}
            onClick={() => setActiveGuide(key)}
            className={`px-4 py-2 text-black transition-colors ${
              activeGuide === key
                ? 'border-b-2 border-velura-blue'
                : 'hover:text-velura-blue'
            }`}
          >
            {guides[key].title}
          </button>
        ))}
      </div>

      <div className="bg-velura-sand/10 rounded-lg p-6 border border-black/10">
        <h3 className="text-xl font-semibold text-black mb-3">
          {guides[activeGuide].title}
        </h3>
        {guides[activeGuide].content}
      </div>
    </div>
  );
};

export default Guides;