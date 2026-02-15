
import React, { useState } from 'react';
import { Screen } from './types';
import LandingPage from './screens/LandingPage';
import Marketplace from './screens/Marketplace';
import MarketPrices from './screens/MarketPrices';
import AIAssistant from './screens/AIAssistant';
import Tools from './screens/Tools';
import Support from './screens/Support';
import Profile from './screens/Profile';

const App: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<Screen>(Screen.HOME);

  const renderScreen = () => {
    switch (activeScreen) {
      case Screen.HOME:
        return <LandingPage onStart={() => setActiveScreen(Screen.MARKET)} />;
      case Screen.MARKET:
        return <Marketplace />;
      case Screen.TRENDS:
        return <MarketPrices />;
      case Screen.AI_ASSISTANT:
        return <AIAssistant />;
      case Screen.TOOLS:
        return <Tools onLaunchAI={() => setActiveScreen(Screen.AI_ASSISTANT)} />;
      case Screen.SUPPORT:
        return <Support />;
      case Screen.PROFILE:
        return <Profile />;
      default:
        return <LandingPage onStart={() => setActiveScreen(Screen.MARKET)} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-white dark:bg-background-dark shadow-2xl relative overflow-x-hidden">
      <div className="flex-1 pb-24">
        {renderScreen()}
      </div>

      {/* Global Bottom Nav */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 px-4 pb-6 pt-3 flex justify-between items-center z-50">
        <NavItem 
          icon="home" 
          label="Home" 
          isActive={activeScreen === Screen.HOME} 
          onClick={() => setActiveScreen(Screen.HOME)} 
        />
        <NavItem 
          icon="storefront" 
          label="Market" 
          isActive={activeScreen === Screen.MARKET} 
          onClick={() => setActiveScreen(Screen.MARKET)} 
        />
        <NavItem 
          icon="smart_toy" 
          label="AI Chat" 
          isActive={activeScreen === Screen.AI_ASSISTANT} 
          onClick={() => setActiveScreen(Screen.AI_ASSISTANT)} 
        />
        <NavItem 
          icon="grid_view" 
          label="Tools" 
          isActive={activeScreen === Screen.TOOLS} 
          onClick={() => setActiveScreen(Screen.TOOLS)} 
        />
        <NavItem 
          icon="person" 
          label="Profile" 
          isActive={activeScreen === Screen.PROFILE || activeScreen === Screen.SUPPORT} 
          onClick={() => setActiveScreen(Screen.PROFILE)} 
        />
      </nav>
    </div>
  );
};

interface NavItemProps {
  icon: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center gap-1 flex-1 transition-colors ${isActive ? 'text-primary' : 'text-slate-400'}`}
  >
    <span className={`material-symbols-outlined ${isActive ? 'filled' : ''}`}>{icon}</span>
    <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
  </button>
);

export default App;
