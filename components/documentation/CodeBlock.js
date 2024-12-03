import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CodeBlock = ({ code, language, title }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg overflow-hidden border border-black/10">
      {title && (
        <div className="bg-black/5 px-4 py-2 text-sm text-black/80 font-medium border-b border-black/10">
          {title}
        </div>
      )}
      <div className="relative">
        <pre className="p-4 overflow-x-auto bg-black text-white text-sm">
          <code className={`language-${language}`}>{code}</code>
        </pre>
        <button
          onClick={copyCode}
          className="absolute right-2 top-2 p-2 text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10"
          aria-label="Copy code"
        >
          {copied ? <Check size={20} /> : <Copy size={20} />}
        </button>
      </div>
    </div>
  );
};

export default CodeBlock;