import React from 'react';
import './Fluxogram.css';
import passo1 from '../assets/passo2.jpg';
import passo2 from '../assets/passo4.jpg';
import passo3 from '../assets/passo7.jpg';
import passo4 from '../assets/passo5.jpg';

const Fluxogram: React.FC = () => {
  return (
    <div className="fluxogram-container">
      {/* Título dentro do container */}
      <h1 className="fluxogram-title">Passo a Passo para Adotar</h1>

      {/* Fluxograma Item 1 */}
      <div className="fluxogram-item">
        <div className="fluxogram-image">
          <img src={passo1} alt="Passo 1" />
        </div>
        <div className="fluxogram-text">
          <h3>Passo 1: Conheça a Adoção</h3>
          <p>Explore o mundo da adoção de pets, aprenda tudo sobre o processo e como podemos ajudar.</p>
          <a href="/passo1" className="fluxogram-btn">Saiba Mais</a>
        </div>
      </div>

      {/* Fluxograma Item 2 */}
      <div className="fluxogram-item">
        <div className="fluxogram-image">
          <img src={passo2} alt="Passo 2" />
        </div>
        <div className="fluxogram-text">
          <h3>Passo 2: Escolha o Pet</h3>
          <p>Encontre o pet perfeito para você. Veja os animais disponíveis para adoção e seus perfis.</p>
          <a href="/passo2" className="fluxogram-btn">Saiba Mais</a>
        </div>
      </div>

      {/* Fluxograma Item 3 */}
      <div className="fluxogram-item">
        <div className="fluxogram-image">
          <img src={passo3} alt="Passo 3" />
        </div>
        <div className="fluxogram-text">
          <h3>Passo 3: Preencha o Formulário</h3>
          <p>Complete o formulário de adoção e aguarde a nossa equipe avaliar sua candidatura.</p>
          <a href="/passo3" className="fluxogram-btn">Saiba Mais</a>
        </div>
      </div>

      {/* Fluxograma Item 4 */}
      <div className="fluxogram-item">
        <div className="fluxogram-image">
          <img src={passo4} alt="Passo 4" />
        </div>
        <div className="fluxogram-text">
          <h3>Passo 4: Adoção Finalizada</h3>
          <p>Receba seu novo amigo e aproveite a companhia de um pet incrível!</p>
          <a href="/passo4" className="fluxogram-btn">Saiba Mais</a>
        </div>
      </div>
    </div>
  );
};

export default Fluxogram;
