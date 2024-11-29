import { useCallback, useEffect, useState } from "react";
import {
  getPets,
  getDogPictures,
  getCatPictures,
} from "../../services/Pets.ts";
import Card from "../../components/Card/Card.tsx";
import Filter from "../../components/Filter/Filter.tsx";
import { Pet } from "../../types/Pets.ts";

const Pets = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [filteredPets, setFilteredPets] = useState<Pet[]>(pets);

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

  useEffect(() => {
    setFilteredPets(pets);
  }, [pets]);

  const filterPets = (search: string) => {
    const petsFiltered = pets.filter((pet) =>
      (["raca", "especie", "sexo", "status", "tamanho"] as Array<keyof Pet>).some((key) => {
        const value = pet[key] as string | undefined; // Explicitly cast as string
        return value?.toLowerCase().includes(search.toLowerCase());
      })
    );
    setFilteredPets(petsFiltered);
  };
  
  const handleAdoption = (id: number) => { // falta fazer o processo de adoção
    console.log("Id do PET", id);
  }

  const handleClearFilters = () => {
    setFilteredPets(pets);
  };

  return (
    <section className="h-full mt-28 flex flex-col items-center bg-petnet-purple">
      <Filter onButtonClick={handleClearFilters} onSearch={filterPets} />
      <div className="flex flex-wrap gap-4 w-full p-6 justify-center">
        {filteredPets.map((pet) => (
          <Card key={pet.id} pet={pet} onAdoptionClick={handleAdoption} />
        ))}
      </div>
    </section>
  );
};

export default Pets;
