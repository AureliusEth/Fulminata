"use client"

export function AnimatedSolanaLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer glow layer */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "300%",
          height: "300%",
          left: "-100%",
          top: "-100%",
        }}
      >
        <div
          className="w-full h-full"
          style={{
            background: "radial-gradient(circle, rgba(153, 69, 255, 0.4) 0%, rgba(20, 241, 149, 0.15) 35%, transparent 60%)",
            animation: "solanaGlowPulseOuter 4s ease-in-out infinite",
          }}
        />
      </div>

      {/* Middle glow layer */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "220%",
          height: "220%",
          left: "-60%",
          top: "-60%",
        }}
      >
        <div
          className="w-full h-full"
          style={{
            background: "radial-gradient(circle, rgba(20, 241, 149, 0.45) 0%, rgba(153, 69, 255, 0.25) 40%, transparent 65%)",
            animation: "solanaGlowPulseMiddle 3s ease-in-out infinite",
            animationDelay: "150ms",
          }}
        />
      </div>

      {/* Inner glow layer */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "160%",
          height: "160%",
          left: "-30%",
          top: "-30%",
        }}
      >
        <div
          className="w-full h-full"
          style={{
            background: "radial-gradient(circle, rgba(153, 69, 255, 0.5) 0%, rgba(20, 241, 149, 0.3) 45%, transparent 70%)",
            animation: "solanaGlowPulseInner 2.5s ease-in-out infinite",
            animationDelay: "300ms",
          }}
        />
      </div>

      {/* Solana Logo SVG with glow filter */}
      <svg
        viewBox="0 0 397.7 311.7"
        className="relative z-10 w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="solanaGrad1" gradientUnits="userSpaceOnUse" x1="360.8791" y1="351.4553" x2="141.213" y2="-69.2936" gradientTransform="matrix(1 0 0 -1 0 314)">
            <stop offset="0" stopColor="#00FFA3"/>
            <stop offset="1" stopColor="#DC1FFF"/>
          </linearGradient>
          <linearGradient id="solanaGrad2" gradientUnits="userSpaceOnUse" x1="264.8291" y1="401.6014" x2="45.163" y2="-19.1475" gradientTransform="matrix(1 0 0 -1 0 314)">
            <stop offset="0" stopColor="#00FFA3"/>
            <stop offset="1" stopColor="#DC1FFF"/>
          </linearGradient>
          <linearGradient id="solanaGrad3" gradientUnits="userSpaceOnUse" x1="312.5484" y1="376.688" x2="92.8822" y2="-44.061" gradientTransform="matrix(1 0 0 -1 0 314)">
            <stop offset="0" stopColor="#00FFA3"/>
            <stop offset="1" stopColor="#DC1FFF"/>
          </linearGradient>
          <filter id="solanaGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Bottom bar */}
        <path 
          d="M64.6,237.9c2.4-2.4,5.7-3.8,9.2-3.8h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5c-5.8,0-8.7-7-4.6-11.1L64.6,237.9z" 
          fill="url(#solanaGrad1)" 
          filter="url(#solanaGlow)"
        />
        {/* Top bar */}
        <path 
          d="M64.6,3.8C67.1,1.4,70.4,0,73.8,0h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5c-5.8,0-8.7-7-4.6-11.1L64.6,3.8z" 
          fill="url(#solanaGrad2)" 
          filter="url(#solanaGlow)"
        />
        {/* Middle bar */}
        <path 
          d="M333.1,120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8,0-8.7,7-4.6,11.1l62.7,62.7c2.4,2.4,5.7,3.8,9.2,3.8h317.4c5.8,0,8.7-7,4.6-11.1L333.1,120.1z" 
          fill="url(#solanaGrad3)" 
          filter="url(#solanaGlow)"
        />
      </svg>
    </div>
  )
}
