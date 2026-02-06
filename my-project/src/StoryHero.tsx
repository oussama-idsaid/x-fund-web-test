import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 1. REGISTER: We must tell GSAP to use this plugin
gsap.registerPlugin(ScrollTrigger);

export default function StoryHero() {
  const containerRef = useRef(null);
  const circleRef = useRef(null);

  useGSAP(() => {
    
    // gsap.to(circleRef.current, {
    //   scale: 5, // Grow to 5x size
    //   scrollTrigger: {
    //     trigger: circleRef.current, // What element watches the scroll?
    //     start: "50% center",        // When does it start?
    //     end: "bottom top",          // When does it end?
    //     pin: true,
    //     scrub: true,                // Link animation to scrollbar!
    //     markers: true               // Helpful debug lines
    //   }
    // });

//   }, { scope: containerRef });


// The Timeline controls the scroll logic
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current, // Pin the whole container
      start: "top top",              // Start when container hits top of screen
      end: "+=2000",                 // Scroll window is 2000px long
      scrub: true,                   // Link to scrollbar
      pin: true,                      // Lock the screen in place
      markers: true 
    }
  });

  // Now we just add animations to the timeline like normal!
  // tl.to(...)
  // tl.to(...)

}, { scope: containerRef });

  return (
    <div ref={containerRef} className="story-container">
      
      {/* Spacer to force scrolling */}
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1>Scroll Down...</h1>
      </div>

      <div ref={circleRef} className="circle" style={{ 
        width: '100px', 
        height: '100px', 
        background: 'orange', 
        borderRadius: '50%',
        margin: '0 auto' 
      }}></div>

      {/* More space below */} 
      <div style={{ height: '100vh' }}></div>

    </div>
  );
}