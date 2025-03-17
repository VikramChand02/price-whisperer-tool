
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bell, Settings, User } from 'lucide-react';
import SearchBar from './SearchBar';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  showSearch?: boolean;
  onBackClick?: () => void;
}

const Header = ({ title, showBackButton = false, showSearch = false, onBackClick }: HeaderProps) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/30 py-4 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            {showBackButton && (
              <button 
                onClick={handleBackClick}
                className="mr-3 p-2 rounded-full hover:bg-gray-100/50 dark:hover:bg-gray-800/50 animate-hover"
                aria-label="Go back"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            )}
            {title && <h1 className="text-xl font-medium">{title}</h1>}
            {!title && !showBackButton && (
              <div className="text-lg font-bold text-primary flex items-center">
                <span className="bg-primary text-white rounded-full p-1 mr-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </span>
                PriceWhisperer
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full hover:bg-gray-100/50 animate-hover">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100/50 animate-hover">
              <Settings className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100/50 animate-hover">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
        {showSearch && <SearchBar />}
      </div>
    </header>
  );
};

export default Header;
