import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContinentForm from './../continent-form/continent-form';
import * as continentActions from '../../actions/continent-actions';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.continentsFetch();
  }

  render() {
    const { 
      continents, continentCreate, continentUpdate, continentDelete,
    } = this.props;
    return (
      <div className='dashboard'>
        <h2>Continent App</h2>
        <ContinentForm 
          onComplete={continentCreate}
          buttonText='Create Continent'
        />
        {
          continents.map((continent) => {
            return (
              <div key={continent._id}>
                <h2>{continent.location}</h2>
                <p>{continent.description}</p>
                <button onClick={() => continentDelete(continent)}>Delete</button>
                <ContinentForm 
                  continent={continent}
                  onComplete={continentUpdate}
                  buttonText='Update Continent'
                />
              </div>
            );
          })
        }
      </div>
    );
  }
}

Dashboard.propTypes = {
  continentsFetch: PropTypes.func,
  continentCreate: PropTypes.func,
  continentUpdate: PropTypes.func,
  continentDelete: PropTypes.func,
  continents: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    continents: state.continents,
  };
};

const mapDispatchToProps = dispatch => ({
  continentsFetch: () => dispatch(continentActions.continentsFetchRequest()),
  continentCreate: continent => dispatch(continentActions.continentCreateRequest(continent)),
  continentUpdate: continent => dispatch(continentActions.continentUpdateRequest(continent)),
  continentDelete: continent => dispatch(continentActions.continentDeleteRequest(continent)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
