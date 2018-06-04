import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PodcastForm from '../podcast-form/podcast-form';
import * as podcastActions from '../../actions/podcast-actions';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.podcastFetch();
  }
  render() {
    const { podcasts, podcastCreate, podcastDelete } = this.props;
    return (
      <div className='dashboard'>
        <h2>My Podcasts</h2>
        <PodcastForm
          onComplete={podcastCreate}
          buttonText='add to list'
        />
        {
          podcasts.map((podcast) => {
            return (
              <div className='podcast-item' key={podcast._id}>
                <h3>{podcast.name}</h3>
                <h4>{podcast.host}</h4>
                <p>Genre: {podcast.genre}</p>
                <p>Parent Company: {podcast.parentCompany}</p>
                <button onClick={() => podcastDelete(podcast)}>X</button>
              </div>
            );
          })
        }
      </div>
    );
  }
}

Dashboard.propTypes = {
  podcastFetch: PropTypes.func,
  podcasts: PropTypes.array,
  podcastCreate: PropTypes.func,
  podcastDelete: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    podcasts: state.podcasts,
  };
};

const mapDispatchToProps = dispatch => ({
  podcastFetch: () => dispatch(podcastActions.podcastFetchRequest()),
  podcastCreate: data => dispatch(podcastActions.podcastCreateRequest(data)),
  podcastDelete: data => dispatch(podcastActions.podcastDeleteRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
