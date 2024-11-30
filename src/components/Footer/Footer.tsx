import './Footer.css';
import logoPet from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Logo e Descrição */}
        <div className="footer-logo-description">
          <div className="footer-logo">
            <img src={logoPet} alt="Logo PetNet" />
          </div>
          <div className="footer-description">
            <p>"Conectando animais e humanos para um futuro melhor."</p>
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          <a href="#carousel">Início</a>
          <a href="#adoption-flow">Como Adotar</a>
          <a href="#testimonials">Depoimentos</a>
        </div>
      </div>

      {/* Mídias Sociais e E-mail */}
      <div className="footer-social-email">
        <div className="footer-social">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </div>
        <div className="footer-email">
          <a href="mailto:contato@petnet.com">contato@petnet.com</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2024 PetNet. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
