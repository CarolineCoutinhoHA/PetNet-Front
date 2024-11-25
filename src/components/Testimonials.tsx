import { useState, useEffect } from "react";
import "./Testimonials.css";

// Importando as imagens da pasta assets
import mariaFoto from '../assets/MariSilva.jpg';
import joaoFoto from '../assets/JoaoSantos.jpg';
import anaFoto from '../assets/AnaCosta.jpg';
import carlosFoto from '../assets/CarlosPereira.jpg';

const testimonialsData = [
  {
    name: "Maria Silva",
    photo: mariaFoto,
    rating: 5,
    testimony:
      "Adotar foi a melhor decisão da minha vida! Agora tenho um amigo para sempre.",
  },
  {
    name: "João Santos",
    photo: joaoFoto,
    rating: 4,
    testimony:
      "A equipe foi maravilhosa! Me ajudaram a escolher o pet perfeito para a nossa família.",
  },
  {
    name: "Ana Costa",
    photo: anaFoto,
    rating: 5,
    testimony:
      "Estou muito feliz com a adoção! Meu novo pet trouxe tanta alegria para casa.",
  },
  {
    name: "Carlos Pereira",
    photo: carlosFoto,
    rating: 5,
    testimony:
      "Foi uma experiência incrível, a equipe me ajudou a entender todo o processo!",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-left">
          <h2>Relatos de Adotantes</h2>
          <p>
            Adote um amigo e transforme sua vida. Veja o que nossos adotantes
            dizem sobre a experiência de adotar um pet.
          </p>
        </div>
        <div className="testimonials-right">
          <div className="testimonial-card">
            <div className="testimonial-header">
              <img
                className="testimonial-photo"
                src={testimonialsData[currentIndex].photo}
                alt={testimonialsData[currentIndex].name}
              />
              <div className="testimonial-details">
                <h3>{testimonialsData[currentIndex].name}</h3>
                <div className="testimonial-rating">
                  {[...Array(testimonialsData[currentIndex].rating)].map(
                    (_, index) => (
                      <span key={index} className="star">
                        ★
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="testimonial-content">
              <p>{testimonialsData[currentIndex].testimony}</p>
            </div>
          </div>
          <div className="testimonials-navigation">
            <div className="dot-navigation">
              {testimonialsData.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${currentIndex === index ? "active" : ""}`}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
            </div>
            {/* Seta minimalista à direita */}
            <div className="arrow-next" onClick={nextTestimonial}>
              &rsaquo;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
