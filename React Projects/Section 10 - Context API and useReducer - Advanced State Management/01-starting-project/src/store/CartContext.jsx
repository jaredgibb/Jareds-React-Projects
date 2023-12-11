import { createContext } from 'react';

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {
    this.items.push(item);
  },
  removeItem: (id) => {},
});

export default CartContext;