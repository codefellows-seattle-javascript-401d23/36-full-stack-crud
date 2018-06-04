import superagent from 'superagent';

const foodFetch = foods => ({
  type: 'FOOD_FETCH',
  payload: foods,
});

const foodCreate = food => ({
  type: 'FOOD_CREATE',
  payload: food,
});

const foodUpdate = food => ({
  type: 'FOOD_UPDATE',
  payload: food,
});

const foodDelete = food => ({
  type: 'FOOD_DELETE',
  payload: food,
});

const foodFetchRequest = () => (dispatch) => {
  return superagent.get(`${API_URL}/api/food`)
    .then((response) => {
      dispatch(foodFetch(response.body));
      return response;
    });
};

const foodCreateRequest = food => (dispatch) => {
  return superagent.post(`${API_URL}/api/food`)
    .send(food)
    .then((response) => {
      dispatch(foodCreate(response.body));
      return response;
    });
};

const foodUpdateRequest = food => (dispatch) => {
  return superagent.put(`${API_URL}/api/food/${food._id}`)
    .then((response) => {
      dispatch(foodUpdate(food));
      return response;
    });
};

const foodDeleteRequest = food => (dispatch) => {
  return superagent.delete(`${API_URL}/api/food/${food._id}`)
    .then((response) => {
      dispatch(foodDelete(food));
      return response;
    });
};

export { foodFetchRequest, foodCreateRequest, foodUpdateRequest, foodDeleteRequest };
