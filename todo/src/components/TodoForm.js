import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';

class TodoForm extends React.Component {
    onAddTodo = (e) => {
        const input = e.target['task'];
        e.preventDefault();

        input.value &&
        this.props.addTodo(input.value);
        input.value = '';
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.onAddTodo}>
                    <input name="task" placeholder="Add new task"></input>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default connect(
    null,
    { addTodo }
)(TodoForm);