import React, { useState, useEffect, useRef } from 'react';
import './About.css'; 
import primeiro from '../../assets/variospets.jpg';
import segundo from '../../assets/pets2.png';

// Componente de Carregamento (Loader)
const ImageWithLoader: React.FC<{ src: string, alt: string }> = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoading(false);
  }, [src]);

  return (
    <>
      {isLoading ? (
        <div className="loading-spinner">Carregando...</div> // Seu carregador personalizado
      ) : (
        <img src={src} alt={alt} />
      )}
    </>
  );
};

// ImpactInfographic Component
const ImpactInfographic: React.FC = () => {
  return (
    <section className="infographic" id="impact-section">
      <div className="container">
        <h2>Impacto da Adoção em 2024</h2>
        
        {/* Cães Adotados */}
        <div className="infographic-bar">
          <div className="bar-container">
            <div className="bar" style={{ width: '80%' }}></div>
          </div>
          <div className="info">
            <span role="img" aria-label="Cão">🐶</span> 
            <p>{`80% Cães Adotados (800 de 1000)`}</p>
          </div>
        </div>

        {/* Gatos Adotados */}
        <div className="infographic-bar">
          <div className="bar-container">
            <div className="bar" style={{ width: '70%' }}></div>
          </div>
          <div className="info">
            <span role="img" aria-label="Gato">🐱</span> 
            <p>{`70% Gatos Adotados (700 de 1000)`}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Info: React.FC = () => {
  const impactRef = useRef<HTMLDivElement>(null); // Referência para a seção de impacto

  // Função para rolar até a seção de impacto com rolagem mínima
  const handleScrollToImpact = () => {
    if (impactRef.current) {
      impactRef.current.scrollIntoView({
        behavior: 'smooth', // Rolagem suave
        block: 'nearest',   // Ajuste para rolar o mínimo possível
        inline: 'nearest',  // Evitar rolagem horizontal
      });
    }
  };

  return (
    <div className="about-container">
      {/* ABOUT SECTION */}
      <section className="about-content">
        <div className="about-text">
          <h1 className="about-title">Sobre o PetNet</h1>
          <p className="about-description">
            O PetNet é uma plataforma dedicada à adoção responsável de animais. Conectamos animais abandonados com novos donos, proporcionando um lar cheio de amor e cuidados para os pets.
          </p>
          <button className="about-button" onClick={handleScrollToImpact}>Saiba mais</button>
        </div>
        <div className="about-image">
          {/* Usando o componente de carregamento para a imagem */}
          <ImageWithLoader src={primeiro} alt="Sobre o PetNet" />
        </div>
      </section>

      {/* IMPACT SECTION */}
      <div ref={impactRef}>
        <ImpactInfographic /> {/* Seção de Impacto agora está aqui */}
      </div>

      {/* MISSION SECTION */}
      <section className="mission-section">
        <h2 className="mission-title">Nossa Missão</h2>
        <div className="mission-content">
          <div className="mission-image">
            <img src={segundo} alt="Missão PetNet" loading="lazy" />
          </div>
          <div className="mission-text-container">
            <div className="mission-text">
              <ul>
                <li>Conectar animais abandonados a novos lares.</li>
                <li>Promover a adoção responsável, respeitando as necessidades dos pets.</li>
                <li>Educar a sociedade sobre a importância da adoção e cuidados com animais.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;
