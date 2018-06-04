import React from 'react';
import PropTypes from 'prop-types';
import autoBind from './../../utils/index';

const defaultState = { name: '', error: null };

export default class FoodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.food ? props.food : defaultState;
    autoBind.call(this, FoodForm);
  }

  componentDidUpdate(previousProps) {
    if (previousProps.food !== this.props.food) {
      this.setState(this.props.food);
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
          console.error('FOOD FORM ERROR: ', error);
          this.setState({ error });
        });
    }
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <form
        onSubmit = {this.handleSubmit}
        className = 'food-form'
      >
        <input
          name = "name"
          type = "text"
          placeholder = "Enter a food name"
          value = { this.state.name }
          onChange = { this.handleChange}
        />
        <button type = "submit"> { this.props.buttonText }</button>
      </form>
    );
  }
}

FoodForm.propTypes = {
  onComplete: PropTypes.func,
  food: PropTypes.object,
  buttonText: PropTypes.string,
};
