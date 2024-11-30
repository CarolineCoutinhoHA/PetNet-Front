import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AdotantesForm from "./pages/AdotantesForm/AdotantesForm";
import LoginForm from "./pages/LoginForm/LoginForm";
import "@fortawesome/fontawesome-free/css/all.min.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import Pets from "./pages/Pets/Pets";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import About from "./components/About/About";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Profile from "./pages/profile/Profile";
import Contact from "./pages/contact/Contact";
const App: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<"success" | "error" | null>(
    null
  );

  const showSuccessMessage = (msg: string) => {
    setMessage(msg);
    setMessageType("success");
    setTimeout(() => {
      setMessage(null);
      setMessageType(null);
    }, 5000);
  };

  const showErrorMessage = (msg: string) => {
    setMessage(msg);
    setMessageType("error");
    setTimeout(() => {
      setMessage(null);
      setMessageType(null);
    }, 5000);
  };
  return (
    <Router>
      <Header />
      <main className="main">
        {/* Exibindo mensagem de sucesso ou erro */}
        {message && <div className={`alert ${messageType}`}>{message}</div>}
        <ScrollToTop /> {/* Garantir que o scroll vá para o topo */}
        <Routes>
          {/* Página inicial */}
          <Route path="/" element={<LandingPage />} />

          {/* Página de About (Sobre) */}
          <Route path="/about" element={<About />} />

          {/* Página de Login */}
          <Route path="/login" element={<LoginForm />} />

          {/* Página de cadastro de adotantes */}

          <Route path="/pets" element={<Pets />} />
          <Route
            path="/cadastro-adotantes"
            element={
              <AdotantesForm
                showSuccessMessage={showSuccessMessage}
                showErrorMessage={showErrorMessage}
              />
            }
          />

          {/* Página de perfil */}
          <Route path="/profile" element={<Profile />} />

          {/* Página de Contato */}
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
