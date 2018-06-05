export default store => next => (action) => {
  try {
    console.log('++ACTION++', action);
    const result = next(action);
    console.log('++STATE++', store.getState());
    return result;
  } catch (error) {
    console.log('++ERROR++', error);
    action.error = error;
    return action;
  }
};
