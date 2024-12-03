import CodeBlock from '../CodeBlock';

const Introduction = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-black">Introduction</h2>
    <p className="text-black/80 leading-relaxed">
      Velura UI is a modern React component library built with a focus on developer experience and beautiful design. Our components are built with Tailwind CSS, making them highly customizable while maintaining a consistent design language.
    </p>
    <div className="bg-velura-sand/10 rounded-lg p-6 border border-black/10">
      <h3 className="text-xl font-semibold text-black mb-3">Key Features</h3>
      <ul className="space-y-2 text-black/80">
        <li>• Fully customizable components</li>
        <li>• Built with Tailwind CSS</li>
        <li>• Accessible by default</li>
        <li>• Responsive design</li>
        <li>• TypeScript support</li>
      </ul>
    </div>
  </div>
);

export default Introduction;