import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils';

const defaultState = {
  title: '',
  error: null,
};

export default class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.todo ? props.todo : defaultState;
    autoBind.call(this, ToDoForm);
  }

  componentDidUpdate(previousProps) {
    if (previousProps.todo !== this.props.todo) {
      this.setState(this.props.todo);
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
          console.error('TODO FORM ERROR: ', error);
          this.setState({ error });
        });
    }
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ title: event.target.value });
  }

  // static getDerivedStateFromProps(nextProps) {
  //   if (nextProps.category) {
  //     return nextProps.category;
  //   }
  //   return defaultState;
  // }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className='todo-form'>
        <br/><br/>
        <input
          type='title'
          name='text'
          placeholder='Enter a todo title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}

ToDoForm.propTypes = {
  onComplete: PropTypes.func,
  todo: PropTypes.object,
  buttonText: PropTypes.string,
};