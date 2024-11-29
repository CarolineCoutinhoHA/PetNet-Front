import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header/Header';
import Fluxogram from './components/Fluxogram/Fluxogram'; 
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import AdoptionBenefits from './components/Benefits/Benefits';
import FAQs from './components/FAQs/FAQs';
import Carousel from './components/Carousel/Carousel';
import ImpactAdoptionInfographic from './components/Impact/impact';
import About from './components/About/About';
import AdotantesForm from './pages/AdotantesForm/AdotantesForm';
import LoginForm from './pages/LoginForm/LoginForm';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './pages/AdotantesForm/AdotantesForm.css';

const App = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'success' | 'error' | null>(null);

  const showSuccessMessage = (msg: string) => {
    setMessage(msg);
    setMessageType('success');
    setTimeout(() => {
      setMessage(null);
      setMessageType(null);
    }, 5000);
  };

  const showErrorMessage = (msg: string) => {
    setMessage(msg);
    setMessageType('error');
    setTimeout(() => {
      setMessage(null);
      setMessageType(null);
    }, 5000);
  };

  return (
    <Router>
      <div className="app">
        <Header />
        
        {/* Exibindo mensagem de sucesso ou erro */}
        {message && (
          <div className={`alert ${messageType}`}>
            {message}
          </div>
        )}

        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Carousel />
                <About />
                <Fluxogram />
                <AdoptionBenefits />
                <ImpactAdoptionInfographic />
                <FAQs />
                <Testimonials />
              </>
            } 
          />
          <Route path="/login" element={<LoginForm />} />
          <Route 
            path="/cadastro-adotantes" 
            element={
              <AdotantesForm 
                showSuccessMessage={showSuccessMessage} 
                showErrorMessage={showErrorMessage}
              />
            } 
          />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
