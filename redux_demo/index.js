const redux = require("redux");
const creteStore = redux.createStore;
const combineReducers = redux.combineReducers;
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

//Now shop wants to sell iceCreams as wll
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

const iceCreamOrdered = (quatity = 1) => {
  return {
    type: ICECREAM_ORDERED,
    payload: quatity,
  };
};

const iceCreamRestocked = (quatity = 1) => {
  return {
    type: ICECREAM_RESTOCKED,
    payload: quatity,
  };
};
//Reducer (previous state, action) => newState

// const initialState = {
//   numOfCakes: 10,
// };

const cakeState = {
  numOfCakes: 10,
};

const iceCreamState = {
  numOfIceCreams: 20,
};

const cakeReducer = (state = cakeState, action) => {
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

const iceCreamReducer = (state = iceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload,
      };

    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
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

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = creteStore(rootReducer);
console.log("this is state: ", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(orderCake(2));
store.dispatch(orderCake(1));
store.dispatch(orderCake(0));

store.dispatch(cakeRestocked(10));

store.dispatch(iceCreamOrdered());
store.dispatch(iceCreamOrdered());
store.dispatch(iceCreamRestocked(10));

unsubscribe();

// other example

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
