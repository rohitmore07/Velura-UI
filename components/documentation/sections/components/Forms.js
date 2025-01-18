import FormsDemo from './FormsDemo';
import CodeBlock from '../../CodeBlock';

const Forms = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-black">Forms</h2>
    <p className="text-black/80 leading-relaxed">
      Form components for building accessible and user-friendly input interfaces.
    </p>

    <div className="bg-velura-sand/10 rounded-lg p-6 border border-black/10">
      <h3 className="text-xl font-semibold text-black mb-6">Live Demo</h3>
      <FormsDemo />
    </div>

    <div className="bg-velura-sand/10 rounded-lg p-6 border border-black/10">
      <h3 className="text-xl font-semibold text-black mb-3">Usage</h3>
      <CodeBlock
        code={`import { Input, Select, Checkbox } from 'velura-ui';

function Form() {
  return (
    <form className="space-y-4">
      <Input
        label="Username"
        placeholder="Enter username"
      />
      
      <Select
        label="Country"
        options={[
          { value: 'us', label: 'United States' },
          { value: 'uk', label: 'United Kingdom' },
          { value: 'ca', label: 'Canada' }
        ]}
      />
      
      <Checkbox
        label="I accept the terms and conditions"
      />
    </form>
  );
}`}
        language="jsx"
        title="Form Examples"
      />
    </div>
  </div>
);

export default Forms;