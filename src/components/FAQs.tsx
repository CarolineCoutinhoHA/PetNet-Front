import "./FAQs.css";

const FAQs = () => {
  return (
    <section id="faqs" className="faqs">
      <div className="faqs-container">
        <h2 className="faqs-title">Perguntas Frequentes</h2>
        <div className="faq">
          <h3>Como faço para adotar um pet?</h3>
          <p>Você pode começar preenchendo nosso formulário de adoção online.</p>
        </div>
        <div className="faq">
          <h3>Quais são os custos envolvidos na adoção?</h3>
          <p>A adoção é gratuita, mas pedimos uma contribuição para cobrir despesas de cuidado veterinário e alimentação.</p>
        </div>
        <div className="faq">
          <h3>Posso adotar se já tenho outros animais em casa?</h3>
          <p>Sim! Recomendamos uma visita para garantir que todos os animais se adaptem bem.</p>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
