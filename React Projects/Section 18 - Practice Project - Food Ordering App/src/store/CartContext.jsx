import { createContext, useReducer } from "react";

//create the context
const CartContext = createContext({
  items: [],
  addItem: (id) => {},
  removeItem: (id) => {},
});

//cart reducer function
function cartReducer(state, action) {
  if (action.type === "add") {
    //check if items contains the current item
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingItemIndex > -1) {
      //get the item
      const existingItem = updatedItems[existingItemIndex];
      //update the quantity
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      //replace the item in the array
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      //add the item to the array
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  } else if (action.type === "remove") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingItem = state.items[existingItemIndex];

    const updatedItems = [...state.items];

    if (existingItem.quantity === 1) {
      updatedItems.splice(existingItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems[existingItemIndex] = updatedItem;
    }
    return { ...state, items: updatedItems };
  } else if (action.type === "clear") {
    return { ...state, items: [] };
  }
  return state;
}
//create the context provider / wrapper
//the next is a component that will wrap the entire app
export function CartContextProvider({ children }) {
  //here we use the reducer by passing it the reducer function and the initial state
  const [cart, cartDispatcher] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    cartDispatcher({ type: "add", item });
  }

  function removeItem(item) {
    cartDispatcher({ type: "remove", item });
  }

  function clearCart() {
    cartDispatcher({ type: "clear" });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
