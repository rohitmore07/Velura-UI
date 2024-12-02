import { ChevronRight } from 'lucide-react';

const sections = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '#introduction' },
      { title: 'Installation', href: '#installation' },
      { title: 'Quick Start', href: '#quick-start' },
    ],
  },
  {
    title: 'Components',
    items: [
      { title: 'Buttons', href: '#buttons' },
      { title: 'Forms', href: '#forms' },
      { title: 'Navigation', href: '#navigation' },
      { title: 'Layout', href: '#layout' },
    ],
  },
  {
    title: 'Guides',
    items: [
      { title: 'Theming', href: '#theming' },
      { title: 'Customization', href: '#customization' },
      { title: 'Best Practices', href: '#best-practices' },
    ],
  },
];

const DocSidebar = () => {
  return (
    <nav className="w-64 pr-8 hidden lg:block">
      <div className="sticky top-20">
        {sections.map((section, idx) => (
          <div key={idx} className="mb-8">
            <h5 className="font-semibold text-black mb-4">{section.title}</h5>
            <ul className="space-y-2">
              {section.items.map((item, itemIdx) => (
                <li key={itemIdx}>
                  <a
                    href={item.href}
                    className="flex items-center text-black/80 hover:text-velura-blue transition-colors group"
                  >
                    <ChevronRight 
                      className="opacity-0 group-hover:opacity-100 transition-opacity" 
                      size={16} 
                    />
                    <span>{item.title}</span>
                  </a>
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