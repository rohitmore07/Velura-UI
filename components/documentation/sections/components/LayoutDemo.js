const LayoutDemo = () => {
    return (
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-black">Card Variants</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-black/10 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h4 className="font-medium text-black mb-2">Default</h4>
              <p className="text-sm text-black/60">A beautiful card with default styling</p>
            </div>
  
            <div className="backdrop-blur-sm bg-white/40 border border-white/20 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h4 className="font-medium text-black mb-2">Glass</h4>
              <p className="text-sm text-black/60">A card with glass morphism effect</p>
            </div>
  
            <div className="bg-gradient-to-br from-white to-velura-sand/20 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h4 className="font-medium text-black mb-2">Gradient</h4>
              <p className="text-sm text-black/60">A card with gradient background</p>
            </div>
  
            <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h4 className="font-medium text-black mb-2">Floating</h4>
              <p className="text-sm text-black/60">A card with floating effect</p>
            </div>
  
            <div className="bg-white border-2 border-black rounded-xl p-6 hover:rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h4 className="font-medium text-black mb-2">Morphing</h4>
              <p className="text-sm text-black/60">A card with shape-shifting effect</p>
            </div>
  
            <div className="bg-velura-sand/5 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h4 className="font-medium text-black mb-2">Minimal</h4>
              <p className="text-sm text-black/60">A card with minimal styling</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default LayoutDemo;