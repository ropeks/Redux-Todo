import React from 'react';
import { connect } from 'react-redux';
import { addTodo, clearTodo } from '../actions/actions';

class TodoForm extends React.Component {
    onAddTodo = (e) => {
        const input = e.target['task'];
        e.preventDefault();

        input.value &&
        this.props.addTodo(input.value);
        input.value = '';
    }

    onClearTodo = (e) => {
        e.preventDefault();
        this.props.clearTodo();
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.onAddTodo}>
                    <input name="task" placeholder="Add new task"></input>
                    <button>Add</button>
                    <button type="button" onClick={this.onClearTodo}>Clear</button>
                </form>
            </div>
        )
    }
}

export default connect(
    null,
    { addTodo, clearTodo }
)(TodoForm);