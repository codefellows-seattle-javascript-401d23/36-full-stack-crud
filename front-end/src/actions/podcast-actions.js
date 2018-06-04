import superagent from 'superagent';
// const API_URL = process.env.API_URL;

const podcastFetch = payload => ({
  type: 'PODCAST_FETCH',
  payload,
});

const podcastCreate = payload => ({
  type: 'PODCAST_CREATE',
  payload,
});

const podcastUpdate = payload => ({
  type: 'PODCAST_UPDATE',
  payload,
});

const podcastDelete = payload => ({
  type: 'PODCAST_DELETE',
  payload,
});

const podcastFetchRequest = () => (dispatch) => {
  console.log('FETCHING FROM', API_URL);
  return superagent.get(`${API_URL}/api/podcasts`)
    .then((response) => {
      dispatch(podcastFetch(response.body));
      return response;
    });
};

const podcastCreateRequest = podcast => (dispatch) => {
  return superagent.post(`${API_URL}/api/podcasts`)
    .send(podcast)
    .then((response) => {
      dispatch(podcastCreate(response.body));
      return response;
    });
};

const podcastUpdateRequest = podcast => (dispatch) => {
  return superagent.put(`${API_URL}/podcasts/${podcast._id}`)
    .send(podcast)
    .then((response) => {
      dispatch(podcastUpdate(podcast));
      return response;
    });
};

const podcastDeleteRequest = podcast => (dispatch) => {
  return superagent.del(`${API_URL}/api/podcasts/${podcast._id}`)
    .then((response) => {
      dispatch(podcastDelete(podcast));
      return response;
    });
};

export { podcastFetchRequest, podcastCreateRequest, podcastUpdateRequest, podcastDeleteRequest };
