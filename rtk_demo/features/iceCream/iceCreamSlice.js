const createSlice = require("@reduxjs/toolkit").createSlice;
const cakeActions = require("../cake/cakeSlice").cakeActions;

const initialState = {
  numOficeCream: 20,
};
const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered(state, action) {
      state.numOficeCream -= 1;
    },
    restocked(state, action) {
      state.numOficeCream += action.payload;
    },
  },
  // this is what we want when we buy one cake we will give one icecream free so both should decrease
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOficeCream -= 1;
    });
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamAcions = iceCreamSlice.actions;
