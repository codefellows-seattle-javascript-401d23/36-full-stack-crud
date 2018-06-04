import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PodcastForm from '../podcast-form/podcast-form';
import PodcastItem from '../podcast-item/podcast-item';
import * as podcastActions from '../../actions/podcast-actions';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.podcastFetch();
  }
  render() {
    const { podcasts, podcastCreate } = this.props;
    return (
      <div className='dashboard'>
        <h2>My Podcasts</h2>
        <PodcastForm
          onComplete={podcastCreate}
          buttonText='add to list'
        />
        {
          podcasts.map((podcast) => {
            return (<PodcastItem podcast={podcast} key={podcast._id}/>);
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
};

const mapStateToProps = (state) => {
  return {
    podcasts: state.podcasts,
  };
};

const mapDispatchToProps = dispatch => ({
  podcastFetch: () => dispatch(podcastActions.podcastFetchRequest()),
  podcastCreate: data => dispatch(podcastActions.podcastCreateRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
