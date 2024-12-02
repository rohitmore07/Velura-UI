import { useState } from 'react';
import DocSearch from './documentation/DocSearch';
import DocSidebar from './documentation/DocSidebar';
import DocContent from './documentation/DocContent';

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Implement search functionality here
  };

  return (
    <section id="docs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Documentation
          </h2>
          <p className="text-xl text-black/80 max-w-2xl mx-auto mb-8">
            Everything you need to know about using Velura UI in your projects
          </p>
          <DocSearch onSearch={handleSearch} />
        </div>

        <div className="flex gap-8">
          <DocSidebar />
          <DocContent />
        </div>
      </div>
    </section>
  );
};

export default Documentation;