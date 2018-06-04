import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TodoForm from './../todo-form/todo-form';
import * as todoActions from '../../actions/todo-actions';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.todosFetch();
  }

  render() {
    const { todos, todoCreate, todoDelete } = this.props;
    return (
      <div className='dashboard'>
        <h1>Welcome to the Todo App</h1>
        <TodoForm onComplete={todoCreate} buttonText='Create Todo Item' />
        {
          todos.map((todo) => {
            return (
              <div key={todo._id} >
                <p>{todo.title}</p>
                <button onClick={() => todoDelete(todo)}>X</button>
              </div>
            );
          })
        }
      </div>
    );
  }
}

Dashboard.propTypes = {
  todos: PropTypes.array,
  todoCreate: PropTypes.func,
  todoDelete: PropTypes.func,
  todosFetch: PropTypes.func,
  todoUpdate: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = dispatch => ({
  todoCreate: todo => dispatch(todoActions.todoCreateRequest(todo)),
  todoDelete: todo => dispatch(todoActions.todoDeleteRequest(todo)),
  todosFetch: () => dispatch(todoActions.todosFetchRequest()),
  todoUpdate: todo => dispatch(todoActions.todoUpdateRequest(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
