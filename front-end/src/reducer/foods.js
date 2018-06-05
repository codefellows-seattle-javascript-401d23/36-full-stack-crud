import { validateFood } from '../utils/index';

const emptyState = [];

export default (state = emptyState, { type, payload }) => {
  switch (type) {
    case 'FOOD_FETCH':
      return payload;
    case 'FOOD_CREATE':
      validateFood(payload);
      return [payload, ...state];
    case 'FOOD_UPDATE':
      validateFood(payload);
      return state.map(item => (item._id === payload._id ? payload : item));
    case 'FOOD_DELETE':
      validateFood(payload);
      return state.filter(item => item._id !== payload._id);
    default: 
      return state;
  }
};
