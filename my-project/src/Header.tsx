import { ArrowRight, Menu } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";
import Logo from "./assets/logo-inline.png"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasBackground, setHasBackground] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const scrollAccumulator = useRef(0);

  const navLinks = [
    { name: "Investir", href: "#" },
    { name: "Se Financer", href: "#" },
    { name: "Qui sommes-nous ?", href: "#" },
    { name: "S'infomer", href: "#" },
  ];

  const SCROLL_THRESHOLD = 10; // Minimum scroll distance to trigger show/hide
  const TOP_THRESHOLD = 50; // Distance from top to consider "at top"

  const handleScroll = useCallback(() => {
    if (isMobileMenuOpen) return;

    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - lastScrollY.current;
    const isAtTop = currentScrollY <= TOP_THRESHOLD;

    // Accumulate scroll in the current direction
    if (scrollDelta > 0) {
      // Scrolling down - reset accumulator if we were going up
      scrollAccumulator.current = scrollAccumulator.current < 0 ? scrollDelta : scrollAccumulator.current + scrollDelta;
    } else if (scrollDelta < 0) {
      // Scrolling up - reset accumulator if we were going down
      scrollAccumulator.current = scrollAccumulator.current > 0 ? scrollDelta : scrollAccumulator.current + scrollDelta;
    }

    // At the very top: show header, no background
    if (isAtTop) {
      setIsVisible(true);
      setHasBackground(false);
    } else {
      // Not at top: add background
      setHasBackground(true);

      // Hide on scroll down (only after threshold)
      if (scrollAccumulator.current > SCROLL_THRESHOLD) {
        setIsVisible(false);
        scrollAccumulator.current = 0; // Reset after triggering
      }
      // Show on scroll up (only after threshold)
      else if (scrollAccumulator.current < -SCROLL_THRESHOLD) {
        setIsVisible(true);
        scrollAccumulator.current = 0; // Reset after triggering
      }
    }

    lastScrollY.current = currentScrollY;
  }, [isMobileMenuOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);


  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 font-sans transition-all duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
        } ${hasBackground ? "bg-[#0F0F0F]/95 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="px-6 lg:px-40 mx-auto h-20 flex items-center justify-between">

        {/* --- Logo --- */}
        <div className="shrink-0">
          <img className="max-w-32" src={Logo} alt="" />
        </div>

        {/* --- Desktop Navigation --- */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-white hover:text-[#D4AF37] transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* --- Desktop Actions --- */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="px-5 py-2.5 rounded-md text-sm font-semibold text-white border border-white/30 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300">
            Mon compte
          </button>

          <button className="group flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-bold bg-[#D4AF37] text-[#0F0F0F] hover:bg-[#bfa03a] transition-all duration-300">
            <span>Devenir investisseur</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* --- Mobile Menu Trigger --- */}
        <button
          className="lg:hidden text-white hover:text-[#D4AF37] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* --- Mobile Menu Dropdown --- */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0F0F0F] border-t border-white/10 p-6 absolute w-full left-0 top-20 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-bold text-white hover:text-[#D4AF37] py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <button className="w-full py-3 rounded-md text-sm font-semibold text-white border border-white/20 hover:border-[#D4AF37] hover:text-[#D4AF37]">
              Mon compte
            </button>
            <button className="w-full py-3 rounded-md text-sm font-bold bg-[#D4AF37] text-[#0F0F0F] hover:bg-[#bfa03a] flex justify-center items-center gap-2">
              <span>Devenir membre</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;