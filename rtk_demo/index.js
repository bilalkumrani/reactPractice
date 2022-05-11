const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamAcions =
  require("./features/iceCream/iceCreamSlice").iceCreamAcions;

const unsubscribe = store.subscribe(() => {});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(5));

store.dispatch(iceCreamAcions.ordered());
store.dispatch(iceCreamAcions.ordered());
store.dispatch(iceCreamAcions.restocked(50));

unsubscribe();
