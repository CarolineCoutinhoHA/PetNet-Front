import './impact.css';

const ImpactInfographic = () => {
  return (
    <section className="infographic">
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

export default ImpactInfographic;
