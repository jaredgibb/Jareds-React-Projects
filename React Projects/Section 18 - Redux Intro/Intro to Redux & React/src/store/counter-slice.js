import { createSlice } from "@reduxjs/toolkit";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

//createSlice takes an object with a name and an initial state, and an object with reducers
//you can directly mutate the state in the reducers
const initialState = { value: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    increase(state, action) {
      console.log(action.payload.amount);
      state.value += action.payload.amount;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export default counterSlice.reducer;

export const counterActions = counterSlice.actions;
