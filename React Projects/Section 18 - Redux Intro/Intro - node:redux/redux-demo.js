const redux = require("redux");

const counterReducer = (state, action) => {
    newState = { ...state };
    if (action.type === "increment") {
        newState.counter = newState.counter + action.value;
    }

    if (action.type === "decrement") {
        newState.counter--;
    }

    return newState;
};

const store = redux.createStore(counterReducer, { counter: 0 });


const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment", value: 10});
store.dispatch({ type: "increment", value: 23 });
store.dispatch({ type: "increment", value: 3 });
store.dispatch({ type: "decrement" });

