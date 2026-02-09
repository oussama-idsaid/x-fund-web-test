import React, { useRef, useState, type MouseEvent } from 'react';

// --- Types ---
interface CardData {
  id: number;
  tag: string;
  title: React.ReactNode;
  mainValue: string;
  subValue: React.ReactNode;
  variant: 'left' | 'center' | 'right';
  footerContent: React.ReactNode;
  isGoldValue?: boolean; // Toggle for the shimmer effect
}

// --- Data Configuration ---
const cardsData: CardData[] = [
  {
    id: 1,
    tag: "Performance",
    title: <>Volume Global <br /> Sous Gestion</>,
    mainValue: "190",
    subValue: <>Millions <span className="text-amber-600 font-bold">€</span></>,
    variant: 'left',
    isGoldValue: true,
    footerContent: (
      <div className="flex justify-between items-end w-full">
        <div className="text-[10px] text-zinc-400 tracking-[0.3em] font-bold uppercase font-header">Archive FY25</div>
        <div className="text-amber-700 text-xs font-bold tracking-widest">+12.4%</div>
      </div>
    )
  },
  {
    id: 2,
    tag: "Asset Portfolio",
    title: <>Actifs Immobiliers <br /> Sélectionnés</>,
    mainValue: "200",
    subValue: <>Projets <span className="text-amber-600 font-bold">Elite</span></>,
    variant: 'center',
    footerContent: (
      <p className="text-[9px] text-zinc-400 leading-relaxed uppercase tracking-widest font-header">
        Rigueur analytique et sélection sélective d'actifs premiums.
      </p>
    )
  },
  {
    id: 3,
    tag: "Ecosystem",
    title: <>Communauté <br /> d'Investisseurs</>,
    mainValue: "600",
    subValue: <>+ Membres</>,
    variant: 'right',
    footerContent: (
      <div className="flex justify-between items-center w-full">
        <div className="flex -space-x-3">
          <div className="w-8 h-8 rounded-full bg-zinc-100 border-2 border-white shadow-sm"></div>
          <div className="w-8 h-8 rounded-full bg-zinc-200 border-2 border-white shadow-sm"></div>
          <div className="w-8 h-8 rounded-full bg-amber-600 border-2 border-white shadow-md flex items-center justify-center text-[9px] font-bold text-white">X</div>
        </div>
        <div className="text-[9px] text-zinc-400 font-bold tracking-[0.2em] uppercase font-header">User growth</div>
      </div>
    )
  }
];

// --- Sub-Component: Individual Card ---
const LuxuryCard = ({ data }: { data: CardData }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (divided by 20 to make it subtle like the original)
    const rotateX = (y - centerY) / 20; 
    const rotateY = (centerX - x) / 20;

    setRotation({ x: -rotateX, y: rotateY }); // Inverted X for natural feel
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  // Base transform styles based on initial variant positions
  const getBaseTransform = () => {
    switch (data.variant) {
      case 'left': return 'translateY(-40px) rotateZ(-1.5deg) rotateY(8deg)';
      case 'center': return 'translateY(80px) rotateZ(0.5deg)';
      case 'right': return 'translateY(0px) rotateZ(2deg) rotateY(-8deg)';
      default: return '';
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        relative flex flex-col justify-between min-h-137.5 p-14 rounded-[3rem]
        transition-all duration-700 ease-[cubic-bezier(0.2,1,0.3,1)]
        border border-[rgba(179,142,77,0.15)]
        backdrop-blur-[10px] cursor-pointer
        bg-white/70 hover:bg-white hover:border-[#b38e4d] hover:shadow-[0_50px_100px_-20px_rgba(179,142,77,0.2)] hover:z-50
      `}
      style={{
        transformStyle: 'preserve-3d',
        transform: isHovering 
          ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.04)`
          : getBaseTransform()
      }}
    >
      {/* Header Content */}
      <div className="header-content pointer-events-none">
        <div className="inline-block mb-8 px-2.5 py-1 text-[9px] tracking-[0.3em] text-[#b38e4d] border border-[rgba(179,142,77,0.3)] bg-[rgba(179,142,77,0.05)] uppercase font-extrabold font-body">
          {data.tag}
        </div>
        <div className={`h-px bg-linear-to-r from-[#b38e4d] to-transparent mb-6 transition-all duration-500 ${isHovering ? 'w-25' : 'w-10'}`}></div>
        <h3 className="text-[9px] tracking-[0.5em] text-zinc-400 uppercase leading-relaxed font-header font-bold">
          {data.title}
        </h3>
      </div>

      {/* Body Content */}
      <div className="body-content space-y-4 pointer-events-none">
        <div className={`text-[7.5rem] font-extrabold leading-none tracking-tighter font-body ${
          data.isGoldValue 
            ? 'bg-linear-to-r from-[#8c6a2d] via-[#d4af37] to-[#8c6a2d] bg-size-[200%_auto] bg-clip-text text-transparent animate-shimmer' 
            : 'text-black'
        }`}>
          {data.mainValue}
          {data.id === 3 && <span className="text-amber-600 font-light">K</span>}
        </div>
        <div className="text-3xl font-light text-zinc-500 tracking-widest uppercase font-body">
          {data.subValue}
        </div>
      </div>

      {/* Footer Content */}
      <div className="footer-content pt-8 border-t border-black/5 pointer-events-none">
        {data.footerContent}
      </div>
    </div>
  );
};

// --- Main Container Component ---
const LuxuryCardsSection = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#fafaf9] overflow-hidden">
      
      {/* 1. Global Styles for Fonts (If not in index.html) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Plus+Jakarta+Sans:wght@200;300;400;500;700;800&display=swap');
        @keyframes shimmer { to { background-position: 200% center; } }
        .animate-shimmer { animation: shimmer 5s linear infinite; }
        .font-header { font-family: 'Syncopate', sans-serif; }
        .font-body { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      {/* 2. Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-99 opacity-[0.03] contrast-150 brightness-1000 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,#fff_0%,#f4f4f2_100%)]"></div>
      
      {/* Light Orbs */}
      <div className="absolute -top-50 -left-25 w-150 h-150 bg-[radial-gradient(circle,rgba(179,142,77,0.05)_0%,transparent_70%)] blur-[60px] z-0 pointer-events-none"></div>
      <div className="absolute -bottom-50 -right-25 w-150 h-150 bg-[radial-gradient(circle,rgba(179,142,77,0.05)_0%,transparent_70%)] blur-[60px] z-0 pointer-events-none"></div>

      {/* 3. Section Content */}
      <section className="relative z-10 px-6 py-20 pb-64">
        <div className="max-w-7xl mx-auto">
          {/* Grid Layout with Perspective */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-6"
            style={{ perspective: '2500px' }}
          >
            {cardsData.map((card) => (
              <LuxuryCard key={card.id} data={card} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer Example */}
      <footer className="relative z-10 p-10 border-t border-black/5 bg-white/30 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] tracking-[0.6em] font-header uppercase text-zinc-400">
          <div>X-FUND IVORY SERIES // 2026</div>
          <div className="text-center md:text-right">Agréé AMF — La clarté au service du patrimoine</div>
        </div>
      </footer>
    </div>
  );
};

export default LuxuryCardsSection;