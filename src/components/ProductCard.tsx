
import { ArrowUp, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    image: string;
    lowestPrice: number;
    highestPrice: number;
    storePrice: number;
    savings: number;
  };
  className?: string;
  animate?: boolean;
}

const ProductCard = ({ product, className, animate = true }: ProductCardProps) => {
  const formattedLowestPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(product.lowestPrice);

  const isCheaperOnline = product.storePrice > product.lowestPrice;
  const savingsPercentage = Math.round((product.savings / product.storePrice) * 100);

  return (
    <Link 
      to={`/product/${product.id}`}
      className={cn(
        "block w-full glass-morphism rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md",
        animate && "animate-entrance",
        className
      )}
    >
      <div className="aspect-[4/3] w-full relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <div className={cn(
            "px-3 py-1.5 rounded-full text-sm font-medium backdrop-blur-md",
            isCheaperOnline 
              ? "bg-green-500/70 text-white" 
              : "bg-red-500/70 text-white"
          )}>
            <div className="flex items-center space-x-1">
              {isCheaperOnline ? (
                <>
                  <ArrowDown className="w-3 h-3" />
                  <span>Save {savingsPercentage}%</span>
                </>
              ) : (
                <>
                  <ArrowUp className="w-3 h-3" />
                  <span>+{Math.abs(savingsPercentage)}%</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg line-clamp-2 mb-2">{product.name}</h3>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Best Price</p>
            <p className="text-xl font-semibold">{formattedLowestPrice}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">In Store</p>
            <p className={cn(
              "text-base",
              isCheaperOnline ? "line-through text-muted-foreground" : "font-semibold"
            )}>
              ₹{product.storePrice}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
