import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import passo6 from '../../assets/passo6.jpg'; // Importe a imagem, ajuste o caminho conforme necessário

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('authToken');

  // Verifica se o usuário está autenticado
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login'); // Redireciona para a página de login
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null; // Impede a renderização se não estiver autenticado
  }

  const handleAdoptRedirect = () => {
    navigate('/pets'); // Redireciona para a página de adoção
  };

  return (
    <div className="profile-container">
      <h1>Bem-vindo ao seu perfil!</h1>
      <img
        src={passo6} // Substitui pelo caminho da imagem importada
        alt="Foto de perfil"
        className="profile-picture"
      />
      <p>Gerencie suas informações e faça a diferença na vida de um pet!</p>
      <button className="adopt-button" onClick={handleAdoptRedirect}>
        Adotar
      </button>
    </div>
  );
};

export default Profile;
