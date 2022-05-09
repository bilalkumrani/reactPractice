const redux = require("redux");
const creteStore = redux.createStore;
//Action
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

const cakeRestocked = (quantity = 1) => {
  return {
    type: CAKE_RESTOCKED,
    payload: quantity,
  };
};

const orderCake = (quantity = 1) => {
  return {
    type: CAKE_ORDERED,
    payload: quantity,
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
        numOfCakes: state.numOfCakes - action.payload,
      };

    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: action.payload,
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

store.dispatch(cakeRestocked(10));

unsubscribe();

// const redux = require("redux");
// const createStore = redux.createStore;
// // Actions

// const INCREMENT = "INCREMENT";
// const DECREMENT = "DECREMENT";

// const increment = (quantity) => {
//   return {
//     type: INCREMENT,
//     quantity,
//   };
// };
// const decrement = (quantity) => {
//   return {
//     type: DECREMENT,
//     quantity,
//   };
// };
// // reducer

// const initialState = {
//   counter: 0,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         counter: state.counter + action.quantity,
//       };
//     case DECREMENT:
//       return {
//         ...state,
//         counter: state.counter - action.quantity,
//       };

//     default:
//       return state;
//   }
// };

// // Store

// const store = createStore(reducer);
// const unsubscribe = store.subscribe(() => console.log("store is subscribed"));

// store.dispatch(increment(4));
// console.log(store.getState());

// store.dispatch(decrement(2));

// console.log(store.getState());
