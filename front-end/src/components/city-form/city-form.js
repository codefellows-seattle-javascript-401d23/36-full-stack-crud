import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/index';

const defaultState = { name: '', population: '', error: null };

export default class CityForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.city ? props.city : defaultState;

    autoBind.call(this, CityForm);
  }

  componentDidUpdate(previousProps) {
    if (previousProps.city !== this.props.city) {
      this.setState(this.props.city);
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
          console.error('CITY FORM ERROR: ', error);
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
      <form
        onSubmit={this.handleSubmit}
        className="city-form"
      >
        <input
          name="name"
          type="text"
          placeholder="Enter city name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name="population"
          type="number"
          placeholder="Population"
          value={this.state.population}
          onChange={this.handleChange}
        />
        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

CityForm.propTypes = {
  onComplete: PropTypes.func,
  city: PropTypes.object,
  buttonText: PropTypes.string,
};
