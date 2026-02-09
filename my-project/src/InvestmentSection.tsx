import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

// 1. Define the Interface for props
interface CounterProps {
  from: number;
  to: number;
  duration: number;
  suffix?: string;
  prefix?: string;
}

const Counter: React.FC<CounterProps> = ({ from, to, duration, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState<number>(from);

  // 2. Type the Ref for a specific HTML element
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

        setCount(Math.floor(progress * (to - from) + from));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  // Increased font size here
  return (
    <span ref={nodeRef} className="text-5xl md:text-6xl font-extrabold text-yellow-600">
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

const InvestmentSection: React.FC = () => {
  return (
    <section className="bg-white text-gray-900 py-20 px-4 md:px-8 lg:px-16">
      {/* Increased max-width for a wider layout */}
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-sm font-bold tracking-widest text-yellow-600 uppercase mb-3">
          Expert du crowdfunding immobilier
        </h2>

        <h1 className="text-3xl md:text-5xl font-bold mb-16 text-gray-900">
          Ouvrir l'accès à <br className="hidden md:block" /> l'investissement immobilier
        </h1>

        {/* Increased gap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

          {/* Card 1: Increased padding (p-10) and added hover effect */}
          <div className="bg-gray-50 p-10 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <Counter from={0} to={80} duration={2000} suffix="M€" prefix='+'/>
            <p className="text-xl font-bold mt-4 text-gray-800">Montant levé</p>
            <p className="text-gray-500 text-base">auprès des investisseurs*</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 p-10 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <Counter from={0} to={100} duration={2000} prefix='+' />
            <p className="text-xl font-bold mt-4 text-gray-800">Projets</p>
            <p className="text-gray-500 text-base">déjà financés via notre plateforme*</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 p-10 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <Counter from={0} to={10} duration={2000} suffix="k" prefix='+'/>
            <p className="text-xl font-bold mt-4 text-gray-800">Membres</p>
            <p className="text-gray-500 text-base">accèdent à l'immobilier avec X-Fund</p>
          </div>

        </div>

        <div className="text-base text-gray-500 mb-10 space-y-2 max-w-3xl mx-auto">
          <p>
            X-Fund est une plateforme participative agréée par l'Autorité des
            marchés financiers qui permet d'investir dans de nombreux projets immobiliers
            sous forme d'obligations.
          </p>
          <p className="text-sm italic opacity-80">*Ces chiffres correspondent aux données depuis le lancement de X-Fund en 2021.</p>
        </div>

        <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-4 px-10 text-lg rounded-lg transition-all duration-300 shadow-md hover:shadow-yellow-600/20 transform hover:-translate-y-0.5">
          Découvrir nos opportunités
        </button>
      </div>
    </section>
  );
};

export default InvestmentSection;
