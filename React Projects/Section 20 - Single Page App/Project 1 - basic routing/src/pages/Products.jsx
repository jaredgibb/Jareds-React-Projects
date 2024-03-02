import { Link } from "react-router-dom";

export default function Products() {
  return (
    <>
      <h1>Products</h1>
      <p>Our products are the best!</p>
      <ul>
        <Link to="/products/1"> Product 1</Link>
        <Link to="/products/2"> Product 2</Link>
        <Link to="/products/3"> Product 3</Link>
      </ul>
    </>
  );
}
