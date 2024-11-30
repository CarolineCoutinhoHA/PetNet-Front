import React from 'react';
import './Contact.css'; // Importando os estilos da página de contato

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Entre em Contato</h1>
      <p className="contact-subtitle">Se você tiver alguma dúvida ou sugestão, estamos aqui para ajudar!</p>

      <div className="contact-form">
        <form action="#" method="POST">
          <label htmlFor="name">Seu Nome</label>
          <input type="text" id="name" name="name" placeholder="Digite seu nome" required />

          <label htmlFor="email">Seu E-mail</label>
          <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required />

          <label htmlFor="message">Mensagem</label>
          <textarea id="message" name="message" rows={6} placeholder="Escreva sua mensagem" required></textarea>

          <button type="submit">Enviar Mensagem</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
