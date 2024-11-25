import { useState, useEffect } from 'react';
import './Carousel.css';

// Importando as imagens da pasta assets
import image1 from '../../assets/carrossel.png';
import image2 from '../../assets/carrossel6.png';
import image3 from '../../assets/carrossel5.png';

const Carousel: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Array com as imagens e informações
  const images = [
    {
      src: image1,
      title: "Adote um Pet",
      description: "Encontre o seu novo amigo e faça a diferença na vida de um animal.",
      buttonText: "Adotar Agora",
      buttonLink: "/adocao",
    },
    {
      src: image2,
      title: "Fazendo a Diferença",
      description: "Com a sua adoção, você ajuda a mudar a vida de um pet abandonado.",
      buttonText: "Adotar Agora",
      buttonLink: "/adocao",
    },
    {
      src: image3,
      title: "Histórias de Adoção",
      description: "Veja as lindas histórias de adoção que transformaram vidas.",
      buttonText: "Leia as Histórias",
      buttonLink: "/historias",
    },
  ];

  // Função para avançar para a próxima imagem
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Troca automática das imagens a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <section className="carousel">
      {/* Slide atual */}
      <div className="carousel-slide">
        <img
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].title}
          className="carousel-image"
        />
        <div className="carousel-slide-content">
          <h2>{images[currentImageIndex].title}</h2>
          <p>{images[currentImageIndex].description}</p>
          <a href={images[currentImageIndex].buttonLink} className="carousel-button">
            {images[currentImageIndex].buttonText}
          </a>
        </div>
      </div>

      {/* Bolinhas de navegação */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Ir para o slide ${index + 1}`}
          ></div>
        ))}
      </div>

      {/* Setinha para próxima imagem */}
      <button className="carousel-arrow" onClick={nextImage} aria-label="Próxima imagem">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
          <path d="M8.59 16.59L13.17 12l-4.58-4.59L10 6l6 6-6 6-1.41-1.41z" />
        </svg>
      </button>
    </section>
  );
};

export default Carousel;
