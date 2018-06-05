import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as countryActions from '../../action/country';
import CountryForm from '../country-form/country-form';

class Country extends React.Component {
  render() {
    const {
      country,
      key,
      countryRemove,
      countryUpdate,
    } = this.props;
    return (
      <div className='country' key={key}>
        <h2>{country.countryName}</h2>
        <h3>Continent: {country.continent}</h3>
        <p>{country.info}</p>
        <button onClick={() => countryRemove(country)}> Delete </button>
        <CountryForm country={country} onComplete={countryUpdate}/>
      </div>
    );
  }
}

Country.propTypes = {
  country: PropTypes.object,
  key: PropTypes.number,
  countryRemove: PropTypes.func,
  countryUpdate: PropTypes.func,
};


const mapDispatchToProps = (dispatch) => {
  return {
    countryRemove: data => dispatch(countryActions.remove(data)),
    countryUpdate: data => dispatch(countryActions.update(data)),
  };
};

export default connect(null, mapDispatchToProps)(Country);
