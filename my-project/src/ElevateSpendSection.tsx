
import Video from "./assets/video-final.mp4"

const ElevateSpendSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white font-sans flex flex-col items-center justify-center mt-20 ">
      
      {/* --- Background Video (Contains Background + Cards) --- */}
      <div className="absolute inset-0 z-0">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
          // Placeholder poster in case video loads slowly
          poster="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop"
        >
          {/* Replace this src with your actual video file that includes the cards animation */}
          <source src={Video} type="video/mp4" />
        </video>
        
        {/* Optional: Subtle overlay to ensure text legibility if the video is too bright */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* --- Overlay Content --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center h-full pt-10 justify-between">
        
        {/* 1. Top Text Group */}
        <div className="text-center space-y-6 max-w-3xl mt-">
          <h1 className="text-5xl md:text-5xl font-semibold tracking-tight text-white drop-shadow-lg">
            L'app X-FUND : Investissez. Suivez. Encaissez.
          </h1>
          <p className="text-gray-100 text-base md:text-sm max-w-2xl mx-auto leading-relaxed font-normal shadow-black drop-shadow-md">
            Nous sourçons le rare. Accédez à des pépites architecturales normalement réservées aux fonds privés et suivez la croissance de votre capital en temps réel, sans aucune contrainte de gestion.
          </p>
        </div>

        {/* 2. Middle "Start Earning" Button (Positioned to sit over the cards in the video) */}
        {/* You may need to adjust 'mb-32' or translate-y depending on exactly where the cards sit in your video frame */}
        <div className="flex-1 flex items-end justify-center py-10 ">
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium text-sm hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Télécharger l'application
            </button>
        </div>


      </div>
    </section>
  );
};

export default ElevateSpendSection;