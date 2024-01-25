import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";


export default function Cart() {
  const cartContext = useContext(CartContext);
  const userProgressContext = useContext(UserProgressContext);

  const cartTotal = cartContext.items.reduce((currentTotal, item) => {
    return currentTotal + item.price * item.quantity;
  }, 0);


  function handleCloseCart(){
    userProgressContext.hideCart();
  }


  return (
    <Modal className="cart" open={userProgressContext.progress === 'cart'}>
      <h2>Your Cart</h2>
      <ul>
        {cartContext.items.map((item) => {
          return (
           <CartItem key={item.id} {...item} />
          );
        })}
      </ul>
      <p className="cart-total">Total: {currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>Close</Button>
        <Button onClick={handleCloseCart}>Check Out</Button>
      </p>
    </Modal>
  );
}
