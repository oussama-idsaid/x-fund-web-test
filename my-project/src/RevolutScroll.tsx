import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function RevolutScroll() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Transform the frame dimensions
  const frameWidth = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["400px", "100vw", "100vw"]
  );
  
  const frameHeight = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["600px", "100vh", "100vh"]
  );

  // Background color transition
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["#5B9FD5", "#FFFFFF"]
  );

  // Content opacity
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const cardsOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  return (
    <div ref={containerRef} className="h-[300vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden bg-[#5B9FD5] flex items-center justify-center">
        
        {/* Hero content (fades out) */}
        <motion.div 
          className="absolute left-20 top-1/3 z-10"
          style={{ opacity: heroOpacity }}
        >
          <h1 className="text-7xl font-bold text-white">
            Change the way you<br/>money
          </h1>
          <p className="text-white mt-4">
            Home or away, local or global — move freely<br/>
            between countries and currencies...
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full mt-6">
            Download the app
          </button>
        </motion.div>

        {/* The morphing frame with girl background */}
        <motion.div
          className="relative flex items-center justify-center"
          style={{
            width: frameWidth,
            height: frameHeight,
            backgroundColor,
          }}
        >
          {/* Girl image - stays centered as frame expands */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(/girl-image.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />

          {/* Initial single card (visible at start) */}
          <motion.div 
            className="relative z-10"
            style={{ opacity: heroOpacity }}
          >
            <PhoneCard
              balance="£6,012"
              transaction="Salary +£2,550"
            />
          </motion.div>

          {/* Three cards layout (fades in on scroll) */}
          <motion.div 
            className="relative z-10 flex gap-6"
            style={{ opacity: cardsOpacity }}
          >
            <PhoneCard balance="€3,126" transaction="Coffee in Paris -€3.25" />
            <PhoneCard balance="£6,012" transaction="Salary +£2,550" />
            <PhoneCard balance="£2,350" transaction="House bills -£225" />
          </motion.div>
        </motion.div>

        {/* New heading (fades in) */}
        <motion.div 
          className="absolute top-20 z-20"
          style={{ opacity: cardsOpacity }}
        >
          <h2 className="text-5xl font-bold text-center">
            Your salary, reimagined
          </h2>
          <p className="text-center mt-4">
            Spend smartly, send quickly, sort your salary automatically...
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function PhoneCard({ balance, transaction }) {
  return (
    <div className="bg-white rounded-3xl p-6 w-72 shadow-xl">
      <div className="text-sm text-gray-600">Personal</div>
      <div className="text-4xl font-bold my-4">{balance}</div>
      <button className="bg-gray-100 rounded-full px-4 py-2 text-sm">
        Accounts
      </button>
      <div className="mt-6 bg-white border rounded-2xl p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full" />
          <div className="text-sm">{transaction}</div>
        </div>
      </div>
    </div>
  );
}