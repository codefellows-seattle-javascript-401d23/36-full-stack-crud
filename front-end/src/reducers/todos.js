import { validateToDo } from '../utils/index';

const defaultState = [];

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'TODOS_FETCH':
      return payload;
    
    case 'TODO_CREATE':
      validateToDo(payload);
      return [payload, ...state];

    case 'TODO_UPDATE':
      validateToDo(payload);
      return state.map(item => (item._id === payload._id ? payload : item));

    case 'TODO_DELETE':
      validateToDo(payload);
      return state.filter(item => item._id !== payload._id);
      
    default:
      return state;
  }
};
