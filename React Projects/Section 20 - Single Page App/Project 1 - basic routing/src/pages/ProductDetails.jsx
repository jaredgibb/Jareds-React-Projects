import { useParams, NavLink } from "react-router-dom";

export default function ProductDetails() {

    const { id } = useParams();

  return (
    <>
      <h1>Product Details</h1>
        <p>Product ID: {id}</p>
      <p>Product details go here!</p>
      <NavLink
              to=".."
              relative="path"
              >
              Go Back
              </NavLink>
    </>
  );
}
