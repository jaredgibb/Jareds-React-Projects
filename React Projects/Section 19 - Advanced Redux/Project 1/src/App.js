import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/Notification/Notification";
import { useSelector, useDispatch } from "react-redux";
//import { cartActions } from "./store/cart-slice";

import { sendCartData, fetchCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.cart.showCart);
  const cartItems = useSelector((state) => state.cart.items);
  const changed = useSelector((state) => state.cart.changed);
  const notification = useSelector((state) => state.cart.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (changed === true){ 
      dispatch(sendCartData(cartItems));
    }
  }, [cartItems, dispatch, changed]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}

      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
