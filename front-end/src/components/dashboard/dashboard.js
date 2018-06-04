import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FoodForm from './../food-form/food-form';
import * as foodActions from '../../actions/food-actions';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.foodFetch();
  }
  render() {
    const { foods, foodCreate, foodDelete } = this.props;
    return (
      <div className = 'dashboard'>
        <h2>Food App</h2>
        <FoodForm
          onComplete = { foodCreate }
          buttonText = 'Create Food'
        />
        {
          foods.map((food) => {
            return (
              <div key = { food._id }>
                <p> { food.name } </p>
                <button onClick = {() => foodDelete(food)}>X</button>
              </div>
            );
          })
        }
      </div>
    );
  }
}

Dashboard.PropTypes = {
  foodFetch: PropTypes.func,
  foodCreate: PropTypes.func,
  foodDelete: PropTypes.func,
  foods: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    foods: state.foods,
  };
};

const mapDispatchToProps = dispatch => ({
  foodFetch: () => dispatch(foodActions.foodFetchRequest()),
  foodCreate: food => dispatch(foodActions.foodCreateRequest(food)),
  foodDelete: food => dispatch(foodActions.foodDeleteRequest(food)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
