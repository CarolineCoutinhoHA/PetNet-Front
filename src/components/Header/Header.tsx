import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importando Link para rotas
import './Header.css';
import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className="header-content">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h1 className="project-name">PetNet</h1>
        </div>

        <nav>
          <Link to="/">Início</Link> {/* Link atualizado para levar à Landing Page */}
          <a href="#adoption-flow">Como Adotar</a>
          <a href="#testimonials">Depoimentos</a>
          <a href="#footer">Contato</a>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
