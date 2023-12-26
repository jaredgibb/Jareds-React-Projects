import { createContext, useReducer } from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products.js';

export const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  updateQuantity: () => {},
});

function shoppingCartReducer(state, action) {
  let updatedItems=[]
  switch (action.type) { 
    case 'ADD':
       updatedItems = [...state.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
        updatedItems.push({
          id: action.payload,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }
      return {
        ...state,
        items: updatedItems,
      };
    case 'UPDATE_QUANTITY':
      const { productId, amount } = action.payload;
       updatedItems = [...state.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        ...state,
        items: updatedItems,
      };
    
    default:
      return state
  }
}

export function CartProvider({ children }) {

  const [shoppingCartState, shoppingCartStateDispatch] = useReducer(shoppingCartReducer, {
    items: [],
  })


  //a reducer is a function that takes the previous state and an action and returns the next state.
  

  function handleAddItemToCart(id) {
    shoppingCartStateDispatch({ type: 'ADD', payload: id })
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartStateDispatch({ type: 'UPDATE_QUANTITY', payload:{ productId, amount} })
  }

  const contextValue = {
    items: shoppingCartState.items,
    totalAmount: 0,
    addItem: handleAddItemToCart,
    updateQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}