const emptyState = [];

export default (state = emptyState, { type, payload }) => {
  switch (type) {
    case 'COUNTRY_CREATE':
      return [...state, payload];
    case 'COUNTRY_UPDATE':
      return state.map(country => (country.id === payload.id ? payload : country));
    case 'COUNTRY_REMOVE':
      return state.filter(country => country.id !== payload.id);
    default:
      return state;
  }
};
