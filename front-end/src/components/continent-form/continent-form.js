import React from 'react';
import PropTypes from 'prop-types';
import autoBind from './../../utils';

const defaultState = { 
  location: '', 
  description: '', 
  error: null, 
};

export default class ContinentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.continent ? props.continent : defaultState;

    autoBind.call(this, ContinentForm);
  }

  componentDidUpdate(previousProps) {
    if (previousProps.continent !== this.props.continent) {
      this.setState(this.props.continent);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onComplete } = this.props;
    const result = onComplete(this.state);
    if (result instanceof Promise) {
      result
        .then(() => {
          this.setState(defaultState);
        })
        .catch((error) => {
          console.error('CONTINENT FORM ERROR: ', error);
          this.setState({ error });
        });
    }
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="continent-form"
      >
        <input 
          name="location"
          type="text"
          placeholder="Continent location"
          value={this.state.location}
          onChange={this.handleChange}
        />
        <input 
          name="description"
          type="text"
          placeholder="Continent description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

ContinentForm.propTypes = {
  onComplete: PropTypes.func,
  continent: PropTypes.object,
  buttonText: PropTypes.string,
};
