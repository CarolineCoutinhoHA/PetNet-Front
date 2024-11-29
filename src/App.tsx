import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Fluxogram from './components/Fluxogram/Fluxogram'; 
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import AdoptionBenefits from './components/Benefits/Benefits';
import FAQs from './components/FAQs/FAQs';
import Carousel from './components/Carousel/Carousel';
import About from './components/About/About';
import AdotantesForm from './pages/AdotantesForm/AdotantesForm';
import LoginForm from './pages/LoginForm/LoginForm';
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
                <FAQs />
                <Testimonials />
              </>
            } 
          />

          {/* Página de cadastro de adotantes */}
          <Route path="/login" element={<LoginForm />} />
          {/* Página de cadastro de adotantes */}
          <Route path="/cadastro-adotantes" element={<AdotantesForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
