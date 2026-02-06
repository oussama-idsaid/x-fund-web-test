import React from 'react';
import { Coins } from 'lucide-react';

interface SalaryCardProps {
  amount?: string;
  label?: string;
  timestamp?: string;
  className?: string;
}

const SalaryCard: React.FC<SalaryCardProps> = ({
  amount = "+€450",
  label = "Intérêts Versée",
  timestamp = "Aujourd'hui, 11:28",
  className = "",
}) => {
  return (
    <div
      className={`
        relative flex items-center justify-between
        w-full  p-4
        rounded-2xl
        /* Onyx Glassmorphism Background */
        bg-neutral-900/60 
        backdrop-blur-xl 
        border border-white/10
        shadow-2xl shadow-black/50
        group
        ${className}
      `}
    >
      {/* Optional: Subtle gradient overlay for the "Onyx" feel */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

      <div className="flex items-center gap-4 z-10">
        {/* Icon Container - Styled like the 'Performance' icon in Image 2 */}
        <div 
          className="
            flex items-center justify-center 
            w-12 h-12 
            rounded-xl 
            bg-neutral-800/80 
            border border-amber-500/20 
            shadow-[0_0_15px_-3px_rgba(245,158,11,0.15)]
          "
        >
          <Coins className="w-6 h-6 text-amber-400" strokeWidth={2} />
        </div>

        {/* Text Content */}
        <div className="flex flex-col">
          <span className="text-gray-100 font-semibold tracking-wide text-base">
            {label}
          </span>
          <span className="text-gray-500 text-xs font-medium">
            {timestamp}
          </span>
        </div>
      </div>

      {/* Amount - Styled with Gold Gradient */}
      <div className="z-10">
        <span 
          className="
            text-xl font-bold 
            bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 
            bg-clip-text text-transparent
            drop-shadow-sm
          "
        >
          {amount}
        </span>
      </div>
    </div>
  );
};

export default SalaryCard;

// ------------------------------------------------------------------
// Example Usage Wrapper (to visualize the glass effect)
// ------------------------------------------------------------------

// export const ExampleUsage = () => {
//   return (
//     <div className="min-h-[300px] w-full bg-neutral-950 flex items-center justify-center p-8 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-950 to-black">
//       <SalaryCard />
//     </div>
//   );
// };