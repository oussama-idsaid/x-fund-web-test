import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SalaryCard from './SalaryCard';
import { InvestmentCard } from './InvestmentCard';

gsap.registerPlugin(ScrollTrigger);

// --- 1. The Hero Component ---
export const PortalHero = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const heroContentRef = useRef<HTMLDivElement | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const boxTextRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const sideCard1Ref = useRef<HTMLDivElement | null>(null);
  const sideCard2Ref = useRef<HTMLDivElement | null>(null);
  const investmentCardContainerRef = useRef<HTMLDivElement | null>(null);
  const notificationCardContainerRef = useRef<HTMLDivElement | null>(null);
  const balanceContainerRef = useRef<HTMLDivElement | null>(null);
  const balanceTitleRef = useRef<HTMLDivElement | null>(null);
  const balanceDescRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (
      !containerRef.current ||
      !heroContentRef.current ||
      !boxRef.current ||
      !boxTextRef.current ||
      !cardRef.current ||
      !sideCard1Ref.current ||
      !sideCard2Ref.current ||
      !investmentCardContainerRef.current ||
      !notificationCardContainerRef.current ||
      !balanceContainerRef.current ||
      !balanceTitleRef.current ||
      !balanceDescRef.current
    ) {
      return;
    }
    // RELATIVE TO SCROLL PROGRESS
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: containerRef.current,
    //     start: "top top",
    //     end: "+=1000", // Controls how long the animation scroll lasts
    //     scrub: true,
    //     pin: true,     // Pins the hero until timeline finishes
    //   }
    // });

    // 1. The Pinning Logic (Keeps the hero stuck in place)
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=1200", // How long do you want it pinned?
      pin: true,
      markers: false,
      pinSpacing: true // Ensures the next section stays pushed down
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 5, // Absolute scroll position 
        end: "+=1000", // Match the pin duration if you want consistency
        toggleActions: "play none none reverse", // The logic
        // markers: true // Keep this on to see the line!
      }
    });

    // Scene 1: Hero Content slides up and fades out
    tl.to(heroContentRef.current, {
      y: -100,
      opacity: 0,
      duration: .2
    });

    // Scene 2: Box expands to fill the screen
    tl.to(boxRef.current, {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
      duration: .8,
      ease: "expo.in"
    }, "-=0.2");

    // Fill white box bg
    tl.to(boxRef.current, {
      backgroundColor: "white",
      duration: .3
    }, "-=0.7");

    // Fill phone bg
    tl.to(cardRef.current, {
      backgroundColor: "#111111",
      borderRadius: 8,
      duration: .3
    }, "-=0.7");

    // Hide notification card
    tl.to(notificationCardContainerRef.current, {
      y: 50,
      opacity: 0,
      duration: .3
    }, "-=0.7");

    tl.to(notificationCardContainerRef.current, {
      position: "absolute",
      duration: 0
    }, "-=0.7");

    // Hide balance
    tl.fromTo(balanceContainerRef.current, {
        opacity: 1
    }, {
        opacity: 0,
        duration: .3
    }, "-=1");

    // card animation
    tl.to(cardRef.current, {
        width: "310px",
        height: "480px",
        duration: .7,
        ease: "power4.inOut"
    }, "-=0.7")

    // project card show
    tl.to(investmentCardContainerRef.current, {
        scale: 1,
        position:"relative",
        opacity: 1,
        duration: .5,
        ease: "power2.inOut"
    }, "-=0.3")

    //  New Text fades in
    tl.to(boxTextRef.current, {
      opacity: 1,
      y: 50,
      duration: .3
    });
    
    //  Side cards
    tl.to(sideCard1Ref.current, {
      scale: 1,
      opacity: 1,
      x: 50,
      duration: .5,
      rotate: "-5deg",
      ease: "power1.inOut"
    }, "-=0.5");
    tl.to(sideCard2Ref.current, {
      scale: 1,
      opacity: 1,
      rotate: "5deg",
      x: -50,
      duration: .5,
      ease: "power1.inOut"
    }, "-=0.5");

  }, { scope: containerRef });

  const properties = [
    {
      id: 1,
      title: "Le Thegra",
      location: "Balma, France",
      currentAmount: 332840,
      targetAmount: 555000,
      progressPercent: 60,
      investorsCount: 252,
      yieldPercent: 11.5,
    },
    {
      id: 2,
      title: "Villa Azure",
      imageUrl: "https://www.proprietesdecharme.com/wp-content/uploads/2023/03/Vente-immobilier-de-luxe-France.jpg",
      location: "Cannes, France",
      currentAmount: 680000,
      targetAmount: 900000,
      progressPercent: 75,
      investorsCount: 389,
      yieldPercent: 10.2,
      rating: "A",
    },
    {
      id: 3,
      title: "Château Moderne",
      imageUrl: "https://www.davidsmalldesigns.com/wp-content/uploads/2021/08/modern-chateau-01.jpg",
      location: "Versailles, France",
      currentAmount: 1250000,
      targetAmount: 2000000,
      progressPercent: 62,
      investorsCount: 567,
      yieldPercent: 13.5,
      rating: "A++",
    },
  ];


  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-gray-900 text-white">
      
      {/* Initial Hero Content */}
      <div ref={heroContentRef} className="absolute inset-0 flex flex-col items-start justify-start z-10  px-32 pt-36">
        <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[136px] leading-tight xl:leading-[0.9] font-medium mb-4">L'immobilier débloqué</h1>
        <p className='text-lg md:text-xl lg:text-2xl max-w-md md:max-w-2xl lg:max-w-3xl mb-6'>Accédez à l'immobilier de prestige dès 10€. Bâtissez votre patrimoine mondial en quelques clics seulement.</p>
        <button className="px-8 py-3 bg-[#D4AF37] rounded-md text-lg text-black font-semibold">
          Devenir investisseur
        </button>
      </div>

      {/* The Magic Box */}
      <div 
        ref={boxRef} 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-md h-3/5 bg-indigo-6000 rounded-t-xl border-2 border-white border-b-0 z-20 flex flex-col items-center justify-center overflow-hidden"
      >
            <div ref={boxTextRef} className="opacity-0 translate-y-10 text-center p-8 min-w-75 absolute -top-12 text-gray-800 max-w-7xl">
                <h2 className="text-7xl font-medium mb-6">Rejoignez le mouvement</h2>
                <p className="text-xl ">Du château moderne à la villa méditerranéenne, nous avons sélectionné le meilleur du marché. Cliquez sur un projet pour découvrir l'ingénierie financière qui booste votre patrimoine.</p>
            </div>


            <div ref={cardRef} className="w-full h-full min-h-0 flex flex-col items-center justify-end p-2">
                <div ref={balanceContainerRef} className='mb-24 text-center '>
                    <p ref={balanceTitleRef} className='text-xl'>Total</p>
                    <p ref={balanceDescRef} className='text-4xl font-bold'>€7,256</p>
                </div>
                <div ref={investmentCardContainerRef} className='w-full flex-1 p-2 scale-95 absolute opacity-0'>
                    <InvestmentCard />
                </div>
                <div ref={notificationCardContainerRef} className='w-full flex-col items-center justify-end'>
                    <SalaryCard />
                </div>
            </div>

            {/* other cards */}
            <div ref={sideCard1Ref} className='absolute bg-[#111111] w-60 h-96 right-[calc(50%+250px)] top-[50%] opacity-0 scale-110 rounded-md -rotate-15'>
                <InvestmentCard {...properties[1]} />
            </div>
            <div ref={sideCard2Ref} className='absolute bg-[#111111] w-60 h-96 left-[calc(50%+250px)] top-[50%] opacity-0 scale-110 rounded-md rotate-15'>
                <InvestmentCard {...properties[2]}  />
            </div>
        </div>

      <div className="absolute inset-0 bg-[url('https://cdn.home-designing.com/wp-content/uploads/2023/04/modern-houses.jpg')] bg-cover bg-center bg-no-repeat -scale-x-100 -z-10" />
    </div>
  );
};

