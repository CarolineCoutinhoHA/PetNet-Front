import React from 'react';
import './About.css'; // Importando o CSS da seção "Sobre"
import aboutImage from '../../assets/about.jpg'; // Imagem para a seção "Sobre"

const About: React.FC = () => {
  return (
    <section className="about-container">
      <div className="about-text">
        <h2 className="about-title">Sobre nós</h2>
        <p className="about-description">
          Somos uma organização dedicada a conectar pessoas a oportunidades de adoção, criando um futuro melhor para nossos animais e seus novos lares. Nossa missão é proporcionar o melhor começo para cada pet e garantir que cada adoção seja um passo positivo para todos.
        </p>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="Sobre nós" />
      </div>
    </section>
  );
};

export default About;
