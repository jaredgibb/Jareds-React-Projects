import { useState, useEffect } from "react";
import MealItem from "./MealItem";
export default function Meals() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      //pretend to wait to fetch this data
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await fetch("http://localhost:3000/meals");

      //error handling
      if (!response.ok) {
        setError("Something went wrong");
      }
      const json = await response.json();
      setItems(json);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <ul id="meals">
        {items.map((item) => (
          <MealItem item={item} key={item.id} />
        ))}
      </ul>
    </>
  );
}
