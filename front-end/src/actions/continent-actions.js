import superagent from 'superagent';

const continentsFetch = continents => ({
  type: 'CONTINENTS_FETCH',
  payload: continents,
});

const continentCreate = continent => ({
  type: 'CONTINENT_CREATE',
  payload: continent,
});

const continentUpdate = continent => ({
  type: 'CONTINENT_UPDATE',
  payload: continent,
});

const continentDelete = continent => ({
  type: 'CONTINENT_DELETE',
  payload: continent,
});

const continentsFetchRequest = () => (dispatch) => {
  return superagent.get(`${API_URL}/api/continents`)
    .then((response) => {
      dispatch(continentsFetch(response.body));
      return response;
    });
};

const continentCreateRequest = continent => (dispatch) => {
  return superagent.post(`${API_URL}/api/continents`)
    .send(continent)
    .then((response) => {
      dispatch(continentCreate(response.body));
      return response;
    });
};

const continentUpdateRequest = continent => (dispatch) => {
  return superagent.put(`${API_URL}/api/continents/${continent._id}`)
    .send(continent)
    .then((response) => {
      dispatch(continentUpdate(continent));
      return response;
    });
};

const continentDeleteRequest = continent => (dispatch) => {
  return superagent.delete(`${API_URL}/api/continents/${continent._id}`)
    .then((response) => {
      dispatch(continentDelete(continent));
      return response;
    });
};

export { continentsFetchRequest, continentCreateRequest, continentUpdateRequest, continentDeleteRequest }; // eslint-disable-line
