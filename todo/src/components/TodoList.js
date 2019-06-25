import React from 'react';
import { connect } from 'react-redux';
import  { clickTodo } from '../actions/actions';
import '../App.css';

class TodoList extends React.Component {
    render() {
        return (
            <div className="list-container">
                <div>
                    {
                        this.props.todos.map(todo => (
                            <div className="task">
                                <div 
                                    key={todo.id} 
                                    onClick={() => this.props.clickTodo(todo.id)}
                                    className={todo.completed ? "selected" : undefined}
                                >
                                    {todo.value}
                                </div>
                            </div>
                        
                        ))
                    }
                </div>
                
            </div>
        )
    }
}

function mapStateToProps(reducers) {
    return {
        todos: reducers.todos
    }
}

export default connect(
    mapStateToProps,
    { clickTodo }
)(TodoList);