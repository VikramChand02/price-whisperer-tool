
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import ScanButton from '@/components/ScanButton';
import { products } from '@/utils/mockData';
import { Clock, BarChart } from 'lucide-react';

const Index = () => {
  const [recentProducts, setRecentProducts] = useState(products);
  
  useEffect(() => {
    // Simulate loading with a slight delay for animation
    const timer = setTimeout(() => {
      setRecentProducts(products);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title="AI Price Checker" />
      
      <main className="container pt-20 px-4">
        <div className="glass-morphism rounded-xl p-5 mb-8 animate-entrance">
          <h2 className="text-lg font-medium mb-1">Welcome to AI Price Checker</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Use the scan button to check prices by taking a photo, scanning a barcode, or searching.
          </p>
          <div className="flex space-x-3">
            <Link to="/scan" className="py-2 px-4 bg-primary text-white rounded-lg text-sm font-medium flex-1 text-center animate-hover hover:bg-primary/90">
              Start Scanning
            </Link>
            <Link to="/history" className="py-2 px-4 border border-border rounded-lg text-sm font-medium flex items-center justify-center animate-hover hover:bg-gray-50 dark:hover:bg-gray-900">
              <Clock className="w-4 h-4 mr-1" />
              History
            </Link>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Recent Price Checks</h2>
            <Link to="/history" className="text-sm text-primary animate-hover hover:text-primary/80">
              See all
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recentProducts.slice(0, 4).map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                animate={true}
                className="animate-entrance"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Price Trends</h2>
            <div className="text-sm text-primary flex items-center">
              <BarChart className="w-4 h-4 mr-1" />
              View Charts
            </div>
          </div>
          <div className="glass-morphism rounded-xl p-5 animate-entrance">
            <p className="text-center text-muted-foreground">
              Track price changes for your favorite products over time
            </p>
            {/* This would be a chart in the full implementation */}
          </div>
        </div>
      </main>

      <ScanButton />
    </div>
  );
};

export default Index;
