import { Pet } from "../../types/Pets";
import formatDate from "../../utils/format";

const Card = ({ pet }: { pet: Pet }) => {
  const dataNascimento = pet.data_nascimento
    ? formatDate(new Date(pet.data_nascimento))
    : "Data não disponível";
  return (
    <div
    className="bg-petnet-white flex flex-col items-center 
    justify-start  w-full sm:w-2/12 sm:flex-grow-0 p-4 gap-y-2 text-petnet-purple rounded-md"
>
    <img className="w-full h-44 object-cover rounded-md" src={pet.picture} />
    <p className="text-petnet-purple font-medium">{pet.nome}</p>
    <div className="flex justify-between w-full px-1">
        <div>
            <p className="font-bold">Espécie: <span className="font-normal">{pet.especie}</span></p>
            <p className="font-bold">Sexo: <span className="font-normal">{pet.sexo}</span></p>
        </div>
        <div>
            <p className="font-bold">Raça: <span className="font-normal">{pet.raca}</span></p>
            <p className="font-bold">Porte: <span className="font-normal">{pet.tamanho}</span></p>
        </div>
    </div>
    <div className="w-full px-1">
        <p className="font-bold">Data de nascimento: <span className="font-normal">{dataNascimento}</span></p>
        <p className="font-bold">Personalidade: <span className="font-normal">{pet.personalidade}</span></p>
        <p className="font-bold">Descrição: <span className="font-normal">{pet.descricao}</span></p>
    </div>

    <div className="mt-auto w-full">
        <button className="bg-petnet-blue text-white font-semibold rounded-md w-full py-2">
          Adotar
        </button>
      </div>

</div>


  );
};

export default Card;
