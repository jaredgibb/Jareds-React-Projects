import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import CartContext from "../store/CartContext.jsx";
import { useContext } from "react";

export default function MealItem({ item, ...props }) {
  const cartContext = useContext(CartContext);

  function addItemToCart() {
    cartContext.addItem(item);
  }

  return (
    <li className={"meal-item"}>
      <article className="menu-item-info">
        <img src={`http://localhost:3000/${item.image}`} alt={item.name} />
        <div>
          <h3>{item.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(item.price)}
          </p>
          <p className="meal-item-description">{item.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={()=>addItemToCart()}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
