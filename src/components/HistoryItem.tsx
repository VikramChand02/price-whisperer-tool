
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface HistoryItemProps {
  item: {
    id: string;
    name: string;
    image: string;
    date: string;
    lowestPrice: number;
  };
  index: number;
}

const HistoryItem = ({ item, index }: HistoryItemProps) => {
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(item.lowestPrice);

  const formattedDate = new Date(item.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

  return (
    <Link 
      to={`/product/${item.id}`} 
      className="glass-morphism rounded-xl overflow-hidden flex items-center animate-hover transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md"
      style={{ 
        animationDelay: `${index * 50}ms`,
        opacity: 0,
        animation: 'fade-in 0.3s ease-out forwards',
        animationDelay: `${index * 50}ms`
      }}
    >
      <div className="w-20 h-20 relative">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 p-3">
        <p className="font-medium line-clamp-1">{item.name}</p>
        <p className="text-sm text-muted-foreground mt-1">{formattedDate}</p>
      </div>
      <div className="p-3">
        <p className="font-semibold">{formattedPrice}</p>
      </div>
    </Link>
  );
};

export default HistoryItem;
