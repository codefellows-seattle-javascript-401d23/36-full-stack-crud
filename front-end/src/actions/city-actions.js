import superagent from 'superagent';

const citiesFetch = cities => ({
  type: 'CITIES_FETCH',
  payload: cities,
});

const cityCreate = city => ({
  type: 'CITY_CREATE',
  payload: city,
});

const cityUpdate = city => ({
  type: 'CITY_UPDATE',
  payload: city,
});

const cityDelete = city => ({
  type: 'CITY_DELETE',
  payload: city,
});

const citiesFetchRequest = () => (dispatch) => {
  return superagent.get(`${API_URL}/api/cities`)
    .then((response) => {
      dispatch(citiesFetch(response.body));
      return response;
    });
};

const cityCreateRequest = city => (dispatch) => {
  return superagent.post(`${API_URL}/api/cities`)
    .send(city)
    .then((response) => {
      dispatch(cityCreate(response.body));
      return response;
    });
};

const cityDeleteRequest = city => (dispatch) => {
  return superagent.delete(`${API_URL}/api/cities/${city._id}`)
    .then((response) => {
      dispatch(cityDelete(city));
      return response;
    });
};

const cityUpdateRequest = city => (dispatch) => {
  return superagent.put(`${API_URL}/api/cities/${city._id}`)
    .then((response) => {
      dispatch(cityUpdate(city));
      return response;
    });
};

export { citiesFetchRequest, cityCreateRequest, cityDeleteRequest, cityUpdateRequest };

