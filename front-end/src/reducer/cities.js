import { validateCity } from '../utils/index';

const emptyState = [];

export default (state = emptyState, { type, payload }) => {
  switch (type) {
    case 'CITIES_FETCH':
      return payload;
    case 'CITY_CREATE':
      validateCity(payload);
      return [payload, ...state];
    case 'CITY_UPDATE':
      validateCity(payload);
      return state.map(item => (item._id === payload._id ? payload : item));
    case 'CITY_DELETE':
      validateCity(payload);
      return state.filter(item => item._id !== payload._id);
    default:
      return state;
  }
};
