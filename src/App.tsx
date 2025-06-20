import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TrainingPlans from './components/TrainingPlans';
import OnlineTraining from './components/OnlineTraining';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Feedbacks from "./components/Feedbacks.tsx";
import PaymentSuccess from './components/PaymentSuccess';
import PaymentFail from './components/PaymentFail';
import PaymentStatus from './components/PaymentStatus';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/payment/success" element={<PaymentSuccess />} />
            <Route path="/payment/fail" element={<PaymentFail />} />
            <Route path="/payment/status" element={<PaymentStatus />} />
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <TrainingPlans />
                <OnlineTraining />
                <Feedbacks />
                <Contact />
              </>
            } />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;