import { useCallback, useEffect, useState } from "react";
// import Card from "../../components/Card/Card"
import getPets from "../../services/Pets.ts"
import { Pet } from "../../types/Pets.ts";
import Card from "../../components/Card/Card.tsx";

const Pets = () => {
 const [pets, setPets] = useState<Pet[]>([]);
 const fetchData = useCallback(async()=> {
  const data = await getPets();
  console.log(data)
  setPets(data)
}, [])

useEffect(() => {
  fetchData()
}, [fetchData]);
  return (
    <div>
      {pets.map((pet) => <Card key={pet.id} pet={ pet } />)}
    </div>
  )
}

export default Pets