import React, { useEffect } from 'react';
import './Fluxogram.css';
import passo1 from '../../assets/passo2.jpg';
import passo2 from '../../assets/passo4.jpg';
import passo3 from '../../assets/passo7.jpg';
import passo4 from '../../assets/passo5.jpg';

const Fluxogram: React.FC = () => {
  useEffect(() => {
    const images = document.querySelectorAll('img[data-src]'); // Seleciona as imagens com 'data-src'

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || ''; // Carrega a imagem
          img.classList.add('lazyloaded'); // Adiciona a classe para animação
          observer.unobserve(img); // Para de observar a imagem
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    images.forEach((image) => observer.observe(image));

  }, []);

  return (
    <div className="fluxogram-container">
      <h1 className="fluxogram-title">Passo a Passo para Adotar</h1>

      <div className="fluxogram-item">
        <div className="fluxogram-image">
          <img
            data-src={passo1}
            alt="Passo 1"
            loading="lazy"
            className="lazy-image"
          />
        </div>
        <div className="fluxogram-text">
          <h3>Passo 1: Conheça a Adoção</h3>
          <p>Explore o mundo da adoção de pets, aprenda tudo sobre o processo e como podemos ajudar.</p>
        </div>
      </div>

      <div className="fluxogram-arrow">↓</div>

      <div className="fluxogram-item">
        <div className="fluxogram-image">
          <img
            data-src={passo2}
            alt="Passo 2"
            loading="lazy"
            className="lazy-image"
          />
        </div>
        <div className="fluxogram-text">
          <h3>Passo 2: Escolha o Pet</h3>
          <p>Encontre o pet perfeito para você. Veja os animais disponíveis para adoção e seus perfis.</p>
        </div>
      </div>

      <div className="fluxogram-arrow">↓</div>

      <div className="fluxogram-item">
        <div className="fluxogram-image">
          <img
            data-src={passo3}
            alt="Passo 3"
            loading="lazy"
            className="lazy-image"
          />
        </div>
        <div className="fluxogram-text">
          <h3>Passo 3: Preencha o Formulário</h3>
          <p>Complete o formulário de adoção e aguarde a nossa equipe avaliar sua candidatura.</p>
        </div>
      </div>

      <div className="fluxogram-arrow">↓</div>

      <div className="fluxogram-item">
        <div className="fluxogram-image">
          <img
            data-src={passo4}
            alt="Passo 4"
            loading="lazy"
            className="lazy-image"
          />
        </div>
        <div className="fluxogram-text">
          <h3>Passo 4: Adoção Finalizada</h3>
          <p>Receba seu novo amigo e aproveite a companhia de um pet incrível!</p>
        </div>
        <div className="fluxogram-success-icon">✔</div>
      </div>
    </div>
  );
};

export default Fluxogram;
