"use client"

export function AnimatedLightning() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <style jsx>{`
        @keyframes glowPulseOuter {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(0.3);
            opacity: 0.05;
          }
        }
        @keyframes glowPulseMiddle {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(0.25);
            opacity: 0.08;
          }
        }
        @keyframes glowPulseInner {
          0%, 100% {
            transform: scale(1);
            opacity: 0.35;
          }
          50% {
            transform: scale(0.2);
            opacity: 0.1;
          }
        }
      `}</style>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[500px] h-[500px]"
          style={{
            background: "radial-gradient(circle, oklch(0.75 0.12 75) 0%, transparent 70%)",
            animation: "glowPulseOuter 4s ease-in-out infinite",
          }}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[350px] h-[350px]"
          style={{
            background: "radial-gradient(circle, oklch(0.80 0.14 80) 0%, transparent 60%)",
            animation: "glowPulseMiddle 3s ease-in-out infinite",
            animationDelay: "150ms",
          }}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[200px] h-[200px]"
          style={{
            background: "radial-gradient(circle, oklch(0.85 0.13 82) 0%, transparent 50%)",
            animation: "glowPulseInner 2.5s ease-in-out infinite",
            animationDelay: "300ms",
          }}
        />
      </div>

      <svg
        viewBox="0 0 24 24"
        className="relative z-10 w-48 md:w-64 lg:w-80 h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="boltGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.95 0.15 85)" />
            <stop offset="50%" stopColor="oklch(0.80 0.14 80)" />
            <stop offset="100%" stopColor="oklch(0.65 0.12 75)" />
          </linearGradient>
          <filter id="boltGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur2" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur3" />
            <feMerge>
              <feMergeNode in="blur3" />
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="outerGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="glow" />
            <feColorMatrix
              in="glow"
              type="matrix"
              values="1 0 0 0 0.2
                      0 1 0 0 0.15
                      0 0 1 0 0
                      0 0 0 1 0"
            />
          </filter>
        </defs>

        <path
          d="M13 3L4 14h7v7l9-11h-7V3z"
          fill="oklch(0.75 0.12 75)"
          filter="url(#outerGlow)"
          className="animate-pulse"
          style={{ animationDuration: "3s" }}
        />

        <path d="M13 3L4 14h7v7l9-11h-7V3z" fill="url(#boltGradient)" filter="url(#boltGlow)" />

        <path
          d="M13 3L4 14h7v7l9-11h-7V3z"
          fill="oklch(0.98 0.08 85)"
          fillOpacity="0.4"
          transform="translate(0.3, 0.3) scale(0.95)"
          style={{ transformOrigin: "center" }}
        />
      </svg>

      {/* Subtle ambient particles */}
      <div
        className="absolute top-1/4 left-1/3 w-1 h-1 bg-primary/60 rounded-full animate-pulse"
        style={{ animationDuration: "2s" }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-primary/40 rounded-full animate-pulse"
        style={{ animationDuration: "2.5s", animationDelay: "500ms" }}
      />
    </div>
  )
}
