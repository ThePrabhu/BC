import IntroAnimation from "./components/IntroAnimation"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Marquee from "./components/Marquee"

import ImpactSection from "./components/impact/ImpactSection"
import EventUniverse from "./components/events/EventUniverse"
import AboutSection from "./components/about/AboutSection"
import JoinSection from "./components/join/JoinSection"



function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <IntroAnimation />
      <Header />
      <Hero />
      <Marquee />
      <ImpactSection />
      <EventUniverse />
      <AboutSection />
      <JoinSection />


    </div>
  )
}

export default App