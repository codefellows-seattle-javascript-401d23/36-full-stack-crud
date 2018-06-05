import superagent from 'superagent';

const parcelsFetch = parcels => ({ 
  type: 'PARCELS_FETCH', 
  payload: parcels,
});

const parcelCreate = parcel => ({
  type: 'PARCEL_CREATE',
  payload: parcel,
});
const parcelUpdate = parcel => ({
  type: 'PARCEL_UPDATE',
  payload: parcel,
});
const parcelDelete = parcel => ({
  type: 'PARCEL_DELETE',
  payload: parcel,
});

const parcelsFetchRequest = () => (dispatch) => {
  return superagent.get(`${API_URL}/api/parcels`)
    .then((response) => {
      dispatch(parcelsFetch(response.body));
      return response; 
    }); 
};

const parcelCreateRequest = parcel => (dispatch) => {
  return superagent.post(`${API_URL}/api/parcels`)
    .send(parcel)
    .then((response) => {
      dispatch(parcelCreate(response.body));
      return response;
    });
};
const parcelUpdateRequest = parcel => (dispatch) => {
  return superagent.put(`${API_URL}/api/parcels/${parcel._id}`) 
    .send(parcel)
    .then((updatedParcel) => {
      dispatch(parcelUpdate(updatedParcel.body));
      return updatedParcel.body;
    });
};
const parcelDeleteRequest = parcel => (dispatch) => {
  return superagent.delete(`${API_URL}/api/parcels/${parcel._id}`) 
    .then((response) => {
      dispatch(parcelDelete(parcel));
      return response;
    });
};

export { parcelsFetchRequest, parcelCreateRequest, parcelUpdateRequest, parcelDeleteRequest };
