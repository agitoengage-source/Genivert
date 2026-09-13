import React from 'react';

interface SolarisLogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  showTagline?: boolean;
}

export const SolarisLogo: React.FC<SolarisLogoProps> = ({
  className = "h-12",
  showText = true,
  size = 'md',
  variant = 'dark',
  showTagline = false
}) => {
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official AD IMPERIUM SOLARIS Sun + Roof Emblem */}
      <div className={`relative shrink-0 ${size === 'lg' ? 'w-16 h-16' : size === 'sm' ? 'w-9 h-9' : 'w-12 h-12'}`}>
        <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-md">
          <defs>
            <radialGradient id="solarisSunGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FCD34D" />
              <stop offset="60%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </radialGradient>
            <linearGradient id="solarisRoofGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#991B1B" />
              <stop offset="100%" stopColor="#7F1D1D" />
            </linearGradient>
            <linearGradient id="solarisPanelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
          </defs>

          {/* Radiating Sun Rays */}
          <g fill="#F59E0B">
            <polygon points="80,4 84,24 76,24" />
            <polygon points="106,14 102,32 96,28" />
            <polygon points="128,32 118,48 112,42" />
            <polygon points="144,58 128,68 126,60" />
            <polygon points="152,88 132,92 132,84" />
            
            <polygon points="54,14 58,32 64,28" />
            <polygon points="32,32 42,48 48,42" />
            <polygon points="16,58 32,68 34,60" />
            <polygon points="8,88 28,92 28,84" />
          </g>

          {/* Sun Circle */}
          <circle cx="80" cy="75" r="42" fill="url(#solarisSunGrad)" />

          {/* Red/Burgundy Triangular 'A' Roof Structure */}
          <path
            d="M 80,24 L 116,92 L 100,92 L 80,50 L 60,92 L 44,92 Z"
            fill="url(#solarisRoofGrad)"
            stroke="#7F1D1D"
            strokeWidth="1.5"
          />

          {/* Window in A-frame */}
          <g fill="#FFFFFF">
            <rect x="73" y="70" width="6" height="6" rx="0.5" />
            <rect x="81" y="70" width="6" height="6" rx="0.5" />
            <rect x="73" y="78" width="6" height="6" rx="0.5" />
            <rect x="81" y="78" width="6" height="6" rx="0.5" />
          </g>

          {/* Horizon Arc Separator */}
          <path
            d="M 12,96 Q 80,78 148,96"
            fill="none"
            stroke="#78350F"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Solar Panel Array Grid in Perspective */}
          <polygon points="28,102 132,102 116,134 44,134" fill="url(#solarisPanelGrad)" stroke="#D97706" strokeWidth="1.5" />
          {/* Grid lines */}
          <line x1="80" y1="102" x2="80" y2="134" stroke="#D97706" strokeWidth="1.5" />
          <line x1="54" y1="102" x2="60" y2="134" stroke="#D97706" strokeWidth="1" />
          <line x1="106" y1="102" x2="100" y2="134" stroke="#D97706" strokeWidth="1" />
          <line x1="36" y1="118" x2="124" y2="118" stroke="#D97706" strokeWidth="1" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-serif font-black tracking-widest leading-none ${size === 'lg' ? 'text-2xl' : 'text-lg'} ${isLight ? 'text-amber-100' : 'text-slate-900 dark:text-white'}`}>
            AD IMPERIUM
          </span>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="w-3 h-0.5 bg-amber-500 rounded" />
            <span className="font-serif font-extrabold text-amber-600 dark:text-amber-400 text-sm tracking-widest uppercase">
              SOLARIS
            </span>
            <span className="w-3 h-0.5 bg-amber-500 rounded" />
          </div>
          {showTagline && (
            <span className="text-[9px] text-slate-500 dark:text-slate-400 font-semibold tracking-tight uppercase mt-1">
              Harnessing Uganda’s Sunshine • Powering Tomorrow’s Institutions
            </span>
          )}
        </div>
      )}
    </div>
  );
};

