const redux = require("redux");
const creteStore = redux.createStore;
//Action
const CAKE_ORDERED = "CAKE_ORDERED";

const orderCake = (quantity) => {
  return {
    type: CAKE_ORDERED,
    quantity,
  };
};

//Reducer (previous state, action) => newState

const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.quantity,
      };

    default:
      return state;
  }
};

// Rdux store
// holds application state, Allow access to state via getState(),
// Allow state to be updated via dispatch(action)
// register listeners via subscribe(listener)
// handle unregistering of listeners via the function returned by subscribe(listener)

const store = creteStore(reducer);
console.log("this is state: ", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(orderCake(2));
store.dispatch(orderCake(1));
store.dispatch(orderCake(0));

unsubscribe();
