import { cn } from '../../utils/cn';

const FeatureCard = ({ icon, title, description, className }) => (
  <div className={cn(
    "bg-white/50 backdrop-blur-sm p-8 rounded-xl border border-black/5 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 hover:bg-white/80",
    className
  )}>
    <div className="w-12 h-12 bg-velura-sand/20 rounded-lg flex items-center justify-center mb-4">
      <div className="text-black">{icon}</div>
    </div>
    <h3 className="text-xl font-semibold mb-3 text-black">{title}</h3>
    <p className="text-black/80 leading-relaxed">{description}</p>
  </div>
);

export default FeatureCard;