import CodeBlock from '../CodeBlock';

const Installation = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-black">Installation</h2>
    <p className="text-black/80 leading-relaxed">
      Get started with Velura UI by installing the package and its peer dependencies.
    </p>
    
    <CodeBlock
      code="npm install velura-ui"
      language="bash"
      title="Install via npm"
    />
    
    <div className="bg-velura-sand/10 rounded-lg p-6 border border-black/10">
      <h3 className="text-xl font-semibold text-black mb-3">Required Dependencies</h3>
      <CodeBlock
        code={`{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwindcss": "^3.4.1"
  }
}`}
        language="json"
        title="package.json"
      />
    </div>
  </div>
);

export default Installation;