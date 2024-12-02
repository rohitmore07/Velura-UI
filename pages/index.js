import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ComponentsSection from '../components/ComponentsSection';
import Documentation from '../components/Documentation';
import GitHubSection from '../components/GitHubSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <ComponentsSection />
      <Documentation />
      <GitHubSection />
    </div>
  );
}