import { Scene } from './components/Scene';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ServiceDetails } from './components/ServiceDetails';
import { Portfolio } from './components/Portfolio';
import { DigitalLab } from './components/DigitalLab';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';

function App() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navigation />
      <div className="relative">
        <div className="absolute inset-0">
          <Scene />
        </div>
        <Hero />
      </div>
      <Services />
      <ServiceDetails />
      <Portfolio />
      <DigitalLab />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;