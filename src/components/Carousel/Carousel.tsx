import { useState, useEffect } from 'react';
import './Carousel.css';
import image1 from '../../assets/carrossel.png';
import image2 from '../../assets/carrossel6.png';
import image3 from '../../assets/carrossel5.png';

const Carousel: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

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
      buttonLink: "#testimonials",
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const button = document.querySelector('.carousel-button');
    button?.addEventListener('click', () => {
      const testimonials = document.querySelector('#testimonials');
      if (testimonials) {
        const topOffset = testimonials.getBoundingClientRect().top + window.scrollY;
        const offset = -100; // Ajuste para parar antes do footer
        window.scrollTo({
          top: topOffset + offset,
          behavior: 'smooth',
        });
      }
    });

    return () => {
      button?.removeEventListener('click', () => {
        const testimonials = document.querySelector('#testimonials');
        if (testimonials) {
          const topOffset = testimonials.getBoundingClientRect().top + window.scrollY;
          const offset = -100;
          window.scrollTo({
            top: topOffset + offset,
            behavior: 'smooth',
          });
        }
      });
    };
  }, []);

  return (
    <section className="carousel" aria-live="polite">
      <div className="carousel-slide">
        <img
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].title}
          className="carousel-image"
        />
        <div className="carousel-slide-content">
          <h2>{images[currentImageIndex].title}</h2>
          <p>{images[currentImageIndex].description}</p>
          <button className="carousel-button">
            {images[currentImageIndex].buttonText}
          </button>
        </div>
      </div>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => goToImage(index)}
            aria-label={`Ir para o slide ${index + 1}`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
