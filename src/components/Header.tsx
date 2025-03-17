
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bell, Settings } from 'lucide-react';
import SearchBar from './SearchBar';
import { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  showSearch?: boolean;
  onBackClick?: () => void;
}

const Header = ({ title, showBackButton = false, showSearch = false, onBackClick }: HeaderProps) => {
  const navigate = useNavigate();
  const [showSettings, setShowSettings] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [aiRecommendationsEnabled, setAiRecommendationsEnabled] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(-1);
    }
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-2 rounded-full hover:bg-gray-100/50 animate-hover">
                  <Bell className="h-5 w-5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-72 p-3 bg-white/90 backdrop-blur-lg">
                <div className="mb-3">
                  <h3 className="font-medium text-primary mb-2">Alerts & Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Notifications</p>
                        <p className="text-xs text-muted-foreground">Alerts for price drops, deals, and features</p>
                      </div>
                      <Switch 
                        checked={notificationsEnabled} 
                        onCheckedChange={setNotificationsEnabled}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">AI Recommendations</p>
                        <p className="text-xs text-muted-foreground">Smart suggestions based on search history</p>
                      </div>
                      <Switch 
                        checked={aiRecommendationsEnabled} 
                        onCheckedChange={setAiRecommendationsEnabled}
                      />
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <button 
              className="p-2 rounded-full hover:bg-gray-100/50 animate-hover"
              onClick={toggleSettings}
            >
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>
        {showSearch && <SearchBar />}
        
        {showSettings && (
          <div className="absolute right-4 mt-2 w-72 bg-white/90 backdrop-blur-lg rounded-lg shadow-lg py-2 z-50 animate-fade-in">
            <div className="px-4 py-2 border-b border-gray-100">
              <h3 className="font-medium text-primary">Interface & Preferences</h3>
              <div className="mt-2 space-y-2">
                <button className="w-full text-left py-1.5 px-2 rounded-md hover:bg-gray-100/70 text-sm flex items-center justify-between">
                  <span>Language & Region</span>
                  <span className="text-xs text-muted-foreground">English (US)</span>
                </button>
                <button className="w-full text-left py-1.5 px-2 rounded-md hover:bg-gray-100/70 text-sm flex items-center justify-between">
                  <span>Theme Mode</span>
                  <span className="text-xs text-muted-foreground">Light Mode</span>
                </button>
              </div>
            </div>
            
            <div className="px-4 py-2">
              <h3 className="font-medium text-primary">Help & Support</h3>
              <div className="mt-2 space-y-2">
                <button className="w-full text-left py-1.5 px-2 rounded-md hover:bg-gray-100/70 text-sm">
                  Contact Support
                </button>
                <button className="w-full text-left py-1.5 px-2 rounded-md hover:bg-gray-100/70 text-sm">
                  Report an Issue
                </button>
                <button className="w-full text-left py-1.5 px-2 rounded-md hover:bg-gray-100/70 text-sm">
                  Terms & Conditions
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
