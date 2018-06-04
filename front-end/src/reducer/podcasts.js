const emptyState = [];

export default (state = emptyState, { type, payload }) => {
  switch (type) {
    case 'PODCAST_FETCH':
      return payload;
    case 'PODCAST_CREATE':
      return [payload, ...state];
    case 'PODCAST_UPDATE':
      return state.map(item => (item._id === payload._id ? payload : item));
    case 'PODCAST_DELETE':
      return state.filter(item => item._id !== payload._id);
    default:
      return state;
  }
};
