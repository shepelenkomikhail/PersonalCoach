import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TrainingPlans from './components/TrainingPlans';
import OnlineTraining from './components/OnlineTraining';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TrainingPlans />
        <OnlineTraining />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;