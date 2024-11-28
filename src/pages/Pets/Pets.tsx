import { useCallback, useEffect, useState } from "react";
import {
  getPets,
  getDogPictures,
  getCatPictures,
} from "../../services/Pets.ts";
import { Pet } from "../../types/Pets.ts";
import Card from "../../components/Card/Card.tsx";

const Pets = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const fetchData = useCallback(async () => {
    const data = await getPets();
    const newData = await Promise.all(
      data.map(async (pet) => {
        const picture =
          pet.especie?.toLowerCase() === "cachorro"
            ? await getDogPictures() // se a espécie for cachorro chama api de fotos de cachorro
            : await getCatPictures(); // se a espécie for gato chama api de gatos
        return {
          ...pet,
          picture:
            pet.especie?.toLowerCase() === "cachorro"
              ? picture?.message
              : picture?.url,
        };
      })
    );
    setPets(newData);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <section className="h-auto">
      <div className="flex flex-wrap gap-4 w-full p-4 justify-start">
        {pets.map((pet) => (
          <Card key={pet.id} pet={pet} />
        ))}
      </div>
    </section>
  );
};

export default Pets;
