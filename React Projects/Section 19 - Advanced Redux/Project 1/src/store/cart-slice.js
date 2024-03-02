import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  showCart: false,
  notification: null,
  changed: false,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    addItemToCart(state, action) {
      state.changed = true;
      console.log(state)
      const items = state.items;
      const existingItem = items.find((item) => item.id === action.payload.id);
      //if the item is not in the cart, push the entire payload, if it is, just increase the quantity

      console.log(existingItem);

      if (!existingItem) {
        state.items.push({
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }
    },
    replaceCart(state, action) {
      state.items = action.payload.items;
    },
    reduceItemCount(state, action) {
      state.changed = true;
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        existingItem.quantity--;
      }
    },
    removeItemFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;


//the following function is a thunk, it is a function that returns another function, and it is used to handle async code
//it is used to send the cart data to the server
//it is used in the App.js file


export default cartSlice.reducer;
