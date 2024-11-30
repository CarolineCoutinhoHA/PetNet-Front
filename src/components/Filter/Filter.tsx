import React, { useState } from "react";

interface FilterProps {
  onButtonClick: () => void;
  onSearch: (criteria: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onButtonClick, onSearch }) => {
  const [selectedSex, setSelectedSex] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  const handleSexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSelectedSex(value);
    onSearch(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(inputValue);
  };

  return (
    <div className="bg-petnet-white border rounded-md p-4 sm:w-6/12 h-max mt-8">
        <div className="flex gap-4 mt-4 justify-center">
          <label className="flex items-center">
            <input
              type="radio"
              name="sexo"
              value="masculino"
              checked={selectedSex === "masculino"}
              onChange={handleSexChange}
              className="mr-2"
            />
            Masculino
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="sexo"
              value="feminino"
              checked={selectedSex === "feminino"}
              onChange={handleSexChange}
              className="mr-2"
            />
            Feminino
          </label>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap items-start space-x-2">
        <input
          type="text"
          value={inputValue}
          placeholder="Digite sua busca aqui..."
          onChange={handleChange}
          className="border rounded w-full bg-petnet-white text-petnet-purple placeholder-gray-50"
        />
        <button
          onClick={handleSearchClick}
          className="bg-petnet-blue text-white font-semibold rounded mt-1.5 w-full sm:w-2/12"
        >
          Buscar
        </button>
      </div>

      <button
        onClick={onButtonClick}
        className="bg-petnet-orange text-white p-4 rounded w-full mt-1 sm:mt-0 sm:w-2/12"
      >
        Limpar filtros
      </button>
    </div>
  );
};

export default Filter;
