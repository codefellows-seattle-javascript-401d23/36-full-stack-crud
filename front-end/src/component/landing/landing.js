import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as countryActions from '../../action/country';
import CountryForm from '../country-form/country-form';
import Country from '../country/country';

class Landing extends React.Component {
  render() {
    const { countries, countryCreate } = this.props;
    return (
      <div className='landing'>
        <CountryForm onComplete={countryCreate}/>
        {
          countries.map((currentCountry, i) =>
            <Country country={currentCountry} key={i}/>)
        }
      </div>
    );
  }
}

Landing.propTypes = {
  countries: PropTypes.array,
  countryCreate: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    countryCreate: data => dispatch(countryActions.create(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
