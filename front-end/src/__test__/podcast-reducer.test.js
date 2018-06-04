import podcastReducer from '../reducer/podcasts';

describe('podcast reducer', () => {
  const testState = {
    podcasts: [
      {
        name: 'Test',
        host: 'Guy',
        _id: 1,
      },
    ],
  };
  const newPodcast = {
    name: 'Second one',
    host: 'Girl',
    _id: 1,
  };
  test('PODCAST_FETCH, should return payload', () => {
    const action = {
      type: 'PODCAST_FETCH',
      payload: newPodcast,
    };
    expect(podcastReducer(testState, action)).toEqual(newPodcast);
  });
  test('PODCAST_CREATE, should return array with payload added', () => {
    const action = {
      type: 'PODCAST_CREATE',
      payload: newPodcast,
    };
    expect(podcastReducer({}, action)).toEqual([newPodcast]);
  });
  test('PODCAST_UPDATE, should return array with updated podcast', () => {
    const action = {
      type: 'PODCAST_UPDATE',
      payload: newPodcast,
    };
    expect(podcastReducer(testState.podcasts, action)).toEqual([newPodcast]);
  });
  test('PODCAST_DELETE, should return array with podcast removed', () => {
    const action = {
      type: 'PODCAST_DELETE',
      payload: newPodcast,
    };
    expect(podcastReducer(testState.podcasts, action)).toEqual([]);
  });
  test('default, should return state', () => {
    const action = {
      type: 'SOMETHING_ELSE',
      payload: newPodcast,
    };
    expect(podcastReducer({}, action)).toEqual({});
  });
});
