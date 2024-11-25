import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Fluxogram from './components/Fluxogram'; 
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AdoptionBenefits from './components/Benefits';
import FAQs from './components/FAQs';
import Carousel from './components/Carousel';
import ImpactAdoptionInfographic from './components/impact';
import About from './components/About';
import AdotantesForm from './components/AdotantesForm';
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          {/* Página inicial */}
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

          {/* Página de cadastro de adotantes */}
          <Route path="/cadastro-adotantes" element={<AdotantesForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
