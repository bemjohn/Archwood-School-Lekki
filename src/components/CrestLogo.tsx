import React from 'react';

interface CrestLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'gold';
  showText?: boolean;
}

/**
 * Official ARCHWOOD SCHOOL Logo:
 * - Circular emblem with crimson-red borders
 * - Outer band: "ARCHWOOD SCHOOL" (top arc) with dual stars (★) and "I CAN DO ALL THINGS" (bottom arc)
 * - Inner core: Split duo figures (Navy Blue on left, Golden Yellow on right)
 *   with smiling faces and raised hands uniting into a central triumphant spire
 */
export const ArchwoodOfficialEmblem: React.FC<{ sizeClass?: string; className?: string }> = ({
  sizeClass = 'w-12 h-12',
  className = '',
}) => {
  return (
    <div className={`relative ${sizeClass} shrink-0 drop-shadow-sm select-none ${className}`}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Top text arc (reads clockwise from left to right) */}
          <path
            id="archwood-top-path"
            d="M 24,100 A 76,76 0 1,1 176,100"
            fill="none"
          />
          {/* Bottom text arc (reads clockwise along bottom curve) */}
          <path
            id="archwood-bottom-path"
            d="M 176,100 A 76,76 0 0,1 24,100"
            fill="none"
          />
        </defs>

        {/* Outer Crimson Ring & White Ring Background */}
        <circle cx="100" cy="100" r="97" fill="#FFFFFF" stroke="#8E0A1E" strokeWidth="4.5" />
        <circle cx="100" cy="100" r="94.5" fill="none" stroke="#2B050B" strokeWidth="0.8" opacity="0.4" />

        {/* Inner Crimson Ring Container */}
        <circle cx="100" cy="100" r="66" fill="#FFFFFF" stroke="#8E0A1E" strokeWidth="3" />

        {/* Top Arc Text: ARCHWOOD SCHOOL */}
        <text className="font-sans font-black" fill="#0A1647" style={{ letterSpacing: '2.8px' }}>
          <textPath
            href="#archwood-top-path"
            startOffset="50%"
            textAnchor="middle"
            fontSize="15.5"
            fontWeight="900"
          >
            ARCHWOOD SCHOOL
          </textPath>
        </text>

        {/* Left Star (Navy) */}
        <g transform="translate(18, 101) scale(0.95)">
          <polygon
            points="0,-6.5 2,-2 6.5,-1.5 3.2,2 4.2,6.5 0,4.2 -4.2,6.5 -3.2,2 -6.5,-1.5 -2,-2"
            fill="#0A1647"
          />
        </g>

        {/* Right Star (Navy) */}
        <g transform="translate(182, 101) scale(0.95)">
          <polygon
            points="0,-6.5 2,-2 6.5,-1.5 3.2,2 4.2,6.5 0,4.2 -4.2,6.5 -3.2,2 -6.5,-1.5 -2,-2"
            fill="#0A1647"
          />
        </g>

        {/* Bottom Arc Text: I CAN DO ALL THINGS */}
        <text className="font-sans font-black" fill="#0A1647" style={{ letterSpacing: '2.2px' }}>
          <textPath
            href="#archwood-bottom-path"
            startOffset="50%"
            textAnchor="middle"
            fontSize="13"
            fontWeight="900"
          >
            I CAN DO ALL THINGS
          </textPath>
        </text>

        {/* Clip inside inner circle for the dual figures */}
        <g clipPath="url(#inner-clip)">
          <clipPath id="inner-clip">
            <circle cx="100" cy="100" r="64.5" />
          </clipPath>

          {/* Left Navy Blue Child / Figure */}
          <path
            d="M 100,38 
               C 99,48 95,78 82,90 
               C 74,97 64,98 56,92 
               C 47,85 43,72 44,82 
               C 45,95 56,114 68,128 
               C 76,138 88,155 100,165 
               L 100,38 Z"
            fill="#0A1647"
          />

          {/* Right Golden Yellow Child / Figure */}
          <path
            d="M 100,38 
               C 101,48 105,78 118,90 
               C 126,97 136,98 144,92 
               C 153,85 157,72 156,82 
               C 155,95 144,114 132,128 
               C 124,138 112,155 100,165 
               L 100,38 Z"
            fill="#F7BE16"
          />

          {/* Left Figure Head (Navy Blue circle with joyful smiling face) */}
          <circle cx="72" cy="79" r="12.5" fill="#0A1647" />
          {/* Eyes (Left Head) */}
          <ellipse cx="68" cy="76" rx="1.6" ry="2.2" fill="#FFFFFF" transform="rotate(-10 68 76)" />
          <ellipse cx="76" cy="76" rx="1.6" ry="2.2" fill="#FFFFFF" transform="rotate(10 76 76)" />
          {/* Happy Smile Mouth (Left Head) */}
          <path
            d="M 66,80 Q 72,87 78,80 C 78,84 72,88 66,80 Z"
            fill="#FFFFFF"
          />

          {/* Right Figure Head (Golden Yellow circle with joyful smiling face) */}
          <circle cx="128" cy="79" r="12.5" fill="#F7BE16" />
          {/* Eyes (Right Head) */}
          <ellipse cx="124" cy="76" rx="1.6" ry="2.2" fill="#FFFFFF" transform="rotate(-10 124 76)" />
          <ellipse cx="132" cy="76" rx="1.6" ry="2.2" fill="#FFFFFF" transform="rotate(10 132 76)" />
          {/* Happy Smile Mouth (Right Head) */}
          <path
            d="M 122,80 Q 128,87 134,80 C 134,84 128,88 122,80 Z"
            fill="#FFFFFF"
          />
        </g>
      </svg>
    </div>
  );
};

export const CrestLogo: React.FC<CrestLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'light',
  showText = true,
}) => {
  const iconSize =
    size === 'xs'
      ? 'w-7 h-7'
      : size === 'sm'
      ? 'w-10 h-10'
      : size === 'lg'
      ? 'w-16 h-16'
      : size === 'xl'
      ? 'w-20 h-20'
      : 'w-12 h-12';

  const textColor =
    variant === 'light'
      ? 'text-white'
      : variant === 'gold'
      ? 'text-amber-300'
      : 'text-[#30050B]';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Real Circular Logo Badge */}
      <ArchwoodOfficialEmblem sizeClass={iconSize} />

      {/* Brand Typography Lockup */}
      {showText && (
        <div className="flex flex-col">
          <div
            className={`font-crest font-black tracking-wider leading-none ${
              size === 'lg' || size === 'xl'
                ? 'text-2xl'
                : size === 'sm' || size === 'xs'
                ? 'text-base'
                : 'text-lg'
            } ${textColor}`}
          >
            ARCHWOOD
          </div>
          <div
            className={`text-[9.5px] tracking-[0.24em] font-bold uppercase ${
              variant === 'dark' ? 'text-neutral-600' : 'text-amber-300'
            }`}
          >
            SCHOOL LEKKI
          </div>
          <div
            className={`text-[8px] tracking-[0.16em] font-semibold italic mt-0.5 ${
              variant === 'dark' ? 'text-red-800' : 'text-neutral-300'
            }`}
          >
            "I Can Do All Things"
          </div>
        </div>
      )}
    </div>
  );
};
