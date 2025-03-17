
import { Camera } from 'lucide-react';
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
      </div>
    </Link>
  );
};

export default PromoBanner;
