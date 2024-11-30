import React, { useState } from "react";
import "./AdotantesForm.css";
import logoPet from "../../assets/pets1.png";

const AdotantesForm: React.FC = () => {
  const [adotante, setAdotante] = useState({
    nome: "",
    email: "",
    senha: "",
    tipo: "adotante", // Valor padrão como 'adotante'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAdotante((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Usuário cadastrado:", adotante);
    alert("Cadastro realizado com sucesso!");
    setAdotante({
      nome: "",
      email: "",
      senha: "",
      tipo: "adotante",
    });
  };

  const redirectToLogin = () => {
    window.location.href = "/login";
  };

  return (
    <div className="adotantes-form-page">
      <div className="adotantes-form-container">
        <div className="form-container">
          <h2>Cadastro</h2>
          <form onSubmit={handleSubmit}>
            {/* Nome Completo */}
            <label htmlFor="nome">
              Nome Completo:
              <input
                type="text"
                id="nome"
                name="nome"
                value={adotante.nome}
                onChange={handleChange}
                required
              />
            </label>

            {/* E-mail */}
            <label htmlFor="email">
              E-mail:
              <input
                type="email"
                id="email"
                name="email"
                value={adotante.email}
                onChange={handleChange}
                required
              />
            </label>

            {/* Senha */}
            <label htmlFor="senha">
              Senha:
              <input
                type="password"
                id="senha"
                name="senha"
                value={adotante.senha}
                onChange={handleChange}
                required
              />
            </label>

            {/* Tipo: Adotante ou Administrador */}
            <div className="checkbox-group">
              <p>Tipo de usuário:</p>
              <label className="checkbox-label">
                <input
                  type="radio"
                  name="tipo"
                  value="adotante"
                  checked={adotante.tipo === "adotante"}
                  onChange={handleChange}
                />
                Adotante
              </label>
              <label className="checkbox-label">
                <input
                  type="radio"
                  name="tipo"
                  value="administrador"
                  checked={adotante.tipo === "administrador"}
                  onChange={handleChange}
                />
                Administrador
              </label>
            </div>

            {/* Botões */}
            <div className="form-buttons">
              <button type="submit">Cadastrar</button>
              <button type="button" onClick={redirectToLogin}>
                Já tenho cadastro
              </button>
            </div>
          </form>
        </div>
        <div className="image-container">
          <img
            src={logoPet}
            alt="Adote um amigo"
            className="adoption-image"
          />
        </div>
      </div>
    </div>
  );
};

export default AdotantesForm;
