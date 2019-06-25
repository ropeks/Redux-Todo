import {
    ADD_TODO,
    CLICK_TODO,
    CLEAR_TODO
} from '../actions/actions';

const initialState = [{id: 1, value: "add some tasks", completed: false}]

export function todoReducer(sliceOfState = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return sliceOfState.concat(action.payload);
        case CLEAR_TODO:
            return sliceOfState.filter(todo => !todo.completed);
        case CLICK_TODO:
            return sliceOfState.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            })
        default:
            return sliceOfState;
    }
}