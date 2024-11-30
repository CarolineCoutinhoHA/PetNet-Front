import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header/Header';
import Fluxogram from './components/Fluxogram/Fluxogram';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import AdoptionBenefits from './components/Benefits/Benefits';
import FAQs from './components/FAQs/FAQs';
import Carousel from './components/Carousel/Carousel';
import About from './components/About/About';  // Importação do componente About
import AdotantesForm from './pages/AdotantesForm/AdotantesForm';
import LoginForm from './pages/LoginForm/LoginForm';
import Profile from './pages/profile/Profile';
import Contact from './pages/contact/Contact';
import ScrollToTop from './ScrollToTop';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './pages/AdotantesForm/AdotantesForm.css';



const App: React.FC = () => {
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

        <ScrollToTop /> {/* Garantir que o scroll vá para o topo */}

        <Routes>
          {/* Página inicial (Landing Page) */}
          <Route 
            path="/" 
            element={(
              <>
                <Carousel />
                <Fluxogram />
                <AdoptionBenefits />
                <FAQs />
                <Testimonials />
              </>
            )} 
          />

          {/* Página de About (Sobre) */}
          <Route path="/about" element={<About />} />
          
          {/* Página de Login */}
          <Route path="/login" element={<LoginForm />} />
          
          {/* Página de cadastro de adotantes */}
          <Route 
            path="/cadastro-adotantes" 
            element={(
              <AdotantesForm 
                showSuccessMessage={showSuccessMessage} 
                showErrorMessage={showErrorMessage}
              />
            )} 
          />
          
          {/* Página de perfil */}
          <Route path="/profile" element={<Profile />} />
          
          {/* Página de Contato */}
          <Route path="/contato" element={<Contact />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
