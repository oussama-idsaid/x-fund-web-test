
export const InvestmentCard = ({
  // Image 
  imageUrl = "https://cdn.home-designing.com/wp-content/uploads/2023/04/modern-houses.jpg",
  imageAlt = "Investment Property",
  statusColor = "green",
  
  // Property Details
  title = "Le Thegra",
  location = "Balma, France",
  rating = "A+",
  
  // Financial Data
  currentAmount = 332840,
  targetAmount = 555000,
  currency = "€",
  progressPercent = 60,
  
  // Investment Details
  investorsCount = 252,
  investorsLabel = "investisseurs",
  yieldPercent = 11.5,
  yieldPeriod = "an",
  duration = "18 mois",
  
  // Labels
  statusLabel = "En collecte",
  investButtonText = "Investir",
  yieldLabel = "Rendement",
  investorsText = "ont investi",
  
  // Callbacks
  onInvestClick = () => {},
  
  // Investor Avatars
  investorAvatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64"
  ]
}) => {
  // Format currency amounts
  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('fr-FR').format(amount);
  };

  // Status color mapping
  const statusColors = {
    green: {
      bg: 'bg-green-500',
      shadow: 'shadow-[0_0_8px_rgba(34,197,94,0.6)]'
    },
    yellow: {
      bg: 'bg-yellow-500',
      shadow: 'shadow-[0_0_8px_rgba(234,179,8,0.6)]'
    },
    red: {
      bg: 'bg-red-500',
      shadow: 'shadow-[0_0_8px_rgba(239,68,68,0.6)]'
    },
    blue: {
      bg: 'bg-blue-500',
      shadow: 'shadow-[0_0_8px_rgba(59,130,246,0.6)]'
    }
  } as const;

  const currentStatusColor = statusColors[statusColor as keyof typeof statusColors] || statusColors.green;

  return (
    <div 
      className="relative w-full h-full bg-[#111111] p-[5%] rounded-2xl border border-white/5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] group overflow-hidden font-sans text-[#E5E7EB] flex flex-col justify-between"
      style={{ containerType: 'inline-size' }}
    >
      
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-[#D4AF37]/5 blur-[60px] rounded-full pointer-events-none" />

      {/* --- Top Section: Image & Header --- */}
      <div>
        {/* Image Section */}
        <div className="relative w-full aspect-video mb-[5%] rounded-xl overflow-hidden shrink-0 border border-white/10 group-hover:border-[#D4AF37]/30 transition-colors duration-500">
          <img 
            src={imageUrl} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            alt={imageAlt} 
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#111111] via-transparent to-transparent opacity-60" />
          
          {/* Status Badge */}
          <div className="absolute top-[6%] left-[6%] bg-black/40 backdrop-blur-md px-[3%] py-[1.5%] rounded-full border border-white/20 flex items-center gap-[0.5em]">
            <span className={`w-[0.5em] h-[0.5em] rounded-full ${currentStatusColor.bg} ${currentStatusColor.shadow}`}></span>
            <span className="text-[clamp(0.5rem,2.5cqw,0.75rem)] font-semibold text-white tracking-wide uppercase">
              {statusLabel}
            </span>
          </div>
        </div>

        {/* Title & Location */}
        <div className="mb-[5%] relative z-10">
          <div className="flex justify-between items-start gap-2">
            <div className="flex flex-col min-w-0">
              <h2 className="text-[clamp(1rem,7cqw,1.75rem)] leading-tight font-bold text-white tracking-tight truncate">
                {title}
              </h2>
              <span className="text-[#9CA3AF] text-[clamp(0.7rem,3.5cqw,0.95rem)] mt-[1%] truncate">
                {location}
              </span>
            </div>
            {/* Rating Badge */}
            {rating && (
              <div className="bg-[#D4AF37]/10 px-[2.5%] py-[1%] rounded-md border border-[#D4AF37]/20 shrink-0">
                <span className="text-[#D4AF37] font-bold text-[clamp(0.65rem,3cqw,0.875rem)]">{rating}</span>
              </div>
            )}
          </div>
        </div>

        {/* Financials & Progress */}
        <div className="mb-[6%] relative z-10">
          <div className="flex flex-wrap justify-between items-end mb-[2%] gap-x-2 gap-y-1">
            {/* Left: Current Amount */}
            <span className="text-[clamp(1rem,6cqw,1.6rem)] font-bold text-white tracking-wide leading-none">
              {formatAmount(currentAmount)} {currency}
            </span>
            
            {/* Right: Target & Percent */}
            <div className="text-right flex items-baseline gap-2 ml-auto">
              <span className="text-[clamp(0.6rem,3cqw,0.8rem)] text-[#9CA3AF] whitespace-nowrap">
                / {formatAmount(targetAmount)} {currency}
              </span>
              <span className="text-[clamp(0.8rem,4cqw,1.1rem)] font-bold text-[#D4AF37]">
                {progressPercent}%
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-white/10 rounded-full h-1.5 md:h-2 overflow-hidden">
            <div 
              className="h-full rounded-full shadow-[0_0_10px_rgba(212,175,55,0.4)] bg-[#D4AF37]" 
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* --- Bottom Section: Actions & Stats --- */}
      <div>
        {/* CTA Button */}
        <button 
          onClick={onInvestClick}
          className="relative w-full py-[3.5%] mb-[6%] rounded-lg overflow-hidden group/btn transition-all duration-300 hover:-translate-y-0.5 shadow-[0_15px_30px_-10px_rgba(212,175,55,0.25)] shrink-0 active:scale-[0.98]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#D4AF37_0%,#AA8C2C_100%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500 ease-in-out"></div>
          <span className="relative z-10 text-white font-bold text-[clamp(0.75rem,3.5cqw,1rem)] uppercase tracking-wide">
            {investButtonText}
          </span>
        </button>

        {/* Social Proof Row */}
        <div className="flex items-center gap-3 mb-[5%] pl-[1%]">
          <div className="flex -space-x-3 shrink-0">
            {investorAvatars.slice(0, 3).map((src, i) => (
              <img 
                key={i}
                className="w-[clamp(1.5rem,7cqw,2.25rem)] h-[clamp(1.5rem,7cqw,2.25rem)] rounded-full border-2 border-[#111111] object-cover" 
                src={src} 
                alt={`Investor ${i + 1}`} 
              />
            ))}
          </div>
          <span className="text-[#9CA3AF] text-[clamp(0.65rem,3cqw,0.85rem)] font-medium leading-tight">
            <span className="text-white font-bold">{investorsCount} {investorsLabel}</span> {investorsText}
          </span>
        </div>

        {/* ROI / Yield Box */}
        <div className="bg-white/5 rounded-lg p-[4%] flex items-center gap-[4%] border border-white/5 hover:border-[#D4AF37]/20 transition-colors duration-500 w-full">
          {/* Icon Container */}
          <div className="bg-[#D4AF37]/10 p-[2.5%] rounded text-[#D4AF37] shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[clamp(0.9rem,5cqw,1.25rem)] h-[clamp(0.9rem,5cqw,1.25rem)]">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
          </div>

          {/* Text Stats */}
          <div className="flex flex-col min-w-0">
            <span className="text-[clamp(0.55rem,2.5cqw,0.7rem)] text-[#9CA3AF] uppercase tracking-wider font-semibold mb-[2%] truncate">
              {yieldLabel}
            </span>
            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="text-[clamp(0.9rem,4.5cqw,1.15rem)] font-bold text-white whitespace-nowrap">
                {yieldPercent}% <span className="text-[#9CA3AF] font-normal text-[0.8em]">/ {yieldPeriod}</span>
              </span>
              <span className="text-[clamp(0.65rem,3.5cqw,0.9rem)] text-[#9CA3AF] whitespace-nowrap">
                sur {duration}
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};