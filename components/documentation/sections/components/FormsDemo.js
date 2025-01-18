import { useState } from 'react';

const FormsDemo = () => {
  const [formData, setFormData] = useState({
    username: '',
    country: '',
    terms: false
  });

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-black">Text Input</h3>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-black">Username</label>
          <input
            type="text"
            placeholder="Enter username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className="w-full px-4 py-2 bg-white/50 backdrop-blur-sm border border-black/10 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-velura-blue/20 focus:border-velura-blue"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-black">Select</h3>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-black">Country</label>
          <select
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className="w-full px-4 py-2 bg-white/50 backdrop-blur-sm border border-black/10 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-velura-blue/20 focus:border-velura-blue"
          >
            <option value="">Select a country</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="ca">Canada</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-black">Checkbox</h3>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={formData.terms}
            onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
            className="h-5 w-5 text-velura-blue rounded border-black/20 focus:ring-2 focus:ring-velura-blue/20 focus:ring-offset-2"
          />
          <span className="text-sm text-black">I accept the terms and conditions</span>
        </label>
      </div>
    </div>
  );
};

export default FormsDemo;