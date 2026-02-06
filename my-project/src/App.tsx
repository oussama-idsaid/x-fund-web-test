

import ElevateSpendSection from "./ElevateSpendSection"
import { PortalHero } from "./PortalHero"
import StoryHero from "./StoryHero"


function App() {

  return (
    <>
      {/* <StoryHero/> */}
      <PortalHero />
      {/* The Normal Content (Will naturally appear after the pin finishes) */}
      <section className="relative z-30 bg-white text-black py-20 px-8 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-8">Standard Scrolling Section</h2>
          <p className="text-xl leading-relaxed mb-6">
            This section sits naturally below the hero in the DOM. 
            Because GSAP handles the pinning spacer automatically, 
            you don't need to position this absolutely. 
          </p>
          <p className="text-xl leading-relaxed mb-6">
            Just scroll down, and the hero unpins, revealing this content.
          </p>
          <div className="grid grid-cols-2 gap-8 mt-12">
            <div className="h-64 bg-gray-200 rounded-lg"></div>
            <div className="h-64 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </section>

      <ElevateSpendSection/>
    </>
  )
}

export default App
