import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/utils';
import Modal from '../modal/modal';
import './country-form.scss';

const defaultState = {
  countryName: '',
  continent: '',
  info: '',
  editing: false,
};

class CountryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.country || defaultState;
    autoBind.call(this, CountryForm);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      editing: false,
    });
    this.props.onComplete(this.state);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  handleShowModal() {
    this.setState({
      editing: true,
    });
  }
  handleHideModal() {
    this.setState({
      editing: false,
    });
  }
  render() {
    const buttonText = this.props.country ? 'Update' : 'Add';

    return (
      <div className='country-block'>
        <button onClick={this.handleShowModal}>Add a Country</button>
      <Modal show={this.state.editing} handleClose={this.handleHideModal}>
      <form onSubmit={this.handleSubmit}
      className='country-form'>
        <input
          type='text'
          name='countryName'
          placeholder='Country Name'
          value={this.state.countryName}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='continent'
          placeholder='Continent'
          value={this.state.continent}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='info'
          placeholder='Info'
          value={this.state.info}
          onChange={this.handleChange}
        />
        <br/>
        <button type="submit">{buttonText} Country</button>
      </form>
      </Modal>
      </div>
    );
  }
}
CountryForm.propTypes = {
  country: PropTypes.object,
  onComplete: PropTypes.func,
};

export default CountryForm;
