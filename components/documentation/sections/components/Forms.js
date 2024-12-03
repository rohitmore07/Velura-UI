import CodeBlock from '../../CodeBlock';

const Forms = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-black">Forms</h2>
    <p className="text-black/80 leading-relaxed">
      Form components for building accessible and user-friendly input interfaces.
    </p>

    <div className="space-y-8">
      <div className="bg-velura-sand/10 rounded-lg p-6 border border-black/10">
        <h3 className="text-xl font-semibold text-black mb-3">Text Input</h3>
        <CodeBlock
          code={`import { Input } from 'velura-ui';

function Form() {
  return (
    <Input
      label="Username"
      placeholder="Enter username"
      helperText="Must be at least 4 characters"
    />
  );
}`}
          language="jsx"
          title="Text Input"
        />
      </div>

      <div className="bg-velura-sand/10 rounded-lg p-6 border border-black/10">
        <h3 className="text-xl font-semibold text-black mb-3">Select</h3>
        <CodeBlock
          code={`import { Select, Option } from 'velura-ui';

function Form() {
  return (
    <Select label="Country">
      <Option value="us">United States</Option>
      <Option value="uk">United Kingdom</Option>
      <Option value="ca">Canada</Option>
    </Select>
  );
}`}
          language="jsx"
          title="Select Input"
        />
      </div>

      <div className="bg-velura-sand/10 rounded-lg p-6 border border-black/10">
        <h3 className="text-xl font-semibold text-black mb-3">Checkbox & Radio</h3>
        <CodeBlock
          code={`<Checkbox label="Accept terms" />
<RadioGroup>
  <Radio value="option1" label="Option 1" />
  <Radio value="option2" label="Option 2" />
</RadioGroup>`}
          language="jsx"
          title="Checkbox & Radio"
        />
      </div>
    </div>
  </div>
);

export default Forms;