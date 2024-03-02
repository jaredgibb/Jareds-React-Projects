import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://scorecard-x-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Could not fetch cart data");
      }
      const data = await response.json();
      console.log(data);
      return data || [];
    };

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart({ items: cartData }));
    } catch (error) {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error",
          message: "Fetching cart data failed",
        })
      );
    }
  };
};

export const sendCartData = (cartData) => {
  return async (dispatch) => {
    dispatch(
      cartActions.showNotification({
        status: "pending",
        title: "Update",
        message: "We are starting to grab data",
      })
    );

    const sendRequest = async () => {

        delete cartData.changed;
      const response = await fetch(
        "https://scorecard-x-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartData),
        }
      );

      if (!response.ok) {
        throw new Error("Sending data failed");
      }
    };

    try {
      await sendRequest();
      dispatch(
        cartActions.showNotification({
          status: "success",
          title: "Update",
          message: "Data is sent",
        })
      );
    } catch (error) {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Update",
          message: "An error ocurred",
        })
      );
    }
  };
};
