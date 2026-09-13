import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  textClassName?: string;
  variant?: 'light' | 'dark';
}

export const GenivertLogo: React.FC<LogoProps> = ({
  className = "h-10 w-10",
  showText = true,
  textClassName = "text-xl",
  variant = 'dark'
}) => {
  const isLight = variant === 'light';

  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      {/* Blue Gear Emblem matching official logo */}
      <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
          {/* Blue Gear Outer Circle with 8 Teeth */}
          <path
            d="M 100 20 
               C 107 20 110 28 116 30 
               C 126 27 132 23 140 30 
               C 147 37 143 43 140 53 
               C 142 59 150 62 150 69 
               C 150 76 142 79 140 85 
               C 143 95 147 101 140 108 
               C 132 115 126 111 116 108 
               C 110 110 107 118 100 118 
               C 93 118 90 110 84 108 
               C 74 111 68 115 60 108 
               C 53 101 57 95 60 85 
               C 58 79 50 76 50 69 
               C 50 62 58 59 60 53 
               C 57 43 53 37 60 30 
               C 68 23 74 27 84 30 
               C 90 28 93 20 100 20 Z"
            fill="#1d4ed8"
            transform="scale(1.3) translate(-23, -15)"
          />

          {/* Clean 8-tooth gear path */}
          <g fill="#1E40AF">
            {/* Base Gear Disk */}
            <circle cx="100" cy="100" r="75" />
            {/* Gear Teeth */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
              <rect
                key={idx}
                x="84"
                y="10"
                width="32"
                height="24"
                rx="4"
                transform={`rotate(${angle} 100 100)`}
              />
            ))}
            {/* White Center Circle */}
            <circle cx="100" cy="100" r="54" fill="#FFFFFF" />
            {/* Blue bold 'G' */}
            <text
              x="100"
              y="126"
              fontFamily="System-UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              fontWeight="900"
              fontSize="78"
              fill="#1E40AF"
              textAnchor="middle"
            >
              G
            </text>
          </g>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-black tracking-tight leading-none ${textClassName} ${isLight ? 'text-white' : 'text-slate-900'}`}>
            GENIVERT
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[10px] font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">
              SYSTEMS LTD
            </span>
            <span className="text-[9px] px-1 py-0.2 bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 font-semibold rounded">
              UG
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

