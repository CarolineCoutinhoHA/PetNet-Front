import { Pet } from "../types/Pets";

async function getPets(): Promise<Pet[]> {
  try {
    const response = await fetch("http://localhost:3000/api/pets");

    if (!response.ok) {
      throw new Error(
        `Failed to fetch pets: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    return data.results || data;
  } catch (error) {
    console.error("Error fetching pets:", error);
    return [];
  }
}

interface Picture {
  message?: string;
  status?: string;
  id?: string;
  url?: string;
  width?: number;
  height?: number;
}

async function getDogPictures(): Promise<Picture | undefined> {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");

    if (!response.ok) {
      throw new Error(`Failed to fetch pets: ${response.status}`);
    }
    const petPicture: Picture = await response.json();

    return petPicture;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

async function getCatPictures(): Promise<Picture | undefined> {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");

    if (!response.ok) {
      throw new Error(`Failed to fetch pets: ${response.status}`);
    }
    const petPicture: Picture[] = await response.json();

    return petPicture[0];
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export { getPets, getDogPictures, getCatPictures };
