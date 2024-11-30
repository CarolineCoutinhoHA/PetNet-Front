import React from 'react';
import './Fluxogram.css';
import fluxo1 from '../../assets/fluxo1.png';
import fluxo2 from '../../assets/fluxo2.png';
import fluxo3 from '../../assets/fluxo3.png';
import fluxo4 from '../../assets/fluxo4.png';

const fluxogramItems = [
  {
    id: 1,
    image: fluxo1,
    altText: 'Passo 1',
    title: 'Passo 1: Conheça a adoção',
    description: 'Explore o mundo da adoção de pets, aprenda tudo sobre o processo e como podemos ajudar.',
    link: '/passo1',
    buttonText: 'Saiba Mais',
  },
  {
    id: 2,
    image: fluxo2,
    altText: 'Passo 2',
    title: 'Passo 2: Escolha o pet',
    description: 'Encontre o pet perfeito para você. Veja os animais disponíveis para adoção e seus perfis.',
    link: '/passo2',
    buttonText: 'Saiba mais',
  },
  {
    id: 3,
    image: fluxo3,
    altText: 'Passo 3',
    title: 'Passo 3: Preencha o formulário',
    description: 'Complete o formulário de adoção e aguarde a nossa equipe avaliar sua candidatura.',
    link: '/passo3',
    buttonText: 'Saiba mais',
  },
  {
    id: 4,
    image: fluxo4,
    altText: 'Passo 4',
    title: 'Passo 4: Adoção finalizada',
    description: 'Receba seu novo amigo e aproveite a companhia de um pet incrível!',
    link: '/passo4',
    buttonText: 'Saiba mais',
  },
];

const Fluxogram: React.FC = () => {
  return (
    <div className="fluxogram-container">
      <h1 className="fluxogram-title">Passo a passo para adotar</h1>

      {fluxogramItems.map(({ id, image, altText, title, description, link, buttonText }) => (
        <div key={id} className="fluxogram-item">
          <div className="fluxogram-image">
            <img src={image} alt={altText} />
          </div>
          <div className="fluxogram-text">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} className="fluxogram-btn">{buttonText}</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Fluxogram;
