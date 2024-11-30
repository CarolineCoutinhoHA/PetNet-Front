import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  // Função para validar o formulário
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Validação de nome
    if (!formData.nome) newErrors.nome = 'O nome é obrigatório!';

    // Validação de e-mail (verificando se contém @ e .com)
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Digite um e-mail válido (deve conter @ e .com)!';
    }

    // Validação de telefone (precisa ter 9 caracteres)
    if (!formData.telefone) {
      newErrors.telefone = 'O telefone é obrigatório!';
    } else if (formData.telefone.length !== 9) {
      newErrors.telefone = 'O telefone deve ter 9 dígitos!';
    }

    // Validação de senha (precisa ter pelo menos 6 caracteres)
    if (!formData.senha) {
      newErrors.senha = 'A senha é obrigatória!';
    } else if (formData.senha.length < 6) {
      newErrors.senha = 'A senha deve ter pelo menos 6 caracteres!';
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Valida o formulário e retorna os erros
    const validationErrors = validateForm();
    setErrors(validationErrors);

    // Se não houver erros, exibe a mensagem de sucesso
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
              {errors.nome && <div className="error-message">{errors.nome}</div>}
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
              {errors.email && <div className="error-message">{errors.email}</div>}
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
              {errors.telefone && <div className="error-message">{errors.telefone}</div>}
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
              {errors.senha && <div className="error-message">{errors.senha}</div>}
            </label>

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
