import Modal from "./UI/Modal";
import { currencyFormatter } from "../util/formatting";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import Input from "./UI/Input";
import Button from "./UI/Button";
import useHttp from "../hooks/useHttp";

const postConfigObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function CheckOut() {
  const cartContext = useContext(CartContext);
  const userProgressContext = useContext(UserProgressContext);
  const cartTotal = cartContext.items.reduce((currentTotal, item) => {
    return currentTotal + item.price * item.quantity;
  }, 0);

  const {
    data: responseFromServer,
    isLoading: isSending,
    error,
    sendRequest,
    clearData,
  } = useHttp("http://localhost:3000/orders", postConfigObject);

  function handleClose() {
    userProgressContext.hideCheckout();
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    sendRequest(
      JSON.stringify({order:{ customer: data, total: cartTotal, items: cartContext.items}})
    );

   
  }

  function handleCloseModal(event) {
    event.preventDefault();
    //clear the cart
    clearData();
    cartContext.clearCart();
    userProgressContext.hideCheckout();
  }

  let actions = (
    <>
      <Button textOnly type="button" onClick={handleClose}>
        Cancel
      </Button>
      <Button>Submit Order</Button>
    </>
  );


  if (isSending == true) {
    actions = (
      <>
        <span className="center">Sending order data...</span>
      </>
    );
  }

  if (responseFromServer && !error) {

    return (
        <Modal
      open={userProgressContext.progress === "checkout"}
      onClose={handleCloseModal}
    >
        <Button textOnly onClick={handleClose} > ok </Button>

        </Modal>
    )
    }






  return (
    <Modal
      open={userProgressContext.progress === "checkout"}
      onClose={handleClose}
    >
      <form onSubmit={handleSubmit}>
        <h2>Check Out</h2>
        <p>
          Thank you for your order! Your total came to{" "}
          {currencyFormatter.format(cartTotal)}
        </p>
        <p>Enter your payment details below.</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="Email" type="email" id="email" />
        <Input label="Address" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}
