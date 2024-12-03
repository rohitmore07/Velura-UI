import CodeBlock from '../../CodeBlock';

const Layout = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-black">Layout</h2>
    <p className="text-black/80 leading-relaxed">
      Layout components for structuring your application's interface.
    </p>

    <div className="space-y-8">
      <div className="bg-velura-sand/10 rounded-lg p-6 border border-black/10">
        <h3 className="text-xl font-semibold text-black mb-3">Container</h3>
        <CodeBlock
          code={`import { Container } from 'velura-ui';

function Layout() {
  return (
    <Container maxWidth="xl">
      <h1>Your content here</h1>
    </Container>
  );
}`}
          language="jsx"
          title="Container"
        />
      </div>

      <div className="bg-velura-sand/10 rounded-lg p-6 border border-black/10">
        <h3 className="text-xl font-semibold text-black mb-3">Grid</h3>
        <CodeBlock
          code={`import { Grid, GridItem } from 'velura-ui';

function GridLayout() {
  return (
    <Grid cols={3} gap={4}>
      <GridItem>Column 1</GridItem>
      <GridItem>Column 2</GridItem>
      <GridItem>Column 3</GridItem>
    </Grid>
  );
}`}
          language="jsx"
          title="Grid Layout"
        />
      </div>

      <div className="bg-velura-sand/10 rounded-lg p-6 border border-black/10">
        <h3 className="text-xl font-semibold text-black mb-3">Card</h3>
        <CodeBlock
          code={`import { Card } from 'velura-ui';

function CardLayout() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
      </Card.Header>
      <Card.Body>
        Card content goes here
      </Card.Body>
      <Card.Footer>
        <Button>Action</Button>
      </Card.Footer>
    </Card>
  );
}`}
          language="jsx"
          title="Card Component"
        />
      </div>
    </div>
  </div>
);

export default Layout;