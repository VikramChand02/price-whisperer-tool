
import { useState } from 'react';
import { Search, Shirt, Shoe, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="w-full relative">
      <div className="relative flex items-center">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder="Search Products"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-24 py-2 w-full h-10 bg-white/80 backdrop-blur-sm border-none rounded-full text-sm focus-visible:ring-1"
        />
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
          <button className="p-1.5 rounded-full bg-white/50 hover:bg-white/80 transition-colors">
            <Shirt className="h-3.5 w-3.5 text-primary" />
          </button>
          <button className="p-1.5 rounded-full bg-white/50 hover:bg-white/80 transition-colors">
            <Shoe className="h-3.5 w-3.5 text-primary" />
          </button>
          <button className="p-1.5 rounded-full bg-white/50 hover:bg-white/80 transition-colors">
            <Filter className="h-3.5 w-3.5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
