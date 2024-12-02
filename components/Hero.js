import GridBackground from './hero/GridBackground';
import HeroContent from './hero/HeroContent';
import FeatureCards from './hero/FeatureCards';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <GridBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center justify-center">
        <HeroContent />
        <FeatureCards />
      </div>
    </div>
  );
};

export default Hero;