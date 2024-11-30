import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdotantesForm.css"; // Certifique-se de que o arquivo CSS esteja correto
import logoPet from "../../assets/pets1.png"; // Imagem para o formulário

const AdotantesForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    senha: "",
    tipo: "adotante", // Valor padrão como 'adotante'
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.nome) newErrors.nome = "O nome é obrigatório!";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Digite um e-mail válido (deve conter @ e .com)!";
    }
    if (!formData.telefone) newErrors.telefone = "O telefone é obrigatório!";
    if (formData.telefone.length !== 9)
      newErrors.telefone = "O telefone deve ter 9 dígitos!";
    if (!formData.senha) newErrors.senha = "A senha é obrigatória!";
    if (formData.senha.length < 6)
      newErrors.senha = "A senha deve ter pelo menos 6 caracteres!";

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Cadastro realizado com sucesso!");
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        senha: "",
        tipo: "adotante",
      });
    } else {
      alert("Por favor, corrija os erros no formulário.");
    }
  };

  const handleRedirectToLogin = () => {
    navigate("/login"); // Supondo que a rota do login seja '/login'
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
                value={formData.nome}
                onChange={handleChange}
                required
              />
              {errors.nome && <div className="error-message">{errors.nome}</div>}
            </label>

            {/* E-mail */}
            <label htmlFor="email">
              E-mail:
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
            </label>

            {/* Telefone */}
            <label htmlFor="telefone">
              Telefone:
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
              />
              {errors.telefone && <div className="error-message">{errors.telefone}</div>}
            </label>

            {/* Senha */}
            <label htmlFor="senha">
              Senha:
              <input
                type="password"
                id="senha"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                required
              />
              {errors.senha && <div className="error-message">{errors.senha}</div>}
            </label>

            {/* Tipo de usuário */}
            <div className="checkbox-group">
              <p>Tipo de usuário:</p>
              <label className="checkbox-label">
                <input
                  type="radio"
                  name="tipo"
                  value="adotante"
                  checked={formData.tipo === "adotante"}
                  onChange={handleChange}
                />
                Adotante
              </label>
              <label className="checkbox-label">
                <input
                  type="radio"
                  name="tipo"
                  value="administrador"
                  checked={formData.tipo === "administrador"}
                  onChange={handleChange}
                />
                Administrador
              </label>
            </div>

            {/* Botões */}
            <div className="form-buttons">
              <button type="submit" className="btn-submit">Cadastrar</button>
              <button
                type="button"
                onClick={handleRedirectToLogin}
                className="btn-login"
              >
                Já tenho cadastro
              </button>
            </div>
          </form>
        </div>

        <div className="image-container">
          <img src={logoPet} alt="Adote um amigo" className="adoption-image" />
        </div>
      </div>
    </div>
  );
};

export default AdotantesForm;
