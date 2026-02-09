

import ElevateSpendSection from "./ElevateSpendSection"
import Footer from "./Footer"
import FrenchMontana from "./FrenchMontana"
import Header from "./Header"
import InvestmentSection from "./InvestmentSection"
import LuxuryCardsSection from "./LuxuryCardsSection"
import MontanaAnimated from "./MontanaAnimated"
import { PortalHero } from "./PortalHero"

function App() {

  return (
    <>
    <Header/>
      {/* <StoryHero/> */}
      <PortalHero />
      <InvestmentSection />
      <ElevateSpendSection/>
      {/* <FrenchMontana/> */}
      <MontanaAnimated/>
      <Footer/>
    </>
  )
}

export default App
