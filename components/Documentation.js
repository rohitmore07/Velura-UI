import { useState } from 'react';
import DocSearch from './documentation/DocSearch';
import DocSidebar from './documentation/DocSidebar';
import Introduction from './documentation/sections/Introduction';
import Installation from './documentation/sections/Installation';
import QuickStart from './documentation/sections/QuickStart';
import Buttons from './documentation/sections/components/Buttons';
import Forms from './documentation/sections/components/Forms';
import Navigation from './documentation/sections/components/Navigation';
import Layout from './documentation/sections/components/Layout';
import Guides from './documentation/sections/Guides';

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'introduction':
        return <Introduction />;
      case 'installation':
        return <Installation />;
      case 'quick-start':
        return <QuickStart />;
      case 'buttons':
        return <Buttons />;
      case 'forms':
        return <Forms />;
      case 'navigation':
        return <Navigation />;
      case 'layout':
        return <Layout />;
      case 'guides':
        return <Guides />;
      default:
        return <Introduction />;
    }
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
          <DocSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
          <div className="flex-1 min-w-0">
            {renderSection()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;