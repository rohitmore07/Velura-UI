import CodeBlock from '../../CodeBlock';

const Navigation = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-black">Navigation</h2>
    <p className="text-black/80 leading-relaxed">
      Navigation components for creating intuitive user interfaces.
    </p>

    <div className="space-y-8">
      <div className="bg-velura-sand/10 rounded-lg p-6 border border-black/10">
        <h3 className="text-xl font-semibold text-black mb-3">Navbar</h3>
        <CodeBlock
          code={`import { Navbar, NavItem } from 'velura-ui';

function Navigation() {
  return (
    <Navbar>
      <NavItem href="/">Home</NavItem>
      <NavItem href="/about">About</NavItem>
      <NavItem href="/contact">Contact</NavItem>
    </Navbar>
  );
}`}
          language="jsx"
          title="Basic Navbar"
        />
      </div>

      <div className="bg-velura-sand/10 rounded-lg p-6 border border-black/10">
        <h3 className="text-xl font-semibold text-black mb-3">Tabs</h3>
        <CodeBlock
          code={`import { Tabs, TabList, Tab, TabPanel } from 'velura-ui';

function TabNavigation() {
  return (
    <Tabs>
      <TabList>
        <Tab>Profile</Tab>
        <Tab>Settings</Tab>
      </TabList>
      <TabPanel>Profile content</TabPanel>
      <TabPanel>Settings content</TabPanel>
    </Tabs>
  );
}`}
          language="jsx"
          title="Tabs Navigation"
        />
      </div>

      <div className="bg-velura-sand/10 rounded-lg p-6 border border-black/10">
        <h3 className="text-xl font-semibold text-black mb-3">Breadcrumbs</h3>
        <CodeBlock
          code={`import { Breadcrumbs, BreadcrumbItem } from 'velura-ui';

function BreadcrumbNav() {
  return (
    <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/products">Products</BreadcrumbItem>
      <BreadcrumbItem current>Details</BreadcrumbItem>
    </Breadcrumbs>
  );
}`}
          language="jsx"
          title="Breadcrumbs"
        />
      </div>
    </div>
  </div>
);

export default Navigation;