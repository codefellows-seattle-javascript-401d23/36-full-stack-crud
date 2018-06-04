import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PodcastForm from '../podcast-form/podcast-form';
import Modal from '../modal/modal';
import * as podcastActions from '../../actions/podcast-actions';

class PodcastItem extends React.Component {
  render() {
    const { podcast, podcastDelete, podcastUpdate } = this.props;
    const showModal = () => podcastUpdate({ ...podcast, editing: true });
    const hideModal = () => podcastUpdate({ ...podcast, editing: false });
    const updateAndClose = (updatedPodcast) => {
      podcastUpdate({ ...updatedPodcast, editing: false });
    };
    return (
      <div className='podcast-item'>
        <h3>{podcast.name}</h3>
        <h4>{podcast.host}</h4>
        {podcast.genre && <p>Genre: {podcast.genre}</p>}
        {podcast.parentCompany && <p>Parent Company: {podcast.parentCompany}</p>}
        <button onClick={() => podcastDelete(podcast)}>X</button>
        <button onClick={showModal}>edit</button>
        <Modal show={podcast.editing} handleClose={hideModal}>
          <PodcastForm onComplete={updateAndClose} buttonText='update' podcast={podcast}/>
        </Modal>
      </div>
    );
  }
}

PodcastItem.propTypes = {
  podcast: PropTypes.object,
  podcastDelete: PropTypes.func,
  podcastUpdate: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  podcastDelete: data => dispatch(podcastActions.podcastDeleteRequest(data)),
  podcastUpdate: data => dispatch(podcastActions.podcastUpdateRequest(data)),
});

export default connect(null, mapDispatchToProps)(PodcastItem);

