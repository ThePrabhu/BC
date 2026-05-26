import IntroAnimation from "./components/IntroAnimation"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Marquee from "./components/Marquee"

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <IntroAnimation />
      <Header />
      <Hero/>
      <Marquee/>
    </div>
  )
}

export default App
