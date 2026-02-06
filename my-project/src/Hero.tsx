import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  // 1. SETUP: Create a ref for the element we want to animate
  const boxRef = useRef(null);
  const circleRef = useRef(null);

  // 2. SETUP: The hook where our animation logic lives
  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. Box moves down (Duration: 1s)
    tl.to(boxRef.current, { 
      y: 200, 
      duration: 1 
    });

    // 2. Circle moves right (Duration: 1s)
    // Note the extra argument: "-=0.5"
    tl.to(circleRef.current, { 
      x: 100, 
      duration: 1 
    }, "-=0.5"); 
  });

  return (
    <div style={{ padding: '50px' }}>
      <div ref={boxRef} className="box" style={{ width: '50px', height: '50px', background: 'purple' }}>Box</div>
      <div ref={circleRef} className="circle" style={{ width: '50px', height: '50px', background: 'blue', borderRadius: '50%', marginTop: '20px' }}>Circle</div>
    </div>
  );
}