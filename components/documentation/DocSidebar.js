import { ChevronRight } from 'lucide-react';

const sections = [
  {
    title: 'Getting Started',
    items: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'installation', title: 'Installation' },
      { id: 'quick-start', title: 'Quick Start' },
    ],
  },
  {
    title: 'Components',
    items: [
      { id: 'buttons', title: 'Buttons' },
      { id: 'forms', title: 'Forms' },
      { id: 'navigation', title: 'Navigation' },
      { id: 'layout', title: 'Layout' },
    ],
  },
  {
    title: 'Guides',
    items: [
      { id: 'guides', title: 'Guides' },
    ],
  },
];

const DocSidebar = ({ activeSection, onSectionChange }) => {
  return (
    <nav className="w-64 pr-8 hidden lg:block">
      <div className="sticky top-20">
        {sections.map((section, idx) => (
          <div key={idx} className="mb-8">
            <h5 className="font-semibold text-black mb-4">{section.title}</h5>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onSectionChange(item.id)}
                    className={`flex items-center w-full text-left ${
                      activeSection === item.id
                        ? 'text-velura-blue'
                        : 'text-black/80 hover:text-velura-blue'
                    } transition-colors group`}
                  >
                    <ChevronRight 
                      className={`${
                        activeSection === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      } transition-opacity`}
                      size={16}
                    />
                    <span>{item.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default DocSidebar;