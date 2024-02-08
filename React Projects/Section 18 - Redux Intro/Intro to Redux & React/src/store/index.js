//import { createStore } from "redux";
import { /*createSlice,*/ configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./auth-slice";
import  counterReducer  from "./counter-slice";
//const initialState = { value: 0, showCounter: true };


export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

//createSlice takes an object with a name and an initial state, and an object with reducers
//you can directly mutate the state in the reducers
/*
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
*/
/*
//with normal redux, you cannot mutate the stae directly, you have to return a new state object
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + 1 };
    case "DECREMENT":
      return { ...state, value: state.value - 1 };
    case "INCREASE":
      return { ...state, value: state.value + action.amount };
    case "TOGGLE":
      return { ...state, showCounter: !state.showCounter };
    default:
      return state;
  }
};


const store = createStore(reducer, { value: 0 });
*/

//const store = createStore(counterSlice.reducer);
/*
const userSlice = createSlice({
  name: "user",
  initialState: { isAuthenticated: false },
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
*/

const store = configureStore({
  reducer: { counter: counterReducer, user: userReducer },
});

export default store;
