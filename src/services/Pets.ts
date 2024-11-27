import { Pet } from "../types/Pets";

async function getPets(): Promise<Pet[]> {
  try {

    const response = await fetch('http://localhost:3000/api/pets'
    );
 
    if (!response.ok) {
      throw new Error(`Failed to fetch pets: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    return data.results || data; 
  } catch (error) {
    console.error("Error fetching pets:", error);
    return [];
  }
}

export default getPets;
