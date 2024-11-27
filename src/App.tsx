import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AdotantesForm from "./pages/AdotantesForm/AdotantesForm";
import LoginForm from "./pages/LoginForm/LoginForm";
import "@fortawesome/fontawesome-free/css/all.min.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import Pets from "./pages/Pets/Pets";
import './index.css';
const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          {/* Página inicial */}
          <Route path="/" element={<LandingPage />} />

          {/* Página de cadastro de adotantes */}
          <Route path="/login" element={<LoginForm />} />
          {/* Página de cadastro de adotantes */}
          <Route path="/cadastro-adotantes" element={<AdotantesForm />} />
          <Route path="/pets" element={<Pets />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
