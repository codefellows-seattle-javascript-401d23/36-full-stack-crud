export default store => next => (action) => {
  const result = next(action); // make sure the chain completes
  const state = store.getState(); // get the final state

  for (const key in state) { //eslint-disable-line
    if (Object.prototype.hasOwnProperty.call(state, key)) {
      localStorage[key] = JSON.stringify(state[key]);
    }
  }
  return result;
};

