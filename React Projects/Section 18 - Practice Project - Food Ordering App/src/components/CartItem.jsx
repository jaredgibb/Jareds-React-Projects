import { currencyFormatter } from "../util/formatting";
import { useContext } from "react";
import CartContext from "../store/CartContext";




export default function CartItem({name, id, quantity, price, onAdd, onRemove}) {

    const itemModel = {
        id,
        name,
        price,
        quantity
    }

    const cartContext = useContext(CartContext);
    function incrementItem(){
        cartContext.addItem(itemModel);
      }

        function decrementItem(){
            cartContext.removeItem(itemModel);
        }
  return (
    <li className="cart-item">
      <p>{name} - {quantity} {currencyFormatter.format(quantity*price)}</p>
      <p className="cart-item-actions">
        <button onClick={decrementItem}>-</button>
        <span>{quantity}</span>
        <button onClick={incrementItem}>+</button>
      </p>
    </li>
  );
}
 