const redux = require("redux");
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;

//Actions
const UPDATE_STREET = "UPDATE_STREET";
//actions creator
const updateStreet = (street) => {
  return {
    type: UPDATE_STREET,
    payload: street,
  };
};

//Reducer

const initialState = {
  name: "Bilal",
  occupation: "student",
  address: {
    street: "akhuwat nagar",
    city: "sukkur",
    province: "sindh",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STREET:
      return {
        ...state,
        address: {
          ...state.address,
          street: action.payload,
        },
      };
    default:
      return state;
  }
};

// store
const store = createStore(reducer);

const unsubscribe = store.subscribe(() => {
  console.log("store is subscribed");
});

store.dispatch(updateStreet("sukkur Iba"));
console.log(store.getState());

unsubscribe();
