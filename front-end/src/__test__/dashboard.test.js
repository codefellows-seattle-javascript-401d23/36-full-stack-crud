// import React from 'react';
// import Adapter from 'enzyme-adapter-react-16';
// import { Provider } from 'react-redux';
// import { configure as configureEnzyme, shallow as enzymeShallowMount, mount } from 'enzyme';
// import configureStore from 'redux-mock-store';
// import Dashboard from '../components/dashboard/dashboard';

// configureEnzyme({ adapter: new Adapter() });

// describe('#Dashboard', () => {
//   const initialState = {
//     cities: [{
//       name: 'Seattle',
//       population: 1000000,
//       _id: '0.123',
//       timestamp: new Date(),
//     },
//     {
//       name: 'Tacoma',
//       population: 500000,
//       _id: '0.987',
//       timestamp: new Date(),
//     }],
//   };

//   test('should return truthy for city form and number of cities should be 2', () => {
//     const mockStore = configureStore([]);
//     const mountedDashboard = mount(<Provider store={mockStore(initialState)}>
//         <Dashboard />
//       </Provider>);

//     console.log(mountedDashboard.html());

//     expect(mountedDashboard.find('CityForm')).toBeTruthy();
//   });
// });
