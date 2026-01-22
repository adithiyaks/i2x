import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tracks from './components/Tracks';
import Timeline from './components/Timeline';
import Stakeholders from './components/Stakeholders';
import { FAQ, Footer } from './components/Footer';

import Particles from './components/Particles';

function App() {
  return (
    <div className="min-h-screen bg-obsidian text-white selection:bg-gold selection:text-obsidian font-sans">
      <Navbar />

      <main>
        <Hero />

        {/* Seamless Background Section */}
        <div className="relative">
          <div className="absolute inset-0 z-0">
            <Particles
              particleCount={620}
              particleSpread={10}
              speed={0.1}
              particleColors={["#efbf04", "#ffffff"]}
              moveParticlesOnHover
              particleHoverFactor={1}
              alphaParticles={false}
              particleBaseSize={100}
              sizeRandomness={1}
              cameraDistance={20}
              disableRotation={false}
            />
          </div>

          <div className="relative z-10">
            <About />
            <Tracks />
            <Timeline />
            <Stakeholders />
            <FAQ />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
