import uuid from 'uuid';

// action types
export const ADD_TODO = 'ADD_TODO';
export const CLICK_TODO = 'CLICK_TODO';

// action creators
export function addTodo(value) {
    return {
        type: ADD_TODO,
        payload: {
            id: uuid(),
            value,
            completed: false
        }
    };
}

export function clickTodo(id) {
    return {
        type: CLICK_TODO,
        payload: id
    };
}