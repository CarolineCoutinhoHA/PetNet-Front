import { Pet } from "../../types/Pets";

const Card = ({ pet }: { pet: Pet })=> {

  return (
    <div className="bg-petnet-white flex flex-col justify-center items-center content-center max-w-min text-petnet-purple p-4">
      <p className="text-petnet-purple font-medium">{pet.nome}</p>
      <p className="">{pet.especie}</p>
      <p className="">{pet.raca}</p>
      <p className="">{pet.descricao}</p>
    </div>
  );
};

export default Card;
