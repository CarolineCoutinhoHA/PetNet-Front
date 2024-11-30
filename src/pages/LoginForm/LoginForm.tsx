import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import logoPet from '../../assets/pets1.png';

const LoginForm: React.FC = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    userType: 'adotante', // Assuming you want a userType to differentiate
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login data:', loginData);

    // Simulate login (use backend logic here)
    if (loginData.userType === 'adotante') {
      localStorage.setItem('authToken', 'adotante_token');
      navigate('/profile'); // Redirect to the adopters' profile page
    } else {
      localStorage.setItem('authToken', 'admin_token');
      navigate('/admin-dashboard'); // Redirect to the admin dashboard
    }

    setLoginData({ email: '', password: '', userType: 'adotante' }); // Reset form
  };

  const redirectToCadastro = () => {
    navigate('/cadastro-adotantes'); // Redirect to the registration page
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

          {/* Optionally add a user type selector */}
          <label>
            Tipo de usuário:
            <select
              name="userType"
              value={loginData.userType}
              onChange={handleChange}
            >
              <option value="adotante">Adotante</option>
              <option value="administrador">Administrador</option>
            </select>
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
