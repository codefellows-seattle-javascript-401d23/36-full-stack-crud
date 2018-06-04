import React from 'react';
import PropTypes from 'prop-types';
import autobind from '../../utils';

const defaultState = {
  name: '',
  genre: '',
  host: '',
  parentCompany: '',
  error: null,
};

export default class PodcastForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.podcast ? props.podcast : defaultState;
    autobind.call(this, PodcastForm);
  }
  componentDidUpdate(previousProps) {
    if (previousProps.podcast !== this.props.podcast) {
      this.setState(this.props.podcast);
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    const { onComplete } = this.props;
    const result = onComplete(this.state);
    if (result instanceof Promise) {
      result.then(() => {
        this.setState(defaultState);
      })
        .catch((err) => {
          console.error('PODCAST FORM ERROR: ', err);
          this.setState({ error: err });
        });
    }
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form className='podcast-form' onSubmit={this.handleSubmit}>
        <input
          name='name'
          type='text'
          value={this.state.name}
          placeholder='name'
          onChange={this.handleChange}
          required
        />
        <input
          name='genre'
          type='text'
          value={this.state.genre}
          placeholder='genre'
          onChange={this.handleChange}
          required
        />
        <input
          name='host'
          type='text'
          value={this.state.host}
          placeholder='host(s)'
          onChange={this.handleChange}
          required
        />
        <input
          name='parentCompany'
          type='text'
          value={this.state.parentCompany}
          placeholder='parent company'
          onChange={this.handleChange}
          required
        />
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}

PodcastForm.propTypes = {
  podcast: PropTypes.object,
  onComplete: PropTypes.func,
  buttonText: PropTypes.string,
};
