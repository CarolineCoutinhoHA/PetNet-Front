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
          <Link to="/">Início</Link> {/* Link para a página inicial */}
          <Link to="/about">Sobre Nós</Link> {/* Link para a página About */}
          <Link to="/contato">Contato</Link> {/* Link para a página de Contato */}
          <Link to="/pets">Pets</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
