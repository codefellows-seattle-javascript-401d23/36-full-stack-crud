import { validateContinent } from '../utils';

const emptyState = [];

export default (state = emptyState, { type, payload }) => {
  switch (type) {
    case 'CONTINENTS_FETCH':
      return payload;
    case 'CONTINENT_CREATE':
      validateContinent(payload);
      return [payload, ...state];
    case 'CONTINENT_UPDATE':
      validateContinent(payload);
      return state.map(item => (item._id === payload._id ? payload : item));
    case 'CONTINENT_DELETE':
      validateContinent(payload);
      return state.filter(item => item._id !== payload._id);
    default:
      return state;
  }
};
