
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  onBackClick?: () => void;
}

const Header = ({ title, showBackButton = false, onBackClick }: HeaderProps) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-morphism py-4 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {showBackButton && (
            <button 
              onClick={handleBackClick}
              className="mr-3 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 animate-hover"
              aria-label="Go back"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          )}
          <h1 className="text-xl font-medium">{title}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
