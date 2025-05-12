import React from 'react';
import { Zap } from 'lucide-react';

interface LogoProps {
  isFooter?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isFooter = false }) => {
  return (
    <div className="flex items-center">
      <Zap 
        size={28} 
        className={`${isFooter ? 'text-white' : 'text-secondary-500'} mr-2`} 
      />
      <span 
        className={`font-bold text-xl ${isFooter ? 'text-white' : 'text-primary-600'}`}
      >
        VTech<span className="text-secondary-500">Fusion</span>
      </span>
    </div>
  );
};

export default Logo;