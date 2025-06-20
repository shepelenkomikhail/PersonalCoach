import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/sections/Navbar.tsx';
import Hero from './components/sections/Hero.tsx';
import About from './components/sections/About.tsx';
import TrainingPlans from './components/sections/TrainingPlans.tsx';
import OnlineTraining from './components/sections/OnlineTraining.tsx';
import Contact from './components/sections/Contact.tsx';
import Footer from './components/sections/Footer.tsx';
import Feedbacks from "./components/sections/Feedbacks.tsx";
import PaymentSuccess from './components/payments/PaymentSuccess.tsx';
import PaymentFail from './components/payments/PaymentFail.tsx';
import PaymentStatus from './components/payments/PaymentStatus.tsx';

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