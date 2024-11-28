import { Pet } from "../../types/Pets";
import formatDate from "../../utils/format";

const Card = ({ pet }: { pet: Pet }) => {
  const dataNascimento = pet.data_nascimento
    ? formatDate(new Date(pet.data_nascimento))
    : "Data não disponível";
  return (
    <div
      className="bg-petnet-white flex flex-col items-center 
    justify-start w-full sm:w-2/12 sm:flex-grow-0 p-4 gap-y-2 text-petnet-purple rounded-md"
    >
      <img className="w-full h-44 object-cover rounded-md" src={pet.picture} />
      <p className="text-petnet-purple font-medium">{pet.nome}</p>
      <div className="flex justify-between w-full px-1">
        <div>
          <p className="">Espécie: {pet.especie}</p>
          <p className="">Sexo: {pet.sexo}</p>
        </div>
        <div>
          <p className="">Raça: {pet.raca}</p>
          <p className="">Porte: {pet.tamanho}</p>
        </div>
      </div>
      <div className="w-full px-1">
      <p>Data de nascimento: {dataNascimento}</p>
      <p className="">Personalidade: {pet.personalidade}</p>
      <p className="">Descrição: {pet.descricao}</p>
      </div>
    </div>
  );
};

export default Card;
