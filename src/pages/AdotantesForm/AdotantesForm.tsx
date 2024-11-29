import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import './AdotantesForm.css'; // Certifique-se de que o arquivo CSS esteja correto
import logoPet from '../../assets/pets1.png'; // Imagem para o formulário

interface AdotantesFormProps {
  showSuccessMessage: (msg: string) => void;
  showErrorMessage: (msg: string) => void;
}

const AdotantesForm: React.FC<AdotantesFormProps> = ({ showSuccessMessage, showErrorMessage }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    senha: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate(); // Instanciando useNavigate

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.nome) newErrors.nome = 'O nome é obrigatório!';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Digite um e-mail válido!';
    if (!formData.telefone) newErrors.telefone = 'O telefone é obrigatório!';
    if (!formData.senha) newErrors.senha = 'A senha é obrigatória!';
    else if (formData.senha.length < 6) newErrors.senha = 'A senha deve ter pelo menos 6 caracteres!';

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      showSuccessMessage('Cadastro realizado com sucesso!');
      setFormData({ nome: '', email: '', telefone: '', senha: '' });
    } else {
      showErrorMessage('Por favor, corrija os erros no formulário.');
    }
  };

  const handleRedirectToLogin = () => {
    navigate('/login'); // Supondo que a rota do login seja '/login'
  };

  return (
    <div className="adotantes-form-page">
      <div className="adotantes-form-container">
        <div className="form-container">
          <h2>Cadastro de Adotantes</h2>
          <form onSubmit={handleSubmit}>
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
            </label>

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
            </label>

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
            </label>

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
            </label>

            {errors.nome && <div className="error-message">{errors.nome}</div>}
            {errors.email && <div className="error-message">{errors.email}</div>}
            {errors.telefone && <div className="error-message">{errors.telefone}</div>}
            {errors.senha && <div className="error-message">{errors.senha}</div>}

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
