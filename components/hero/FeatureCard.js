import { cn } from '../../utils/cn';

const FeatureCard = ({ icon, title, description, className }) => (
  <div className={cn(
    "bg-white backdrop-blur-sm p-8 rounded-xl border border-black/5 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 hover:bg-white",
    className
  )}>
    <div className="w-12 h-12 bg-velura-sand/20 rounded-lg flex items-center justify-center mb-4">
      <div className="text-[#493628]">{icon}</div>
    </div>
    <h3 className="text-xl font-semibold mb-3 text-[#493628]">{title}</h3>
    <p className="text-[#493628]/80 leading-relaxed">{description}</p>
  </div>
);

export default FeatureCard;