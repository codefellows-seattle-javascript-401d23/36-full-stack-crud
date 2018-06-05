import uuid from 'uuid';

const create = ({ countryName, continent, info }) => ({
  type: 'COUNTRY_CREATE',
  payload: {
    countryName: countryName,
    continent: continent,
    info: info,
    id: uuid(),
  },
});

const update = country => ({
  type: 'COUNTRY_UPDATE',
  payload: country,
});

const remove = country => ({
  type: 'COUNTRY_REMOVE',
  payload: country,
});

export { create, update, remove };
