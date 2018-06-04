import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CityForm from '../city-form/city-form';
import * as cityActions from '../../actions/city-actions';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.citiesFetch();
  }

  render() {
    const { 
      cities, 
      cityCreate, 
      cityDelete, 
      cityUpdate,
    } = this.props;
    
    return (
      <div className="dashboard">
        <h2>City/Restaurant List App</h2>
        <CityForm 
          onComplete={cityCreate}
          buttonText="Create City"
        />
        {
          cities.map((city) => {
            return (
              <div key={city._id}>
                <p>{city.name}</p>
                  <CityForm 
                    onComplete={cityUpdate}
                    buttonText="Update"
                    city={city}
                  />
                <button onClick={() => cityDelete(city)}>Delete</button>
                {/* <button onClick={() => cityUpdate(city)}>Update</button> */}
              </div>
            );
          })
        }
      </div>
    );
  }
}

Dashboard.propTypes = {
  citiesFetch: PropTypes.func,
  cityCreate: PropTypes.func,
  cityDelete: PropTypes.func,
  cityUpdate: PropTypes.func,
  cities: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    cities: state.cities,
  };
};

const mapDispatchToProps = dispatch => ({
  citiesFetch: () => dispatch(cityActions.citiesFetchRequest()),
  cityCreate: city => dispatch(cityActions.cityCreateRequest(city)),
  cityDelete: city => dispatch(cityActions.cityDeleteRequest(city)),
  cityUpdate: city => dispatch(cityActions.cityUpdateRequest(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
