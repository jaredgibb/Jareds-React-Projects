import MealItem from "./MealItem";
import Error from "./Error";
import useHttp from "../hooks/useHttp";

const requestConfig = {
  method: "GET",
};
export default function Meals() {
  const {
    data: items,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Loading...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  console.log(items);
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
