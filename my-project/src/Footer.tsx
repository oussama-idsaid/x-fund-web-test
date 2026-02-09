import { ArrowRight, Instagram, Linkedin, Globe, Star, ShieldCheck, Twitter } from "lucide-react";
import Logo from "./assets/logo-inline.png"

const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] text-white pt-20 pb-10 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Top Section: Navigation & Disclaimer --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Left Column: Logo & Warning (Takes up 5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Logo Placeholder */}
            <div className="max-w-44 mb-8">
                <img className="w-full h-auto" src={Logo} alt="" />
              
            </div>
            
            {/* Disclaimer Text */}
            <div className="max-w-md">
                <p className="text-gray-400 text-xs leading-relaxed">
                    <span className="font-bold text-white">Avertissement :</span> investir dans des sociétés non cotées présente un risque de perte en capital et de liquidité. 
                    N'investissez que l'argent dont vous n'avez pas besoin immédiatement et diversifiez votre épargne. 
                    <a href="#" className="underline decoration-gray-600 hover:text-[#D4AF37] hover:decoration-[#D4AF37] ml-1 transition-colors">
                        En savoir plus.
                    </a>
                </p>
            </div>
          </div>

          {/* Right Columns: Links (Takes up 7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            
            {/* Column 1 */}
            <div>
                <h4 className="font-bold text-lg mb-6">X-Fund.</h4>
                <ul className="space-y-4 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Les avantages du Club</a></li>
                    <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Rejoindre le Club</a></li>
                    <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Nos levées</a></li>
                    <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Se faire financer</a></li>
                    <li><a href="#" className="hover:text-[#D4AF37] transition-colors">L’équipe X-Fund</a></li>
                </ul>
            </div>

            {/* Column 2 */}
            <div>
                <h4 className="font-bold text-lg mb-6">Légal</h4>
                <ul className="space-y-4 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Réclamation</a></li>
                    <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Confidentialité</a></li>
                    <li><a href="#" className="hover:text-[#D4AF37] transition-colors">CGU X-Fund</a></li>
                    <li><a href="#" className="hover:text-[#D4AF37] transition-colors">CGU Lemonway</a></li>
                </ul>
            </div>

            {/* Column 3 */}
            <div>
                <h4 className="font-bold text-lg mb-6">Ressources</h4>
                <ul className="space-y-4 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Blog</a></li>
                    <li><a href="#" className="hover:text-[#D4AF37] transition-colors">FAQ</a></li>
                    <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Frais</a></li>
                    <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Politique de sélection</a></li>
                    <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Les avantages Fiscaux</a></li>
                </ul>
            </div>

          </div>
        </div>

        {/* --- Separator --- */}
        <div className="h-px bg-white/10 w-full mb-10"></div>

        {/* --- Newsletter Section --- */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-10">
            <div className="max-w-lg text-center lg:text-left">
                <h3 className="text-[#D4AF37] font-bold text-lg mb-2">Vous souhaitez rejoindre le Club ?</h3>
                <p className="text-gray-400 text-sm">Inscrivez-vous sur la liste d'attente pour être mis au courant des prochaines ventes d'adhésions.</p>
            </div>

            <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
                <input 
                    type="email" 
                    placeholder="Votre adresse mail" 
                    className="w-full sm:w-80 px-4 py-3 rounded bg-white text-black text-sm outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
                <button className="bg-[#D4AF37] text-black px-6 py-3 rounded font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#bfa03a] transition-colors whitespace-nowrap">
                    Je m'inscris <ArrowRight size={16} />
                </button>
            </div>
        </div>

        {/* --- Separator --- */}
        <div className="h-px bg-white/10 w-full mb-10"></div>

        {/* --- Trust & Partners Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
            
            {/* Trustpilot Widget Simulation */}
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-emerald-500">
                    <Star size={24} fill="currentColor" />
                    <span className="font-bold text-white text-lg">Trustpilot</span>
                </div>
                <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="bg-emerald-500 p-1 rounded-sm">
                             <Star size={16} fill="white" className="text-white" />
                        </div>
                    ))}
                </div>
                <div className="text-sm text-gray-400 mt-1">
                    TrustScore <span className="text-white font-bold">4.8</span> | <span className="underline">1 667 avis</span>
                </div>
            </div>

            {/* Partner Logos Placeholders */}
            <div className="flex items-center gap-8 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <span className="text-black font-bold text-xs">LW</span>
                    </div>
                    <span className="font-bold tracking-widest text-lg">LEMONWAY</span>
                </div>
                
                <div className="flex items-center gap-3 border-l border-white/20 pl-6">
                    <ShieldCheck size={32} className="text-white" />
                    <p className="text-[10px] text-gray-400 max-w-37.5 leading-tight">
                        Prestataire de services de financement participatif agréé auprès de l’AMF.
                    </p>
                </div>
            </div>
        </div>

        {/* --- Separator --- */}
        <div className="h-px bg-white/10 w-full mb-8"></div>

        {/* --- Bottom Footer --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500">
            
            {/* Left Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
                <span>© X-Fund 2026.</span>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
                <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
                
                {/* Language Dropdown Simulation */}
                {/* <button className="flex items-center gap-1 hover:text-white transition-colors">
                    <Globe size={12} />
                    <span>Langue</span>
                </button> */}
            </div>

            {/* Right Side */}
            <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
                    <span>Website by</span>
                    <span className="font-bold text-white">3SPROTECH</span>
                </div>

                <div className="flex items-center gap-4">
                    <a href="#" className="hover:text-[#D4AF37] transition-colors"><Instagram size={18} /></a>
                    <a href="#" className="hover:text-[#D4AF37] transition-colors"><Linkedin size={18} /></a>
                    <a href="#" className="hover:text-[#D4AF37] transition-colors"><Twitter size={18} /></a>
                </div>
            </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer