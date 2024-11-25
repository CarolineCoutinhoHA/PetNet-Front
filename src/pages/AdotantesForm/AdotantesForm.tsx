import React, { useState } from 'react';
import './AdotantesForm.css';
import logoPet from '../../assets/pets1.png';  // Importando a imagem diretamente

const AdotantesForm: React.FC = () => {
  const [adotante, setAdotante] = useState({
    nome: '',
    email: '',
    telefone: '',
    dataNascimento: '',
    genero: '',
    experienciaComPets: false,
    casaAdequada: false,
    jaAdotou: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, type, value } = e.target;

    if (type === 'checkbox') {
      setAdotante((prevState) => ({
        ...prevState,
        [name]: !prevState[name as keyof typeof adotante],
      }));
    } else {
      setAdotante((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Adotante cadastrado:', adotante);
    alert('Adotante cadastrado com sucesso!');
    setAdotante({
      nome: '',
      email: '',
      telefone: '',
      dataNascimento: '',
      genero: '',
      experienciaComPets: false,
      casaAdequada: false,
      jaAdotou: false,
    });
  };

  const redirectToLogin = () => {
    window.location.href = '/login';
  };

  return (
    <div className="adotantes-form-page">
      {/* Container do formulário */}
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
                value={adotante.nome}
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
                value={adotante.email}
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
                value={adotante.telefone}
                onChange={handleChange}
                required
              />
            </label>

            <label htmlFor="dataNascimento">
              Data de Nascimento:
              <input
                type="date"
                id="dataNascimento"
                name="dataNascimento"
                value={adotante.dataNascimento}
                onChange={handleChange}
                required
              />
            </label>

            <label htmlFor="genero">
              Gênero:
              <select
                id="genero"
                name="genero"
                value={adotante.genero}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
              </select>
            </label>

            {/* Checkbox - Experiência com pets */}
            <div className="checkbox-group">
              <label htmlFor="experienciaComPets" className="checkbox-label">
                <input
                  type="checkbox"
                  id="experienciaComPets"
                  name="experienciaComPets"
                  onChange={handleChange}
                  checked={adotante.experienciaComPets}
                />
                Possui experiência com pets
              </label>
            </div>

            {/* Checkbox - Local Adequado para o Pet */}
            <div className="checkbox-group">
              <label htmlFor="casaAdequada" className="checkbox-label">
                <input
                  type="checkbox"
                  id="casaAdequada"
                  name="casaAdequada"
                  onChange={handleChange}
                  checked={adotante.casaAdequada}
                />
                Tenho um local adequado para o pet
              </label>
            </div>

            {/* Checkbox - Já Adotou Animal Antes */}
            <div className="checkbox-group">
              <label htmlFor="jaAdotou" className="checkbox-label">
                <input
                  type="checkbox"
                  id="jaAdotou"
                  name="jaAdotou"
                  onChange={handleChange}
                  checked={adotante.jaAdotou}
                />
                Já adotei um animal antes
              </label>
            </div>

            <div className="form-buttons">
              <button type="submit">Cadastrar</button>
              <button type="button" onClick={redirectToLogin}>
                Já tenho cadastro
              </button>
            </div>
          </form>
        </div>
        {/* Container da imagem */}
        <div className="image-container">
          <img
            src={logoPet}  // Usando a importação direta
            alt="Adote um amigo"
            className="adoption-image"
          />
        </div>
      </div>
    </div>
  );
};

export default AdotantesForm;
