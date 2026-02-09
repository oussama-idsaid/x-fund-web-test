import { Quote, MoveUpRight } from "lucide-react"
import Montana from "./assets/montanta-forbes.jpg"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const MontanaAnimated = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const contentBoxRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.from(contentBoxRef.current, {
      maxWidth: "100%", 
      minHeight: "100vh",
      borderRadius: 0,
      scrollTrigger: {
        trigger: contentBoxRef.current, 
        start: "top 80%",       
        end: "top 20%",         
        scrub: true,            
        markers: false          
      }
    });
    gsap.from(sectionRef.current, {
      padding: 0,
      margin: 0,
      scrollTrigger: {
        trigger: contentBoxRef.current, 
        start: "top 80%", 
        end: "top 20%",         
        scrub: true,            
        markers: false          
      }
    });
    gsap.to(sectionRef.current, {
      paddingTop: "100px",
      duration: 0.3,
      scrollTrigger: {
        trigger: contentBoxRef.current, 
        start: "top 80%",       
        end: "top 20%",
        scrub: true,            
        markers: false           
      }
    });
    
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="bg-white py-12 px-4 min-h-screen flex items-center justify-center font-sans">
      
      {/* Main Card Container 
         - max-w-[1400px]: Keeps it from getting too wide on huge screens
         - min-h-[80vh]: Ensures it feels tall and immersive
         - p-10 md:p-20: Adds the requested "padding around the box"
      */}
      <div ref={contentBoxRef} className="max-w-300 w-full min-h-[80vh] bg-[#1A1A1A] rounded-2xl flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 shadow-2xl relative overflow-hidden">
        
        {/* Subtle Background Detail to break up the flat color */}
        <div className="absolute top-0 right-0 w-125 h-125 bg-[#D4AF37] opacity-5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-300 w-full p-10 md:p-20  flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 relative overflow-hidden">
            {/* Image Column 
            - No padding here; the gap is handled by the parent flex gap
            */}
            <div className="w-full md:w-3/5 flex justify-center relative z-10">
            <div className="relative">
                {/* Simple shadow to lift the image off the dark background */}
                <div className="absolute -inset-4 bg-black/40 blur-xl -z-10 rounded-full opacity-0 md:opacity-100"></div>
                <img 
                src={Montana} 
                alt="Forbes Cover" 
                className="w-full max-w-lg h-auto object-contain rounded shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]" 
                />
            </div>
            </div>

            {/* Content Column 
            - w-full md:w-1/2: Takes the other half
            - aligned to the left for clean typography
            */}
            <div className="w-full md:w-1/2 flex flex-col justify-center text-white relative z-10">
            
            <Quote size={80} className="text-[#D4AF37] mb-8 opacity-100" />
            
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
                L'exigence  avant tout.
            </h3>
            
            <h3 className="text-2xl md:text-3xl font-light text-gray-300 mb-12">
                J'investis avec <span className="text-[#D4AF37] font-semibold">X-Fund</span>.
            </h3>

            <div className="space-y-2 mb-16 pl-6 border-l border-[#D4AF37]/50">
                <p className="text-xl font-medium">French Montana</p>
                <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] opacity-80">Ambassadeur & Investisseur</p>
            </div>

            <button className="group flex items-center gap-4 w-fit border border-white/20 px-8 py-4 rounded-full text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black transition-all duration-300">
                <span className="font-semibold uppercase text-xs tracking-widest">Voir l'opportunité</span>
                <MoveUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            </div>

        </div>

      </div>
    </section>
  )
}

export default MontanaAnimated