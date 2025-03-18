
import { Camera, ShoppingCart, Package, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const PromoBanner = () => {
  return (
    <Link 
      to="/scan" 
      className="block w-full relative mt-3 mb-6 overflow-hidden rounded-2xl shadow-md transition-transform duration-300 animate-entrance hover:shadow-lg hover:scale-[1.02]"
    >
      <div className="relative bg-gradient-to-r from-blue-400/30 to-purple-400/30 backdrop-blur-sm p-5 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-white/10 backdrop-blur-[1px]"></div>
        <div className="relative z-10 flex items-center">
          <div className="mr-4 bg-white/20 rounded-full p-3 backdrop-blur-sm">
            <Camera className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="font-bold text-lg mb-1">Snap & Compare</h2>
            <p className="text-sm opacity-80">Unlock the Best Prices Now!</p>
          </div>
        </div>
        
        {/* Icons row */}
        <div className="relative z-10 flex justify-around mt-4 pt-3 border-t border-white/20">
          <div className="flex flex-col items-center">
            <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm mb-1">
              <ShoppingCart className="h-4 w-4 text-primary" />
            </div>
            <span className="text-xs">Cart</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm mb-1">
              <Package className="h-4 w-4 text-primary" />
            </div>
            <span className="text-xs">All Orders</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm mb-1">
              <Tag className="h-4 w-4 text-primary" />
            </div>
            <span className="text-xs">Price Trends</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PromoBanner;
