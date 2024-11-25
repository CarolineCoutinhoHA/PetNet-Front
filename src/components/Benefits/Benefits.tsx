import "./Benefits.css";

const BenefitsPetAdopter = () => {
  return (
    <div className="benefits-container">
      <h2 className="benefits-title">Adote e Ganhe Benefícios: Para o Pet e para Você</h2>
      <div className="benefits-grid">
        {/* Benefícios para o Pet */}
        <div className="benefits-section pet-benefits">
          <h3>Para o Pet</h3>
          <ul>
            <li>🐶 <strong>Nova chance de vida:</strong>  Um lar cheio de amor.</li>
            <li>🩺 <strong>Cuidados de saúde:</strong> Bem-estar garantido.</li>
            <li>❤️ <strong>Companhia e carinho:</strong> Amor incondicional.</li>
          </ul>
        </div>

        {/* Benefícios para o Adotante */}
        <div className="benefits-section adopter-benefits">
          <h3>Para Você</h3>
          <ul>
            <li>🌟 <strong>Companheirismo:</strong> Uma amizade leal.</li>
            <li>😊 <strong>Bem-estar emocional:</strong> Menos estresse e mais felicidade.</li>
            <li>🤝 <strong>Impacto social:</strong> Fazendo a diferença!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BenefitsPetAdopter;
