//what i want to accomplish

// application
// 1- fetches list of users from api endpoint and stores it in the redux store.
/*
    state will look like this

    state = {
        loading: true,
        data:[],
        error:""
    }


    Actions will be like this

    FETCH_USERS_REQUESTED --> fetch list of users
    FETCH_USERS_SUCCEEDED --> fetched successfully
    FETCH_USERS_FAILED --> error when fetching data




    Reducer will be like this

    case FETCH_USERS_REQUESTED:
        loading: true

    case FETCH_USERS_SUCCEEDED:
        loading: false
        users: data(from api)

    case FETCH_USERS_FAILED:
        loading: false
        error: error(error from api)



Async Action creators:
axios--> request to an api endpoint
redux-thunk--> define async action creators (it is middleware)


*/

const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleWare = redux.applyMiddleware;
const thunkMiddleWare = require("redux-thunk").default;
const axios = require("axios");
//state
const initialState = {
  loading: false,
  data: [],
  error: "",
};

//constants

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case FETCH_USERS_FAILED:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };

    default:
      return state;
  }
};

const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data.map((user) => {
          return user.id;
        });
        dispatch(fetchUsersSuccess(users));
      })
      .catch((err) => {
        dispatch(fetchUsersFailure(err));
      });
  };
};

const store = createStore(reducer, applyMiddleWare(thunkMiddleWare));
const unsubscribe = store.subscribe(() => {
  console.log("subscribed to the store: ", store.getState());
});

store.dispatch(fetchUsers());

unsubscribe();
