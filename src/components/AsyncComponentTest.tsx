import { useEffect, useState } from "react";

export default function AsyncComponentTest() {
  const [result, setResult] = useState();

  const fetchRickAndMorty = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character/1");
    const data = await response.json();
    setResult(data);
  };

  useEffect(() => {
    try {
      fetchRickAndMorty();
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }, []);
  return <div>{JSON.stringify(result)}</div>;
}
