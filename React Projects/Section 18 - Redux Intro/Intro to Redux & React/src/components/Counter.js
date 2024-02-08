import classes from "./Counter.module.css";
import { useSelector, useDispatch /*connect*/ } from "react-redux";
//import  { INCREMENT, DECREMENT} from "../store/index";
import { counterActions } from "../store/counter-slice";

//import { Component } from "react";

const Counter = () => {
  //const counter = useSelector((state) => state.value);
  //const showCounter = useSelector((state) => state.showCounter);

  const counter = useSelector((state) => state.counter.value);
  const showCounter = useSelector((state) => state.counter.showCounter);
  
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };
  function incrementHandler() {
    dispatch(counterActions.increment());
  }
  function increaseHandler(amount) {
    dispatch(counterActions.increase({amount: amount}));
  }

  function decrementHandler() {
    dispatch(counterActions.decrement());
  }

  console.log(counter, showCounter) 

  return (
    <main className={classes.counter}>
      <h1>Redux Poop Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>Decrement Poop</button>
        <button
          onClick={() => {
            increaseHandler(5);
          }}
        >
          Increase By 5
        </button>
        <button onClick={incrementHandler}>Increment Poop</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter2 extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Poop Counter</h1>
//         <div className={classes.value}>{this.props.value}</div>
//         <div>
//           <button onClick={this.decrementHandler.bind(this)}>
//             Decrement Poop
//           </button>
//           <button onClick={this.incrementHandler.bind(this)}>
//             Increment Poop
//           </button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     value: state.value,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "INCREMENT" }),
//     decrement: () => dispatch({ type: "DECREMENT" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter2);
export default Counter;
