import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirecionar
import './LoginForm.css';
import logoPet from '../../assets/pets1.png';

const LoginForm: React.FC = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Hook para navegação

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login data:', loginData);
    alert('Login realizado com sucesso!');
    setLoginData({ email: '', password: '' });
  };

  const redirectToCadastro = () => {
    navigate('/cadastro-adotantes'); // Redireciona para a rota do formulário de cadastro
  };

  return (
    <div className="login-form-container">
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            E-mail:
            <input
              type="email"
              id="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label htmlFor="password">
            Senha:
            <input
              type="password"
              id="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </label>

          <div className="form-buttons">
            <button type="submit">Entrar</button>
            <button type="button" onClick={redirectToCadastro}>
              Não tenho cadastro
            </button>
          </div>
        </form>
      </div>
      <div className="image-container">
        <img
          src={logoPet}
          alt="Login para Adotar"
          className="login-image"
        />
      </div>
    </div>
  );
};

export default LoginForm;
