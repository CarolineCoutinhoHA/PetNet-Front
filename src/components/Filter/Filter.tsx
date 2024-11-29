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
    <div className="bg-petnet-white border rounded-md p-4 w-6/12 h-max mt-4">
      <div className="flex gap-4 mt-4">
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
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="border rounded w-full"
        />
        <button
          onClick={handleSearchClick}
          className="bg-petnet-blue text-white font-semibold rounded"
        >
          Buscar
        </button>
      </div>

      <button
        onClick={onButtonClick}
        className="bg-petnet-orange text-white p-2 rounded w-full"
      >
        Limpar filtros
      </button>
    </div>
  );
};

export default Filter;
