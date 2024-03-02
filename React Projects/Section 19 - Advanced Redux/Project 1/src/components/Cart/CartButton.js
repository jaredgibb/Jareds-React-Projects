import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CartButton = (props) => {

  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(cartActions.toggleCart());
  }

  const cartItems = useSelector(state => state.cart.items);
  const totalItemsInCart = cartItems.reduce((currentNumber, item) => {
    return currentNumber + item.quantity;
  }
    , 0);

  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItemsInCart}</span>
    </button>
  );
};

export default CartButton;
