export default function ComingSoon() {
  return (
    <main className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#F4EFE6] text-[#1C1C1A] selection:bg-[#848A69] selection:text-white">
      {/* ================= BACKGROUND BOTANICAL ARTWORK - LEFT ================= */}
      <div 
        className="absolute left-0 top-0 w-[480px] lg:w-[560px] h-full pointer-events-none z-0 overflow-hidden" 
        aria-hidden="true"
      >
        <svg 
          viewBox="0 0 500 800" 
          fill="none" 
          className="w-full h-full text-[#8C9370]"
          preserveAspectRatio="xMinYMin slice"
        >
          <defs>
            <linearGradient id="leafGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A8B08A" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#8C9370" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#6C7252" stopOpacity="0.25" />
            </linearGradient>
          </defs>

          {/* Central circle / head element */}
          <circle cx="118" cy="245" r="32" fill="url(#leafGradLeft)" />

          {/* Left sweeping leaf blade */}
          <path 
            d="M -40 380 C -5 230 40 160 115 170 C 50 260 0 350 -40 380 Z" 
            fill="url(#leafGradLeft)" 
          />

          {/* Right sweeping leaf blade / figure body */}
          <path 
            d="M -120 720 C -40 450 60 250 260 165 C 170 320 80 500 -120 720 Z" 
            fill="url(#leafGradLeft)" 
          />

          {/* Additional decorative leaf overlay curves */}
          <path 
            d="M -80 650 C 0 420 100 280 240 180" 
            stroke="#7C8360" 
            strokeWidth="1.2" 
            strokeOpacity="0.3"
          />
        </svg>
      </div>

      {/* ================= BACKGROUND BOTANICAL ARTWORK - RIGHT ================= */}
      <div 
        className="absolute right-0 bottom-0 w-[520px] lg:w-[650px] h-[650px] pointer-events-none z-0 overflow-hidden" 
        aria-hidden="true"
      >
        <svg 
          viewBox="0 0 600 600" 
          fill="none" 
          className="w-full h-full text-[#8C9370]"
          preserveAspectRatio="xMaxYMax meet"
        >
          <defs>
            <linearGradient id="leafGradRight" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#4A5237" stopOpacity="0.55" />
              <stop offset="40%" stopColor="#767E5A" stopOpacity="0.4" />
              <stop offset="80%" stopColor="#9CA47D" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#C4CCAA" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Fine swooping grace lines */}
          <path 
            d="M 600 0 C 400 150 200 350 0 600" 
            stroke="#2C321E" 
            strokeWidth="1" 
            strokeOpacity="0.6"
          />
          <path 
            d="M 600 120 C 450 250 280 420 80 600" 
            stroke="#2C321E" 
            strokeWidth="0.75" 
            strokeOpacity="0.4"
          />

          {/* Lush botanical leaf cluster at bottom right */}
          <path 
            d="M 600 280 C 500 380 400 500 360 600 C 480 580 560 480 600 280 Z" 
            fill="url(#leafGradRight)" 
          />
          <path 
            d="M 520 440 C 420 480 300 520 220 600 C 350 600 450 560 520 440 Z" 
            fill="url(#leafGradRight)" 
          />
          <path 
            d="M 600 420 C 540 450 480 520 440 600 C 540 600 580 540 600 420 Z" 
            fill="url(#leafGradRight)" 
          />

          {/* Leaf rib veins */}
          <path 
            d="M 600 280 Q 480 440 360 600" 
            stroke="#384025" 
            strokeWidth="0.8" 
            strokeOpacity="0.4" 
          />
          <path 
            d="M 520 440 Q 370 510 220 600" 
            stroke="#384025" 
            strokeWidth="0.8" 
            strokeOpacity="0.4" 
          />
        </svg>
      </div>

      {/* ================= HEADER ================= */}
      <header className="relative z-20 flex items-start justify-between px-8 md:px-16 lg:px-24 pt-10 pb-6">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-1.5">
            <span className="font-serif text-[42px] md:text-[46px] leading-none font-medium tracking-tight text-[#1A1A1A]">
              Zy<span className="relative inline-block">r<span className="absolute -top-1 right-0 text-[18px] text-[#787E5C]"></span></span>a
            </span>
          </div>
          <span className="text-[9px] md:text-[10px] font-medium tracking-[0.25em] text-[#6E6B62] uppercase mt-1">
            Powering Modern Social Work
          </span>
        </div>

        {/* Top Right Navigation */}
        <nav className="flex items-center gap-8 pt-2">
          <a 
            href="#home" 
            className="relative text-[13px] md:text-[14px] font-medium tracking-wide text-[#1A1A1A] pb-1"
          >
            Home
            <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-[#1A1A1A]" />
          </a>
          <a 
            href="#products" 
            className="text-[13px] md:text-[14px] font-normal tracking-wide text-[#3D3B35] hover:text-[#1A1A1A] transition-colors"
          >
            Products
          </a>
          <a 
            href="#contact" 
            className="text-[13px] md:text-[14px] font-normal tracking-wide text-[#3D3B35] hover:text-[#1A1A1A] transition-colors"
          >
            Contact Us
          </a>
        </nav>
      </header>

      {/* ================= MAIN HERO SECTION ================= */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 md:py-16 text-center">
        
        {/* Left Side Vertical Text Labels */}
        <div className="hidden lg:flex absolute left-16 md:left-20 bottom-24 flex-col items-start text-left space-y-1.5 pointer-events-none z-10">
          <span className="text-[10px] tracking-[0.28em] font-medium text-[#737066] uppercase">PEOPLE</span>
          <span className="text-[10px] tracking-[0.28em] font-medium text-[#737066] uppercase">PURPOSE</span>
          <span className="text-[10px] tracking-[0.28em] font-medium text-[#737066] uppercase">PROGRESS</span>
          <div className="w-8 h-[1px] bg-[#928F84] mt-2" />
        </div>

        {/* Right Side Vertical Text Labels */}
        <div className="hidden lg:flex absolute right-16 md:right-20 top-36 flex-col items-end text-right space-y-1.5 pointer-events-none z-10">
          <span className="text-[10px] tracking-[0.28em] font-medium text-[#737066] uppercase">COMMUNITIES</span>
          <span className="text-[10px] tracking-[0.28em] font-medium text-[#737066] uppercase">OPPORTUNITIES</span>
          <span className="text-[10px] tracking-[0.28em] font-medium text-[#737066] uppercase">BRIGHTER FUTURES</span>
          <div className="w-8 h-[1px] bg-[#928F84] mt-2" />
        </div>

        {/* Center Content Container */}
        <div className="w-full max-w-[760px] mx-auto flex flex-col items-center">
          
          {/* Top Tagline */}
          <span className="text-[10px] md:text-[11px] font-medium tracking-[0.32em] text-[#6E6B62] uppercase mb-4">
            A MORE COMPASSIONATE TOMORROW
          </span>

          {/* Top Divider Line */}
          <div className="w-12 h-[1px] bg-[#A29F94] mb-8 md:mb-10" />

          {/* Hero Main Heading */}
          <h1 className="font-serif text-[52px] sm:text-[68px] md:text-[80px] lg:text-[86px] leading-[1.05] font-normal tracking-[-0.01em] text-[#141414] mb-8">
            We’re Building<br />
            Something <span className="font-serif italic font-normal">Meaningful.</span>
          </h1>

          {/* Subtitle Body Paragraph */}
          <p className="text-[15px] sm:text-[16px] md:text-[17px] font-normal leading-[1.7] text-[#555248] max-w-[560px] mx-auto mb-10 md:mb-12">
            Zyra is currently under development. We’re working behind the scenes to build a better way to power modern social work.
          </p>

          {/* Bottom Launching Tag */}
          <span className="text-[10px] md:text-[11px] font-medium tracking-[0.32em] text-[#6E6B62] uppercase mb-4">
            LAUNCHING SOON.
          </span>

          {/* Bottom Divider Line */}
          <div className="w-12 h-[1px] bg-[#A29F94]" />
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="relative z-20 px-6 pb-8 pt-4 text-center">
        <p className="text-[11px] font-medium tracking-[0.22em] text-[#7A776D] uppercase">
          ZYRA &copy; 2026
        </p>
      </footer>
    </main>
  );
}