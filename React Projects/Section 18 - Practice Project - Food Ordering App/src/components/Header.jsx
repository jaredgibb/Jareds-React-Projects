import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

export default function Header({}) {
  const cartContext = useContext(CartContext);
  const userProgressContext = useContext(UserProgressContext);

  function handleShowCart(){
    userProgressContext.showCart(true);
  }

  const itemCount = cartContext.items.reduce((currentNumber, item) => {
    return currentNumber + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="react food logo" />
        <h1>jareds food shop of horrers</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>CART ({itemCount})</Button>
      </nav>
    </header>
  );
}
